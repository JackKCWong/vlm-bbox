import { NextRequest, NextResponse } from 'next/server';

const DASHSCOPE_BASE_URL = process.env.OPENAI_BASE_URL || 'https://dashscope.aliyuncs.com/compatible-mode/v1';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const prompt = formData.get('prompt');
    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    const images: { data: string; width: number; height: number }[] = [];
    let index = 0;

    while (formData.has(`image_${index}`)) {
      const file = formData.get(`image_${index}`) as File;
      const widthStr = formData.get(`width_${index}`);
      const heightStr = formData.get(`height_${index}`);

      const buffer = await file.arrayBuffer();
      const base64 = Buffer.from(buffer).toString('base64');
      const dataUrl = `data:${file.type};base64,${base64}`;

      images.push({
        data: dataUrl,
        width: parseInt(widthStr as string, 10) || 0,
        height: parseInt(heightStr as string, 10) || 0,
      });

      index++;
    }

    if (images.length === 0) {
      return NextResponse.json({ error: 'At least one image is required' }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'OPENAI_API_KEY is not configured' }, { status: 500 });
    }

    const messages = [
      {
        role: 'user',
        content: [
          { type: 'text', text: prompt },
          ...images.map(img => ({
            type: 'image_url',
            image_url: { url: img.data },
          })),
        ],
      },
    ];

    const vlmResponse = await fetch(`${DASHSCOPE_BASE_URL}/responses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'qwen-vl-plus',
        input: { messages },
      }),
    });

    if (!vlmResponse.ok) {
      const errorText = await vlmResponse.text();
      return NextResponse.json(
        { error: `VLM request failed: ${vlmResponse.status}`, details: errorText },
        { status: 502 }
      );
    }

    const result = await vlmResponse.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
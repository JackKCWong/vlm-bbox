import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const dashscope = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL || 'https://dashscope.aliyuncs.com/compatible-mode/v1',
});

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
    const model = process.env.OPENAI_MODEL || 'qwen3.6-plus';
    if (!apiKey) {
      return NextResponse.json({ error: 'OPENAI_API_KEY is not configured' }, { status: 500 });
    }

    console.log('[detect] Received prompt:', prompt);
    console.log('[detect] Received images count:', images.length);
    console.log('[detect] Image sizes:', images.map(img => ({ width: img.width, height: img.height, dataLength: img.data.length })));

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

    console.log('[detect] Full URL:', dashscope.baseURL);
    console.log('[detect] Model:', model);
    console.log('[detect] Request body:', JSON.stringify({ model, input: { messages } }, null, 2));

    const vlmResponse = await dashscope.responses.create({
      model,
      input: { messages },
    });

    console.log('[detect] VLM response:', JSON.stringify(vlmResponse, null, 2));
    return NextResponse.json(vlmResponse);
  } catch (error) {
    console.error('[detect] API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
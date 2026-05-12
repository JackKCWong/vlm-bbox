<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->


# Best practices

* follow modular design, put each module in separate file. Keep modules small and cohesive, preferrably not more than 300 LOC per file.
* never nest code blocks more than 3 layers.
* minimal dependencies, use built-in apis / modules whenever possible. When adding external dependencies, prefer those with fewer transitive dependencies.

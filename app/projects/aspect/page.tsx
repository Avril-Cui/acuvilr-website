import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import { promises as fs } from 'fs';
import path from 'path';
import BackButton from './BackButton';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

export const metadata: Metadata = {
  title: 'Aspect - Gamified Finance Trading Platform',
  description: 'A website that gamifies the learning of finance and trading by creating a market with diverse events.',
};

async function getMarkdownContent() {
  const filePath = path.join(process.cwd(), 'app', 'projects', 'aspect', 'article.md');
  const fileContent = await fs.readFile(filePath, 'utf8');
  return fileContent;
}

export default async function AspectPage() {
  const markdownContent = await getMarkdownContent();

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-12">
          <span className="px-4 py-2 text-white text-sm rounded-full" style={{ backgroundColor: '#3CBCC3' }}>personal project</span>
          <span className="px-4 py-2 text-white text-sm rounded-full" style={{ backgroundColor: '#D05A27' }}>full-stack</span>
          <span className="px-4 py-2 text-white text-sm rounded-full" style={{ backgroundColor: '#A33C21' }}>React</span>
          <span className="px-4 py-2 text-white text-sm rounded-full" style={{ backgroundColor: '#E6B479' }}>Python</span>
        </div>

        {/* Markdown Content */}
        <article className="prose prose-xl max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
              h1: ({children}) => <h1 className="text-4xl font-bold mb-6 mt-8 text-black">{children}</h1>,
              h2: ({children}) => <h2 className="text-3xl font-semibold mb-4 mt-8 text-black">{children}</h2>,
              h3: ({children}) => <h3 className="text-2xl font-medium mb-3 mt-6 text-black">{children}</h3>,
              p: ({children}) => <p className="text-gray-800 leading-relaxed mb-4 text-lg">{children}</p>,
              ul: ({children}) => <ul className="list-disc list-outside ml-6 mb-4 space-y-2 text-gray-800">{children}</ul>,
              ol: ({children}) => <ol className="list-decimal list-outside ml-6 mb-4 space-y-2 text-gray-800">{children}</ol>,
              li: ({children}) => <li className="text-gray-800 leading-relaxed">{children}</li>,
              strong: ({children}) => <strong className="font-semibold text-black">{children}</strong>,
              code: ({children}) => (
                <code className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm font-mono">
                  {children}
                </code>
              ),
              pre: ({children}) => (
                <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg overflow-x-auto mb-4">
                  {children}
                </pre>
              ),
              img: ({src, alt}) => (
                <div className="my-8 flex flex-col items-center">
                  <img
                    src={typeof src === 'string' && src.startsWith('images/') ? `/${src}` : src}
                    alt={alt}
                    className="w-4/5 rounded-lg"
                  />
                  {alt && <p className="text-center text-gray-600 text-sm mt-2 italic">{alt}</p>}
                </div>
              )
            }}
          >
            {markdownContent}
          </ReactMarkdown>
        </article>

        {/* Floating Back Button */}
        <BackButton />
      </div>
    </div>
  );
}
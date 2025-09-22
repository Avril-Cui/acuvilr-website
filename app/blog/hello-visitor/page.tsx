import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import { promises as fs } from 'fs';
import path from 'path';
import BackButton from './BackButton';

export const metadata: Metadata = {
  title: 'Hello visitor! Welcome to my personal website!',
  description: 'Hope you enjoy my website. Here is a picture of my bulldog Friday.',
};

async function getMarkdownContent() {
  const filePath = path.join(process.cwd(), 'app', 'blog', 'hello-visitor', 'article.md');
  const fileContent = await fs.readFile(filePath, 'utf8');
  return fileContent;
}

export default async function HelloVisitorPage() {
  const markdownContent = await getMarkdownContent();

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Markdown Content */}
        <article className="prose prose-xl max-w-none">
          <ReactMarkdown
            components={{
              h1: ({children}) => <h1 className="text-4xl font-bold mb-6 mt-8 text-black">{children}</h1>,
              h2: ({children}) => <h2 className="text-3xl font-semibold mb-4 mt-8 text-black">{children}</h2>,
              h3: ({children}) => <h3 className="text-2xl font-medium mb-3 mt-6 text-black">{children}</h3>,
              p: ({children}) => <p className="text-gray-800 leading-relaxed mb-4 text-lg">{children}</p>,
              ul: ({children}) => <ul className="list-disc list-outside ml-6 mb-4 space-y-2 text-gray-800">{children}</ul>,
              ol: ({children}) => <ol className="list-decimal list-outside ml-6 mb-4 space-y-2 text-gray-800">{children}</ol>,
              li: ({children}) => <li className="text-gray-800 leading-relaxed">{children}</li>,
              strong: ({children}) => <strong className="font-semibold text-black">{children}</strong>,
              img: ({src, alt}) => (
                <div className="my-8 flex flex-col items-center">
                  <img
                    src={src?.startsWith('images/') ? `/${src}` : src}
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
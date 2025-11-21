import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';
import { Quote } from './ui/Quote';
import { ImageModal } from './ui/ImageModal';

interface SlideCardProps {
  title: string;
  pitch: string;
  image?: string;
  patterns?: Array<{ title: string; description: string; image: string }>;
}

export const SlideCard = ({ title, pitch, image, patterns }: SlideCardProps) => {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);
  const components: Components = {
    blockquote: ({ children }) => <Quote>{children}</Quote>,
    code: ({ inline, className, children, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          style={vscDarkPlus}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 md:flex-row">
          {image && (
            <div className="md:w-1/2">
              <img
                src={image}
                alt={title}
                className="w-full rounded-lg border border-slate-200 bg-slate-100 object-contain cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setModalImage({ src: image, alt: title })}
              />
            </div>
          )}
          <div className={image ? 'md:w-1/2' : 'w-full'}>
            <div className="prose prose-sm prose-slate max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
                {pitch}
              </ReactMarkdown>
            </div>
            
            {patterns && patterns.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {patterns.map((pattern, index) => (
                  <div
                    key={index}
                    className="flex flex-col rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div 
                      className="mb-3 flex items-center justify-center bg-slate-50 rounded p-2 cursor-pointer hover:bg-slate-100 transition-colors"
                      onClick={() => setModalImage({ src: pattern.image, alt: pattern.title })}
                    >
                      <img
                        src={pattern.image}
                        alt={pattern.title}
                        className="w-full h-32 object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 mb-2 text-sm">{pattern.title}</h4>
                      <p className="text-xs text-slate-600">{pattern.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>
      
      <ImageModal
        isOpen={modalImage !== null}
        onClose={() => setModalImage(null)}
        imageSrc={modalImage?.src || ''}
        imageAlt={modalImage?.alt || ''}
      />
    </Card>
  );
};

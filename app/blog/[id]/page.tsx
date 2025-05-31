// app/blog/[id]/page.tsx

import React, { JSX } from 'react';
import Image from 'next/image';
import { blogItems, ContentBlock } from '../../../data/blog';


export default async function Page({params}: {params: Promise<{ id: string }>}) {
  const { id } = await params;
  const blog = blogItems.find((item) => item.href === id);

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-neutral-900 text-gray-800 dark:text-gray-200">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Blog post not found.</h1>
          <p>The requested blog post could not be found.</p>
        </div>
      </div>
    );
  }

  const renderContentBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {block.text}
          </p>
        );
      case 'heading':
        const headingTag = `h${block.level || 2}` as keyof JSX.IntrinsicElements;
        return React.createElement(
          headingTag as string,
          {
            key: index,
            className: `text-${(block.level || 2) * 0.5 + 1.5}xl font-bold font-sans tracking-tight text-gray-900 dark:text-white mt-6 mb-3`
          },
          block.text
        );
      case 'image':
        return (
          <div key={index} className="my-6 flex justify-center">
            <img
              src={block.src!}
              alt={block.alt || 'Blog Image'}
              width={600}
              height={400}
              className="rounded-lg shadow-md object-cover max-w-full h-auto"
            />
          </div>
        );
      case 'list':
        return (
          <ul key={index} className="list-disc font-medium tracking-tighter list-inside text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {block.items?.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        );
      case 'code':
        return (
          <pre key={index} className="bg-gray-100 dark:bg-neutral-800 p-4 rounded-md overflow-x-auto text-sm mb-4">
            <code className={`language-${block.language || ''}`}>{block.text}</code>
          </pre>
        );
      default:
        return (
          <div key={index} className="text-red-500 dark:text-red-400">
            Unknown content block type: {block.type}
          </div>
        );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6">
        <h1 className="text-3xl md:text-3xl font-mono font-bold text-gray-900 dark:text-white mb-4">
          {blog.title}
        </h1>
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-6">Post #{blog.number}</div>
        {blog.imageUrl && (
          <div className="my-6">
            <img
              src={blog.imageUrl}
              alt={`Featured image for ${blog.title}`}
              width={1200}
              height={600}
              className="rounded-lg shadow-md w-full h-auto object-cover"
              style={{ maxHeight: '400px' }}
            />
          </div>
        )}
        {blog.content.map(renderContentBlock)}
      </div>
    </div>
  );
}

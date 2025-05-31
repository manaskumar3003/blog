// blog/[id]/page.tsx
import React, { JSX } from 'react';
import { blogItems, ContentBlock } from '../../../data/blog'; // Import BlogItem and ContentBlock

export default function Page({ params }: { params: { id: string } }) {
  // Find the blog item by matching the slug from the URL
  const blog = blogItems.find(
    item => item.href === params.id
  );

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

  // Helper function to render a single content block
  const renderContentBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {block.text}
          </p>
        );
      case 'heading':
        const HeadingTag = `h${block.level || 2}` as keyof JSX.IntrinsicElements; // Default to h2 if level is missing
        return (
          <HeadingTag key={index} className={`text-${(block.level || 2) * 0.5 + 1.5}xl font-bold font-sans tracking-tight text-gray-900 dark:text-white mt-6 mb-3`}>
             {/* Basic sizing based on level, adjust as needed */}
            {block.text}
          </HeadingTag>
        );
      case 'image':
        return (
          <div key={index} className="my-6 flex justify-center">
            <img
              src={block.src}
              alt={block.alt || 'Blog Image'}
              className="rounded-lg shadow-md max-w-full h-auto" // Add basic image styling
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
             <code className={`language-${block.language || ''}`}>{block.text}</code> {/* Add language class if needed */}
           </pre>
         );
      // Add cases for other block types here
      default:
        // Fallback for unknown block types
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
        {/* Title */}
        <h1 className="text-3xl md:text-3xl font-mono font-bold text-gray-900 dark:text-white mb-4">
          {blog.title}
        </h1>

        {/* Post Number (optional, depending on if you want to display this) */}
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Post #{blog.number}
        </div>

        {/* Featured Image (optional) */}
        {blog.imageUrl && (
          <div className="my-6">
            <img
              src={blog.imageUrl}
              alt={`Featured image for ${blog.title}`}
              className="rounded-lg shadow-md w-full h-auto object-cover" // Cover the area nicely
              style={{ maxHeight: '400px' }} // Example height limit
            />
          </div>
        )}


        {/* Render the content blocks */}
        {blog.content.map(renderContentBlock)}

      </div>
    </div>
  );
}
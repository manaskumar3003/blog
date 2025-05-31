import React from 'react';
import Link from 'next/link';
import { blogItems, BlogItem } from '@/data/blog';

export default function Home() {
  const truncateText = (text: string, limit: number): string => {
    if (text.split(' ').length > limit) {
      return text.split(' ').slice(0, limit).join(' ') + '...';
    }
    return text;
  };

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-60 py-8 w-full">
      {blogItems.map((item: BlogItem, index: number) => (
        <Link key={index} href={`blog/${item.href}`}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center px-4 py-4 border my-4 cursor-pointer rounded-2xl hover:scale-100 hover:-translate-y-1 transition duration-200 ease-in-out bg-neutral-900 shadow shadow-neutral-900">
            <div className="w-full sm:w-auto flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
              <img
                src={`https://picsum.photos/seed/${item.number}/200/200`}
                alt={item.title}
                className="w-20 h-20 rounded-xl object-cover"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-xl font-mono text-white font-bold overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
                {truncateText(item.title, 8)}
              </h2>
              <p className="text-gray-300 mt-2 border p-1 rounded-sm bg-black/10 inline-block">
                {item.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

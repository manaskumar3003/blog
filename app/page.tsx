import React from 'react';
import Link from 'next/link'; // Assuming you are using Next.js for routing
import { blogItems, BlogItem } from '@/data/blog'; // Adjust the import path and import BlogItem

export default function Home() {

  // Function to truncate text
  const truncateText = (text: string, limit: number): string => {
    if (text.split(' ').length > limit) {
      return text.split(' ').slice(0, limit).join(' ') + '...';
    }
    return text;
  };

  return (
    <div className='px-60 w-full h-full '>
      {blogItems.map((item: BlogItem, index: number) => ( // Use BlogItem type
        <Link key={index} href={`blog/${item.href}`}> {/* Wrap the entire item in a Link component */}
          <div className="px-4 py-4 border my-4 cursor-pointer rounded-2xl hover:scale-100 hover:-translate-y-1 transition delay-50 duration-200 ease-in-out bg-neutral-900 shadow shadow-neutral-900 shadow-md flex">
            <div className='flex-shrink-0 mr-4'>
              <img
                src={`https://picsum.photos/seed/${item.number}/200/200`}
                alt={item.title}
                className="w-20 h-20 rounded-xl object-cover"
              />
            </div>
            <div className='flex-grow flex flex-col justify-between'>
              <div>
                <h2 className="text-xl font-mono text-white font-bold overflow-hidden whitespace-nowrap text-overflow-ellipsis">
                  {truncateText(item.title, 8)}
                </h2>
              </div>
              <div className='self-start'>
                <p className="text-gray-300 mt-2 border p-1 rounded-sm bg-black/10 inline-block">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
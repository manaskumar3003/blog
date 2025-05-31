// data/blog.ts

export interface BlogItem {
  title: string;
  // Keep description for the list/summary view if needed, or remove it
  description?: string; // Optional: if the full content is in the 'content' array
  number: number;
  href: string; // Slug for the URL
  imageUrl?: string; // Optional featured image for the post
  content: ContentBlock[]; // Array to hold different types of content blocks
}

export interface ContentBlock {
  type: 'paragraph' | 'heading' | 'image' | 'code' | 'quote' | 'list' | string; // Define possible block types
  // Add properties based on the type:
  text?: string; // For paragraphs, headings, quotes, etc.
  level?: 1 | 2 | 3 | 4 | 5 | 6; // For headings (h1, h2, etc.)
  src?: string; // For images
  alt?: string; // For images
  language?: string; // For code blocks
  items?: string[]; // For lists
  // You can add more properties as needed for other block types
}

export const blogItems: BlogItem[] = [
  {
    title: "How To Start Development journey",
    description: "Web Dev", // Optional description
    number: 1,
    href: "how-to-start-development-journey",
    imageUrl: "https://picsum.photos/seed/dev/800/400", // Example featured image
    content: [
{ type: 'heading', level: 3, text: '💡Recommended Resources' },
{ type: 'list', items: [
  'freeCodeCamp: Offers a comprehensive, self-paced curriculum covering HTML, CSS, JavaScript, and more.',
  'Wikipedia',
  'W3Schools: Provides tutorials and references on web development languages such as HTML, CSS, JavaScript, PHP, and SQL.',
  'The Odin Project: Features a full-stack curriculum that integrates project-based learning.',
  'Stack Overflow',
  'roadmap.sh',
  'BrowserStack',
  'YouTube Channels: Channels like Traversy Media and The Net Ninja offer practical tutorials and project walkthroughs.'
] },
{ type: 'heading', level: 3, text: '🛠️ Tools to Get Started' },
{ type: 'list', items: [
  'Code Editors: Visual Studio Code, Sublime Text',
  'Version Control: Git and GitHub for tracking changes and collaboration',
  'Stack Overflow',
  'YouTube',
  'Design Inspiration: Dribbble, Behance',
  'Deployment Platforms: Netlify, Vercel, GitHub Pages'
] },
{ type: 'paragraph', text: 'Consistency is key!' },
      
      
    ],
  },
  {
    title: "Another Interesting Topic",
    description: "Details about the topic.",
    number: 2,
    href: "another-topic",
    content: [
      { type: 'paragraph', text: 'Content for the second blog post.' },
      // Add other blocks
    ],
  },
   {
    title: "The Future of AI",
    description: "Exploring advancements in AI.",
    number: 3,
    href: "the-future-of-ai",
    imageUrl: "https://picsum.photos/seed/ai/800/400",
    content: [
      { type: 'heading', level: 2, text: 'AI Advancements' },
      { type: 'paragraph', text: 'Artificial intelligence continues to evolve rapidly...' },
      // ... more content blocks
    ],
  },
];
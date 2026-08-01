import React from 'react';
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: 'Building NarrateVision: Creating an AI-Powered Video Generator',
    excerpt:
      'A deep dive into the development process of NarrateVision, challenges faced, and how we leveraged AI APIs to transform text into engaging videos.',
    date: 'Dec 15, 2023',
    readTime: '15 min',
    category: 'AI',
    link: '#',
  },
  {
    id: 2,
    title: 'Building Modern Web Applications with React and TypeScript',
    excerpt:
      'How to leverage TypeScript with React to build type-safe, maintainable web applications with improved developer experience.',
    date: 'May 15, 2023',
    readTime: '8 min',
    category: 'Development',
    link: '#',
  },
  {
    id: 3,
    title: 'Optimizing Database Performance in Web Applications',
    excerpt:
      'Strategies for improving database performance — from query optimization to indexing and caching techniques.',
    date: 'Jul 22, 2023',
    readTime: '10 min',
    category: 'Database',
    link: '#',
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-container">
      <p className="section-heading">Blog</p>
      <h2 className="section-title">Writing</h2>
      <p className="text-muted-foreground text-sm mb-12 max-w-lg">
        Insights and tutorials on web development, AI, and building things.
      </p>

      <div className="space-y-0 divide-y divide-border">
        {blogPosts.map((post) => (
          <a
            key={post.id}
            href={post.link}
            className="group flex items-start justify-between gap-6 py-6 hover:bg-muted/30 transition-colors -mx-4 px-4 rounded-lg"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="mono text-xs text-primary">{post.category}</span>
                <span className="text-muted-foreground/40 text-xs">·</span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
                <span className="text-muted-foreground/40 text-xs">·</span>
                <span className="text-xs text-muted-foreground">{post.readTime} read</span>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1 leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
            </div>
            <div className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1">
              <ArrowRight size={16} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

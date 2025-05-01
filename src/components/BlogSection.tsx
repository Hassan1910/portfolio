import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Building NarrateVision: Creating an AI-Powered Video Generator",
    excerpt: "A deep dive into the development process of NarrateVision, challenges faced, and how we leveraged AI APIs to transform text into engaging videos.",
    image: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "December 15, 2023",
    readTime: "15 min read",
    category: "AI",
    tags: ["AI", "FFmpeg", "Next.js", "Text-to-Speech"],
    link: "#"
  },
  {
    id: 2,
    title: "Building Modern Web Applications with React and TypeScript",
    excerpt: "Learn how to leverage TypeScript with React to build type-safe, maintainable web applications with improved developer experience.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "May 15, 2023",
    readTime: "8 min read",
    category: "Development",
    tags: ["React", "TypeScript", "Web Development"],
    link: "#"
  },
  {
    id: 3,
    title: "Optimizing Database Performance in Web Applications",
    excerpt: "Explore strategies for improving database performance, from query optimization to indexing and caching techniques.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    date: "July 22, 2023",
    readTime: "10 min read",
    category: "Database",
    tags: ["SQL", "Performance", "Optimization"],
    link: "#"
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-container relative">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 -z-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/3 left-0 -z-10 w-72 h-72 bg-accent/5 rounded-full blur-[100px]"></div>

      <div className="flex flex-col items-center mb-6">
        <Badge variant="outline" className="mb-3 px-3 py-1 border-primary/20 text-primary">
          <FileText size={14} className="mr-1" /> My Articles
        </Badge>
        <h2 className="section-title">Latest Blog Posts</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mt-4">
          Insights, tutorials, and thoughts on web development, design, and technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card
            key={post.id}
            className="overflow-hidden border-primary/10 shadow-md hover:shadow-lg transition-all hover:border-primary/20 flex flex-col h-full"
          >
            <div className="relative aspect-video overflow-hidden">
              <div className="absolute top-3 left-3 z-10">
                <Badge className="bg-background/80 backdrop-blur-sm text-foreground hover:bg-background/90">
                  {post.category}
                </Badge>
              </div>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>

            <CardContent className="p-6 flex-grow flex flex-col">
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <div className="flex items-center mr-4">
                  <Calendar className="h-3.5 w-3.5 mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, index) => (
                  <div key={index} className="flex items-center text-xs bg-muted/50 px-2 py-1 rounded-full">
                    <Tag className="h-3 w-3 mr-1 text-primary" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent"
                  asChild
                >
                  <a href={post.link} className="flex items-center">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button variant="outline" className="border-primary/20 hover:border-primary/50">
          <a href="#" className="flex items-center gap-2">
            View All Articles <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default BlogSection;

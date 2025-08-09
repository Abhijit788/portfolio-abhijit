"use client"

import Link from "next/link"
import AnimateOnScroll from "./AnimateOnScroll"
import TypewriterText from "./TypewriterText"
import { FileText, Calendar, ExternalLink, Folder, GitBranch } from "lucide-react"
import TiltCard from "./tilt-card"

interface BlogPost {
  title: string
  excerpt: string
  date: string
  slug: string
  category: string
  readTime: string
  status: string
}

export default function Blog() {
  const blogPosts: BlogPost[] = [
    {
      title: "Nvidia Developer Conference Insights",
      excerpt:
        "Exploring the latest innovations and announcements from Nvidia's recent developer conference, including advancements in AI, graphics, and high-performance computing.",
      date: "May 15, 2023",
      slug: "nvidia-developer-conference-insights",
      category: "AI/Tech",
      readTime: "5 min",
      status: "published",
    },
    {
      title: "Recent Trends in IT",
      excerpt:
        "An overview of the most impactful trends shaping the IT industry, from cloud computing and edge AI to cybersecurity and sustainable tech practices.",
      date: "June 2, 2023",
      slug: "recent-trends-in-it",
      category: "Industry",
      readTime: "7 min",
      status: "published",
    },
    {
      title: "AI: A Friend or Enemy?",
      excerpt:
        "Delving into the ethical implications and societal impacts of artificial intelligence, examining both its potential benefits and risks.",
      date: "June 20, 2023",
      slug: "ai-friend-or-enemy",
      category: "Opinion",
      readTime: "6 min",
      status: "published",
    },
  ]

  return (
    <section id="blog" className="py-16 md:py-24 lg:py-32 bg-gray-800 relative overflow-hidden code-grid">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        {/* Blog Header */}
        <div className="ide-window max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="ide-titlebar">
            <div className="ide-controls">
              <div className="ide-control close"></div>
              <div className="ide-control minimize"></div>
              <div className="ide-control maximize"></div>
            </div>
            <div className="flex-1 flex overflow-x-auto">
              <div className="ide-tab active">blog_posts.md</div>
              <div className="ide-tab hidden sm:block">articles.json</div>
              <div className="ide-tab hidden md:block">content_tree.txt</div>
            </div>
          </div>

          <div className="p-4 md:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4 md:mb-6">
              <Folder className="h-5 w-5 md:h-6 md:w-6 syntax-keyword flex-shrink-0" />
              <h2 className="text-2xl md:text-3xl font-bold syntax-function">
                <TypewriterText text="Technical Blog" speed={80} />
              </h2>
              <div className="status-indicator">
                <div className="status-dot online"></div>
                <span className="text-sm md:text-base">{blogPosts.length} articles published</span>
              </div>
            </div>

            <div className="code-block" data-language="markdown">
              <div className="line-numbers">
                {Array.from({ length: 6 }, (_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <div className="code-content text-xs md:text-sm">
                <div>
                  <span className="syntax-comment"># Technical Writing & Insights</span>
                </div>
                <div className="mt-2">
                  <span className="syntax-string">Sharing knowledge and perspectives on software development,</span>
                </div>
                <div>
                  <span className="syntax-string">AI/ML technologies, and industry trends.</span>
                </div>
                <div className="mt-2">
                  <span className="syntax-keyword">**Topics:**</span>{" "}
                  <span className="syntax-variable">AI, Web Development, Data Science</span>
                </div>
                <div>
                  <span className="syntax-keyword">**Frequency:**</span>{" "}
                  <span className="syntax-variable">Weekly updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid - Responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <AnimateOnScroll key={index} animation="scaleUp">
              <TiltCard className="h-full">
                <div className="ide-window hover-highlight h-full flex flex-col">
                  <div className="ide-titlebar">
                    <div className="ide-controls">
                      <div className="ide-control close"></div>
                      <div className="ide-control minimize"></div>
                      <div className="ide-control maximize"></div>
                    </div>
                    <div className="flex-1 flex items-center justify-center space-x-2 min-w-0">
                      <FileText className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                      <span className="text-xs md:text-sm truncate">{post.slug}.md</span>
                    </div>
                    <div className="status-indicator syntax-comment flex-shrink-0">
                      <div className="status-dot online"></div>
                      <span className="text-xs">{post.status}</span>
                    </div>
                  </div>

                  <div className="p-4 md:p-6 space-y-4 md:space-y-6 flex-1 flex flex-col">
                    {/* Post Header */}
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        <span className="px-2 py-1 ide-window text-xs syntax-keyword flex-shrink-0 w-fit">
                          {post.category}
                        </span>
                        <div className="flex items-center space-x-2 text-xs syntax-comment flex-shrink-0">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>

                      <h3 className="text-lg md:text-xl font-bold syntax-function leading-tight">{post.title}</h3>
                    </div>

                    {/* Post Content - Flex grow to fill space */}
                    <div className="flex-1 space-y-4">
                      <p className="text-sm md:text-base leading-relaxed syntax-operator">{post.excerpt}</p>

                      {/* File Metadata */}
                      <div className="debug-panel">
                        <div className="debug-header">File Metadata</div>
                        <div className="debug-content space-y-2">
                          <div className="debug-line">
                            <span className="debug-level info text-xs">[SIZE]</span>
                            <span className="syntax-comment text-xs">{post.readTime} read</span>
                          </div>
                          <div className="debug-line">
                            <span className="debug-level info text-xs">[TYPE]</span>
                            <span className="syntax-string text-xs">markdown</span>
                          </div>
                          <div className="debug-line">
                            <span className="debug-level info text-xs">[STATUS]</span>
                            <span className="syntax-comment text-xs">{post.status}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Post Actions - Fixed at bottom, fully visible */}
                    <div className="mt-auto pt-4 border-t border-gray-700">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div className="flex items-center space-x-3">
                          <div className="status-indicator">
                            <GitBranch className="h-3 w-3" />
                            <span className="text-xs">main branch</span>
                          </div>
                        </div>

                        <Link
                          href={`/blog/${post.slug}`}
                          className="code-button flex items-center justify-center space-x-2 text-xs w-full sm:w-auto px-4 py-2"
                        >
                          <ExternalLink className="h-3 w-3" />
                          <span>read_article()</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Blog Statistics */}
        <AnimateOnScroll>
          <div className="console-window mt-12 md:mt-16 max-w-4xl mx-auto">
            <div className="console-header">Content Analytics</div>
            <div className="console-content">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="space-y-2">
                  <div className="syntax-comment text-xs md:text-sm">$ wc -w *.md</div>
                  <div className="syntax-number text-sm md:text-base">12,500+ words published</div>
                </div>
                <div className="space-y-2">
                  <div className="syntax-comment text-xs md:text-sm">$ find . -name "*.md" | wc -l</div>
                  <div className="syntax-number text-sm md:text-base">{blogPosts.length} articles total</div>
                </div>
                <div className="space-y-2">
                  <div className="syntax-comment text-xs md:text-sm">$ git log --since="1 month" --oneline</div>
                  <div className="syntax-comment text-sm md:text-base">Regular content updates</div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

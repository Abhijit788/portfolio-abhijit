"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { useTheme } from "next-themes"
import { ThemeProvider } from "next-themes"

interface BlogPost {
  title: string
  content: string
  date: string
}

const blogPosts: Record<string, BlogPost> = {
  "nvidia-developer-conference-insights": {
    title: "Nvidia Developer Conference Insights",
    content:
      "The recent Nvidia Developer Conference showcased groundbreaking advancements in AI, graphics, and high-performance computing. Nvidia unveiled its latest GPU architecture, promising unprecedented performance for both gaming and AI applications. The conference also highlighted new tools for developers to harness the power of AI in various industries, from healthcare to autonomous vehicles. As AI continues to evolve, Nvidia's innovations are set to play a crucial role in shaping the future of technology.",
    date: "May 15, 2023",
  },
  "recent-trends-in-it": {
    title: "Recent Trends in IT",
    content:
      "The IT landscape is rapidly evolving, with several key trends emerging in recent months. Cloud computing continues to dominate, with a shift towards hybrid and multi-cloud strategies. Edge AI is gaining traction, bringing computational power closer to data sources for faster processing and reduced latency. Cybersecurity remains a top priority, with AI-powered threat detection becoming increasingly prevalent. Sustainable tech practices are also on the rise, as companies seek to reduce their carbon footprint through energy-efficient data centers and eco-friendly hardware designs.",
    date: "June 2, 2023",
  },
  "ai-friend-or-enemy": {
    title: "AI: A Friend or Enemy?",
    content:
      "As artificial intelligence becomes more integrated into our daily lives, the debate over its impact on society intensifies. On one hand, AI has the potential to revolutionize healthcare, education, and scientific research, leading to breakthroughs that could improve the quality of life for millions. On the other hand, concerns about job displacement, privacy infringement, and the potential for AI to be used maliciously cannot be ignored. As we navigate this complex landscape, it's crucial to approach AI development with a balanced perspective, emphasizing ethical considerations and human-centered design to ensure that AI remains a friend rather than a foe.",
    date: "June 20, 2023",
  },
}

function BlogPostContent({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]
  const { theme } = useTheme()

  if (!post) {
    notFound()
  }

  return (
    <div
      className={`min-h-screen py-12 ${theme === "dark" ? "bg-dark-900 text-dark-100" : "bg-gray-100 text-dark-800"}`}
    >
      <article
        className={`container mx-auto px-6 ${theme === "dark" ? "bg-dark-800" : "bg-white"} rounded-lg shadow-md overflow-hidden`}
      >
        <div className="py-12 px-6">
          <h1 className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-dark-50" : "text-dark-800"}`}>
            {post.title}
          </h1>
          <p className={`${theme === "dark" ? "text-dark-400" : "text-gray-500"} mb-6`}>{post.date}</p>
          <div className={`prose max-w-none ${theme === "dark" ? "text-dark-200" : "text-dark-600"}`}>
            <p>{post.content}</p>
          </div>
        </div>
      </article>
      <div className="container mx-auto px-6 mt-8">
        <Link
          href="/#blog"
          className={`${theme === "dark" ? "text-primary-dark-400 hover:text-primary-dark-300" : "text-primary-light-600 hover:text-primary-light-800"}`}
        >
          ← Back to all posts
        </Link>
      </div>
    </div>
  )
}

export default function BlogPost(props: { params: { slug: string } }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <BlogPostContent {...props} />
    </ThemeProvider>
  )
}

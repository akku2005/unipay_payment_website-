import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import blogPosts from "../../../data/blogPosts.json";

const Blog = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-black to-gray-900 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow mt-28">
          <div className="max-w-screen-xl mx-auto px-4 lg:px-8 mb-20 mt-20">
            <h1 className="text-4xl font-bold text-center text-blue-500 mb-10">
              UniPay <span className="text-rose-500">Blog</span>
              <span className="text-lime-500">.</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.length > 0 ? (
                blogPosts.map((post) => (
                  <BlogCard
                    key={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.published_at}
                    author={post.author}
                    slug={post.slug}
                  />
                ))
              ) : (
                <p className="text-center text-gray-500">
                  No blog posts available.
                </p>
              )}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

const BlogCard = ({ title, excerpt, date, author, slug }) => {
  const formattedDate = date
    ? new Date(date).toLocaleDateString()
    : "Unknown date";

  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md border border-gray-700 rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2 text-white hover:text-blue-400 transition">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h2>
        <p className="text-gray-300 mb-4">{excerpt}</p>
        <div className="text-sm text-gray-400">
          <span>By {author}</span> • <span>{formattedDate}</span>
        </div>
      </div>
    </div>
  );
};

export default Blog;

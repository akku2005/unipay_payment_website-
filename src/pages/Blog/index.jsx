import React from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation
import Header from "../../components/Header";
import Footer from "../../components/Footer"; // Import Footer component
import blogPosts from "../../data/blogPosts.json";

const Blog = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col min-h-screen ">
        <Header />
        <main className="flex-grow mt-28 h-[400px]">
          <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
            <h1 className="text-4xl font-bold text-center mb-10">
              UniPay Blog
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
        <Footer /> {/* Footer is placed at the bottom */}
      </div>
    </>
  );
};

const BlogCard = ({ title, excerpt, date, author, slug }) => {
  const formattedDate = date
    ? new Date(date).toLocaleDateString()
    : "Unknown date";

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600 transition">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h2>
        <p className="text-gray-500 mb-4">{excerpt}</p>
        <div className="text-sm text-gray-400">
          <span>By {author}</span> • <span>{formattedDate}</span>
        </div>
      </div>
    </div>
  );
};

export default Blog;

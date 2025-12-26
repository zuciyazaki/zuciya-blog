import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { posts } from './posts/allPosts';

// Navigation Component
function Navigation() {
  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 border-b-4 border-amber-600 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div>
              <h1 className="text-2xl font-bold text-cyan-500 group-hover:text-cyan-400 transition-colors">
                Zuciya Zaki
              </h1>
              <p className="text-gray-400 text-sm">SOC Analyst in Training</p>
            </div>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-cyan-500 transition-colors font-medium"
            >
              Blog
            </Link>
            <a 
              href="https://tools.zuciyazaki.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-500 transition-colors font-medium"
            >
              Tools
            </a>
            <a 
              href="https://github.com/zuciyazaki" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-500 transition-colors font-medium"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 border-t-4 border-amber-600 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-cyan-500 font-bold text-lg mb-4 flex items-center">
              About Zuciya Zaki
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              SOC Analyst in training. Building practical skills through TryHackMe labs, 
              custom security tools, and Security+ preparation. 
              <span className="block mt-2 text-cyan-500 font-semibold">
                Top 6% on TryHackMe | 87 Rooms Completed | 17 Badges Earned
              </span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-cyan-500 font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://tools.zuciyazaki.com" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-cyan-500 transition-colors">
                  🛠️ Security Tools
                </a>
              </li>
              <li>
                <a href="https://github.com/zuciyazaki" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-cyan-500 transition-colors">
                  💻 GitHub Portfolio
                </a>
              </li>
              <li>
                <a href="https://tryhackme.com/p/zuciyazaki" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-cyan-500 transition-colors">
                  🎯 TryHackMe Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-cyan-500 font-bold text-lg mb-4">Connect</h3>
            <p className="text-gray-400 text-sm mb-4">
              Follow my journey, see my tools, and let's connect!
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/zuciyazaki" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-cyan-500 transition-colors text-2xl">
                💻
              </a>
              <a href="https://linkedin.com/in/dominicmetz" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-cyan-500 transition-colors text-2xl">
                🔗
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Zuciya Zaki (Dominic Metz) | Built with React & Lion-Hearted Determination 🦁🔥</p>
          <p className="mt-2 text-xs text-gray-600">
            zuciyazaki.com | tools.zuciyazaki.com | blog.zuciyazaki.com
          </p>
        </div>
      </div>
    </footer>
  );
}

// Blog Post Card Component
function BlogCard({ post }) {
  return (
    <Link to={`/post/${post.slug}`} className="block group">
      <article className="bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-gray-700 group-hover:border-cyan-500">
        {/* Category Badge */}
        <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 px-4 py-2">
          <span className="text-white text-sm font-semibold uppercase tracking-wide">
            {post.category}
          </span>
        </div>

        <div className="p-6">
          {/* Title */}
          <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
            {post.title}
          </h2>

          {/* Metadata */}
          <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
            <span className="flex items-center">
              📅 {post.date}
            </span>
            <span className="flex items-center">
              ⏱️ {post.readTime}
            </span>
            {post.streak && (
              <span className="flex items-center text-cyan-400 font-semibold">
                🔥 Day {post.streak}
              </span>
            )}
          </div>

          {/* Excerpt */}
          <p className="text-gray-300 leading-relaxed mb-4">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map(tag => (
              <span key={tag} className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>

          {/* Read More */}
          <div className="flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300">
            Read Full Story
            <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

// Blog Homepage Component
function BlogHome() {
  // Sort posts by date (newest first)
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            <span className="text-cyan-400">SOC Analyst</span> in Training
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building practical cybersecurity skills through hands-on labs, custom tool development, 
            and daily practice. Documenting technical insights and real-world progress.
            <span className="block mt-2 text-cyan-400 font-semibold">
              Currently focused on Security+, TryHackMe SOC path, and blue team operations.
            </span>
          </p>
          
          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg shadow-md p-4 border-t-4 border-cyan-500">
              <div className="text-3xl font-bold text-cyan-400">59</div>
              <div className="text-sm text-gray-400">Day Streak</div>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-md p-4 border-t-4 border-blue-500">
              <div className="text-3xl font-bold text-blue-400">Top 6%</div>
              <div className="text-sm text-gray-400">TryHackMe Rank</div>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-md p-4 border-t-4 border-red-500">
              <div className="text-3xl font-bold text-red-400">5</div>
              <div className="text-sm text-gray-400">Tools Built</div>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-md p-4 border-t-4 border-green-500">
              <div className="text-3xl font-bold text-green-400">87</div>
              <div className="text-sm text-gray-400">Rooms Completed</div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {sortedPosts.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-lg shadow-xl p-8 text-center text-white border border-cyan-500">
          <h2 className="text-3xl font-bold mb-4">Explore My Security Tools & Projects</h2>
          <p className="text-lg mb-6 opacity-90">
            Check out my custom security tools, GitHub projects, and TryHackMe progress!
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://tools.zuciyazaki.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors border border-gray-700"
            >
              🛠️ Security Tools
            </a>
            <a 
              href="https://github.com/zuciyazaki" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors border border-gray-700"
            >
              💻 GitHub
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Individual Blog Post Component
function BlogPost() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/" className="text-cyan-400 hover:text-cyan-300 font-semibold">
            ← Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold mb-8">
          ← Back to All Posts
        </Link>

        {/* Post Header */}
        <header className="mb-12">
          <div className="mb-4">
            <span className="bg-cyan-600 text-white text-sm font-semibold uppercase tracking-wide px-4 py-2 rounded">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center space-x-6 text-gray-400 mb-6">
            <span className="flex items-center">
              📅 {post.date}
            </span>
            <span className="flex items-center">
              ⏱️ {post.readTime}
            </span>
            {post.streak && (
              <span className="flex items-center text-cyan-400 font-semibold">
                🔥 Day {post.streak}
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Post Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-800 rounded-lg shadow-md p-8 md:p-12 border border-gray-700">
            {post.content}
          </div>
        </div>

        {/* Post Footer */}
        <div className="mt-12 p-8 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-lg text-white">
          <h3 className="text-2xl font-bold mb-4">Interested in My Work?</h3>
          <p className="mb-6">
            Check out my security tools, follow my progress on TryHackMe, or connect with me on GitHub!
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://tools.zuciyazaki.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              🛠️ Security Tools
            </a>
            <a 
              href="https://github.com/zuciyazaki" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              💻 GitHub
            </a>
            <Link 
              to="/"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              📚 More Posts
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogHome />} />
        <Route path="/post/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;

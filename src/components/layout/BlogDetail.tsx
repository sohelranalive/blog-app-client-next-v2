import { BlogPost } from "@/types";
import {
  Eye,
  Calendar,
  MessageCircle,
  ArrowLeft,
  Share2,
  Bookmark,
} from "lucide-react";
import Link from "next/link";

type BlogDetailProps = {
  post: BlogPost;
};

export function BlogDetail({ post }: BlogDetailProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Posts</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Article Header */}
        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Featured Image */}
          {post.thumbnail ? (
            <div className="w-full h-96 overflow-hidden">
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-full h-96 bg-linear-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <span className="text-gray-400 text-lg">No Image Available</span>
            </div>
          )}

          {/* Content Container */}
          <div className="p-8 md:p-12">
            {/* Status & Featured Badges */}
            <div className="flex gap-2 mb-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  post.status === "PUBLISHED"
                    ? "bg-green-500 text-white"
                    : post.status === "DRAFT"
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-500 text-white"
                }`}
              >
                {post.status}
              </span>
              {post.isFeatured && (
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500 text-white">
                  Featured
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="text-sm">
                  {formatDate(post.createdAt)} at {formatTime(post.createdAt)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                <span className="text-sm">{post.views} views</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm">{post._count.comments} comments</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-8">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Bookmark className="w-4 h-4" />
                Save
              </button>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {post.content}
              </p>
            </div>

            {/* Tags Section */}
            {post.tags.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Article Footer */}
            <div className="pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Last updated: {formatDate(post.updatedAt)}
                </div>
                <div className="text-sm text-gray-500">
                  Author ID: {post.authorId}
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Comments Section Placeholder */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Comments ({post._count.comments})
          </h2>
          <div className="text-center py-12 text-gray-500">
            <MessageCircle className="w-12 h-12 mx-auto mb-3 text-gray-300" />
            <p>Comments section coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

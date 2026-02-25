import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { Clock, Calendar, Tag, FileText, Award } from "lucide-react";
import { blogArticlesZh } from "@/lib/blogArticlesZh";

export default function BlogIndexZh() {
  const totalArticles = blogArticlesZh.length;

  return (
    <LayoutZh>
      <SEO
        title="航空延误/取消赔偿博客 - 欧盟EU 261专业指南【中文】"
        description="专为中国乘客打造的欧洲航班延误/取消赔偿完整指南。了解EU 261/2004法规、索赔流程、真实案例。已发布25篇深度文章"
      />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-slate-900">
              航空赔偿知识库
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4">
              专为中国乘客打造的欧洲航班赔偿完整指南
            </p>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Award className="w-4 h-4" />
              <span>已发布 25 篇深度文章</span>
            </div>
          </header>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              全部文章
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition">
              法规指南
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition">
              航空公司
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition">
              机场指南
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition">
              实用技巧
            </button>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogArticlesZh.map((article) => (
              <Link
                key={article.slug}
                href={`/zh/blog/${article.slug}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-300"
              >
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">
                      {article.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition line-clamp-2">
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Read More Footer */}
                <div className="px-6 py-3 bg-gray-50 group-hover:bg-blue-50 transition">
                  <span className="text-blue-600 font-medium text-sm group-hover:translate-x-1 inline-block transition-transform">
                    阅读全文 →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">您的航班遇到问题了吗？</h2>
            <p className="text-xl mb-6 text-blue-100">
              30秒免费检查您的航班是否有资格获得€250-€600的赔偿
            </p>
            <a
              href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog_index&utm_campaign=zh_blog_cta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              免费检查航班 →
            </a>
          </div>
        </div>
      </div>
    </LayoutZh>
  );
}
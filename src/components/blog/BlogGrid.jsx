import React, { useState } from "react";
import { Search, X, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";
import { BlogCard } from "./BlogCard";
import { blogCategories } from "../../data/blogData";

export const BlogGrid = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  const categories = blogCategories || [
    { id: "all", nameAr: "جميع المقالات", nameEn: "All Articles" },
    { id: "ui-ux", nameAr: "واجهات وتجربة المستخدم", nameEn: "UI/UX & Design" },
    { id: "ecommerce", nameAr: "التجارة الإلكترونية", nameEn: "E-Commerce" },
    { id: "frontend", nameAr: "تطوير الواجهات والتقنية", nameEn: "Frontend & Tech" },
    { id: "bilingual", nameAr: "التصميم ثنائي اللغة (RTL)", nameEn: "Bilingual & RTL" },
  ];

  const filteredPosts = posts.filter((post) => {
    const title = isRtl ? post.titleAr : post.titleEn;
    const excerpt = isRtl ? post.excerptAr : post.excerptEn;
    const category = isRtl ? post.categoryAr : post.categoryEn;
    const tags = isRtl ? (post.tagsAr || []) : (post.tagsEn || []);

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      title.toLowerCase().includes(query) ||
      excerpt.toLowerCase().includes(query) ||
      category.toLowerCase().includes(query) ||
      tags.some((tg) => tg.toLowerCase().includes(query));

    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "ui-ux" && (category.includes("UI") || category.includes("واجهات") || category.includes("الألوان"))) ||
      (selectedCategory === "ecommerce" && (category.includes("Commerce") || category.includes("تجارة") || category.includes("متجر"))) ||
      (selectedCategory === "frontend" && (category.includes("Frontend") || category.includes("الواجهات الأمامية") || category.includes("Tailwind"))) ||
      (selectedCategory === "bilingual" && (category.includes("Bilingual") || category.includes("ثنائي اللغة") || category.includes("RTL")));

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-10">
      {/* Search & Filter Bar */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
        {/* Search Input */}
        <div className="relative w-full lg:w-80">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t("blog.searchPlaceholder")}
            className="w-full bg-slate-50 dark:bg-slate-850 text-slate-800 dark:text-slate-100 rounded-2xl ps-10 pe-4 py-3 text-sm border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <Search size={18} strokeWidth={2} className="absolute start-3.5 top-3.5 text-slate-400" aria-hidden="true" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute end-3 top-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md"
              aria-label="مسح البحث"
            >
              <X size={18} strokeWidth={2} aria-hidden="true" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 w-full lg:w-auto justify-start lg:justify-end">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-amber-600 to-yellow-500 text-slate-950 shadow-md shadow-amber-500/20 scale-105"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {isRtl ? cat.nameAr : cat.nameEn}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
          <FileText size={48} strokeWidth={1.5} className="text-slate-300 dark:text-slate-600 mb-4 mx-auto" aria-hidden="true" />
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
            {t("blog.noResults")}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto mb-6">
            {t("blog.noResultsDesc")}
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="btn-gold px-6 py-2.5 rounded-xl text-xs font-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            {t("blog.resetFilter")}
          </button>
        </div>
      )}
    </div>
  );
};

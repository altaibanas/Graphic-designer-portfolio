import React, { useState } from "react";
import { Share2, Check, Copy } from "lucide-react";
import { useTranslation } from "react-i18next";
import { XTwitterIcon, LinkedinIcon, WhatsAppIcon } from "../common/SocialIcons";

export const ShareButtons = ({ title, url }) => {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation();

  const shareUrl = url || window.location.href;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="flex flex-wrap items-center gap-3 py-6 border-y border-slate-200 dark:border-slate-800 my-10">
      <span className="text-slate-600 dark:text-slate-400 font-bold text-sm me-2 flex items-center gap-1.5">
        <Share2 size={16} strokeWidth={2} className="text-amber-500" aria-hidden="true" />
        <span>{t("blog.share")}</span>
      </span>

      {/* X / Twitter */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-black hover:text-white p-2.5 rounded-xl transition-all duration-300 hover:scale-110 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        title="Share on X"
        aria-label="Share on X"
      >
        <XTwitterIcon size={16} />
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-[#0A66C2] hover:text-white p-2.5 rounded-xl transition-all duration-300 hover:scale-110 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        title="Share on LinkedIn"
        aria-label="Share on LinkedIn"
      >
        <LinkedinIcon size={16} />
      </a>

      {/* WhatsApp */}
      <a
        href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-[#25D366] hover:text-white p-2.5 rounded-xl transition-all duration-300 hover:scale-110 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        title="Share on WhatsApp"
        aria-label="Share on WhatsApp"
      >
        <WhatsAppIcon size={16} />
      </a>

      {/* Copy Link Button */}
      <button
        onClick={handleCopy}
        className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-amber-500 hover:text-slate-950 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-300 hover:scale-105 flex items-center gap-1.5 ms-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
      >
        {copied ? (
          <Check size={14} strokeWidth={2.5} className="text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
        ) : (
          <Copy size={14} strokeWidth={2} aria-hidden="true" />
        )}
        <span>{copied ? t("blog.copied") : t("blog.copyLink")}</span>
      </button>
    </div>
  );
};

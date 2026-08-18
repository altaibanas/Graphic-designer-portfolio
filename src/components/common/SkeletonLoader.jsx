import React from "react";

export const CardSkeleton = () => (
  <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 p-4 animate-pulse">
    <div className="aspect-video bg-slate-200 dark:bg-slate-800 rounded-2xl mb-4" />
    <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-full w-1/4 mb-3" />
    <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-full w-3/4 mb-2" />
    <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-full w-full mb-1" />
    <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-full w-2/3" />
  </div>
);

export const DetailSkeleton = () => (
  <div className="max-w-4xl mx-auto px-4 py-16 animate-pulse">
    <div className="h-10 bg-slate-200 dark:bg-slate-800 rounded-xl w-3/4 mb-4" />
    <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-full w-1/3 mb-8" />
    <div className="aspect-[16/9] bg-slate-200 dark:bg-slate-800 rounded-3xl mb-8" />
    <div className="space-y-4">
      <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-full w-full" />
      <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-full w-5/6" />
      <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-full w-4/6" />
    </div>
  </div>
);

export const PageSkeleton = () => {
  return (
    <div className="min-h-[80vh] py-12 px-4 sm:px-6 max-w-7xl mx-auto animate-pulse" aria-busy="true" aria-label="جاري التحميل...">
      {/* Header Skeleton */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-full w-28 mx-auto" />
        <div className="h-10 bg-slate-200 dark:bg-slate-800 rounded-2xl w-3/4 mx-auto" />
        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-full w-5/6 mx-auto" />
      </div>

      {/* Grid Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
};

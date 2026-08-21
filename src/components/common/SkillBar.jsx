import React, { useState, useEffect, useRef } from "react";

export const SkillBar = ({ title, name, percentage }) => {
  const [width, setWidth] = useState("0%");
  const barRef = useRef(null);
  const displayName = name || title;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(`${percentage}%`);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div className="mb-5" ref={barRef}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold text-slate-800 dark:text-slate-200 text-sm md:text-base">
          {displayName}
        </span>
        <span className="text-amber-600 dark:text-amber-400 font-extrabold text-sm md:text-base font-mono" dir="ltr">
          {percentage}%
        </span>
      </div>
      <div className="skill-bar w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
        <div
          className="skill-bar-fill h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r from-amber-600 to-yellow-500"
          style={{ width }}
        ></div>
      </div>
    </div>
  );
};

import React from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    if (process.env.NODE_ENV !== "production") {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <section
          role="alert"
          aria-live="assertive"
          className="min-h-[70vh] flex items-center justify-center p-6 bg-[#f8fafc] dark:bg-[#0a0e17] text-slate-900 dark:text-slate-100"
        >
          <div className="max-w-lg w-full bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl text-center">
            <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-500 flex items-center justify-center mx-auto mb-6">
              <AlertTriangle size={32} strokeWidth={1.75} aria-hidden="true" />
            </div>

            <h2 className="text-2xl font-black mb-3 text-slate-900 dark:text-white">
              حدث خطأ غير متوقع
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              نعتذر عن هذا الخطأ المؤقت. تم تسجيل المشكلة ويمكنك إعادة المحاولة
              أو العودة إلى الصفحة الرئيسية.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={this.handleReset}
                className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm rounded-xl transition shadow-md inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 group"
              >
                <RefreshCw size={16} strokeWidth={2} className="group-hover:rotate-180 transition-transform duration-500" aria-hidden="true" />
                <span>إعادة المحاولة / Retry</span>
              </button>

              <a
                href="/"
                className="px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-black text-sm rounded-xl transition inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <Home size={16} strokeWidth={2} aria-hidden="true" />
                <span>الرئيسية / Home</span>
              </a>
            </div>

            {process.env.NODE_ENV !== "production" && this.state.error && (
              <details className="mt-6 text-left text-xs bg-slate-100 dark:bg-slate-950 p-4 rounded-xl text-rose-600 dark:text-rose-400 overflow-auto max-h-40 border border-slate-200 dark:border-slate-800">
                <summary className="cursor-pointer font-mono font-bold mb-2">
                  Technical Details (Debug Mode)
                </summary>
                <pre className="whitespace-pre-wrap">
                  {this.state.error?.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

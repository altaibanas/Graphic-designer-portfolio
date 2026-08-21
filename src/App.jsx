import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { Navbar } from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { ErrorBoundary } from "./components/common/ErrorBoundary";
import { PageSkeleton } from "./components/common/SkeletonLoader";
import { useScrollRevealInit } from "./hooks/useScrollReveal";

// Lazy-loaded route components for optimized initial bundle size & code splitting
const HomePage = lazy(() =>
  import("./pages/HomePage").then((m) => ({ default: m.HomePage }))
);
const AboutPage = lazy(() =>
  import("./pages/AboutPage").then((m) => ({ default: m.AboutPage }))
);
const ServicesPage = lazy(() =>
  import("./pages/ServicesPage").then((m) => ({ default: m.ServicesPage }))
);
const ServiceDetailPage = lazy(() =>
  import("./pages/ServiceDetailPage").then((m) => ({
    default: m.ServiceDetailPage,
  }))
);
const PortfolioPage = lazy(() =>
  import("./pages/PortfolioPage").then((m) => ({ default: m.PortfolioPage }))
);
const BlogPage = lazy(() =>
  import("./pages/BlogPage").then((m) => ({ default: m.BlogPage }))
);
const BlogPostPage = lazy(() =>
  import("./pages/BlogPostPage").then((m) => ({ default: m.BlogPostPage }))
);
const ContactPage = lazy(() =>
  import("./pages/ContactPage").then((m) => ({ default: m.ContactPage }))
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage }))
);

export const App = () => {
  useScrollRevealInit();

  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <ScrollToTop />
          <div className="flex flex-col min-h-screen bg-[#f8fafc] dark:bg-[#0a0e17] text-slate-900 dark:text-slate-100 transition-colors duration-300">
            <Navbar />
            <main id="main-content" tabIndex="-1" className="flex-grow focus:outline-none">
              <ErrorBoundary>
                <Suspense fallback={<PageSkeleton />}>
                  <Routes>
                    {/* Home Routes */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/index.html" element={<HomePage />} />

                    {/* About Routes */}
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/about.html" element={<AboutPage />} />

                    {/* Services Routes */}
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/services.html" element={<ServicesPage />} />
                    <Route
                      path="/services/:slug"
                      element={<ServiceDetailPage />}
                    />

                    {/* Service Legacy & Direct Friendly Routes */}
                    <Route
                      path="/visual-identity"
                      element={<ServiceDetailPage />}
                    />
                    <Route
                      path="/visual-identity.html"
                      element={<ServiceDetailPage />}
                    />
                    <Route
                      path="/social-media-design"
                      element={<ServiceDetailPage />}
                    />
                    <Route
                      path="/social-media-design.html"
                      element={<ServiceDetailPage />}
                    />
                    <Route
                      path="/print-design"
                      element={<ServiceDetailPage />}
                    />
                    <Route
                      path="/print-design.html"
                      element={<ServiceDetailPage />}
                    />
                    <Route
                      path="/ads-design"
                      element={<ServiceDetailPage />}
                    />
                    <Route
                      path="/ads-design.html"
                      element={<ServiceDetailPage />}
                    />
                    <Route
                      path="/visual-consultations"
                      element={<ServiceDetailPage />}
                    />
                    <Route
                      path="/visual-consultations.html"
                      element={<ServiceDetailPage />}
                    />

                    {/* Portfolio Routes */}
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/portfolio.html" element={<PortfolioPage />} />

                    {/* Blog Routes */}
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/blog.html" element={<BlogPage />} />
                    <Route path="/blog/:id" element={<BlogPostPage />} />
                    <Route path="/blog-post-:id" element={<BlogPostPage />} />
                    <Route
                      path="/blog-post-:id.html"
                      element={<BlogPostPage />}
                    />

                    {/* Contact Routes */}
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/contact.html" element={<ContactPage />} />

                    {/* 404 Route */}
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </Suspense>
              </ErrorBoundary>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;

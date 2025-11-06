import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "@/components/organisms/Layout";

const Home = lazy(() => import("@/components/pages/Home"));
const Products = lazy(() => import("@/components/pages/Products"));
const Capabilities = lazy(() => import("@/components/pages/Capabilities"));
const Quality = lazy(() => import("@/components/pages/Quality"));
const About = lazy(() => import("@/components/pages/About"));
const Contact = lazy(() => import("@/components/pages/Contact"));
const BlogInsights = lazy(() => import("@/components/pages/BlogInsights"));
const BlogPost = lazy(() => import("@/components/pages/BlogPost"));
const NotFound = lazy(() => import("@/components/pages/NotFound"));

const PageSuspense = ({ children }) => (
  <Suspense fallback={
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="text-center space-y-4">
        <svg className="animate-spin h-12 w-12 text-primary-600 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        <p className="text-primary-600 font-medium">Loading...</p>
      </div>
    </div>
  }>
    {children}
  </Suspense>
);

const mainRoutes = [
  {
    path: "",
    index: true,
    element: <PageSuspense><Home /></PageSuspense>
  },
  {
    path: "products",
    element: <PageSuspense><Products /></PageSuspense>
  },
  {
    path: "capabilities", 
    element: <PageSuspense><Capabilities /></PageSuspense>
  },
  {
    path: "quality",
    element: <PageSuspense><Quality /></PageSuspense>
  },
  {
    path: "about",
    element: <PageSuspense><About /></PageSuspense>
  },
{
    path: "contact",
    element: <PageSuspense><Contact /></PageSuspense>
  },
  {
    path: "insights",
    element: <PageSuspense><BlogInsights /></PageSuspense>
  },
  {
    path: "insights/:id",
    element: <PageSuspense><BlogPost /></PageSuspense>
  },
  {
    path: "*",
    element: <PageSuspense><NotFound /></PageSuspense>
  }
];

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [...mainRoutes]
  }
];

export const router = createBrowserRouter(routes);
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import React from "react";
import { ThemeProvider } from "@rescui/ui-contexts";
import type { Route } from "./+types/root";
import "./app.scss";
import Header from "./../app/shared/layout/Header/Header";
import Footer from "./../app/shared/layout/Footer/index";

import './../public/css/styles-v2.scss'
  import './../public/css/grid.scss'
if (typeof window === "undefined") {
  React.useLayoutEffect = React.useEffect;
} 
export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
        { rel: "icon", type: "image/svg+xml", href: "/images/favicon.svg" },
        { rel: "alternate icon", href: "/images/favicon.ico" },
        { rel: "apple-touch-icon", href: "/images/apple-touch-icon.png" },
          { rel: "dns-prefetch", href: "//fonts.googleapis.com" },
  { rel: "dns-prefetch", href: "//fonts.gstatic.com" },
  { rel: "dns-prefetch", href: "//resources.jetbrains.com" },  

  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" },

 
 
 
  { rel: "apple-touch-icon", href: "/images/apple-touch-icon.png" },
  { rel: "apple-touch-icon", sizes: "72x72", href: "/images/apple-touch-icon-72x72.png" },       
  { rel: "apple-touch-icon", sizes: "114x114", href: "/images/apple-touch-icon-114x114.png" },   
  { rel: "apple-touch-icon", sizes: "144x144", href: "/images/apple-touch-icon-144x144.png" },   

 
  { rel: "preload", href: "/fonts/JetBrainsMono/JetBrainsMono-Regular.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
  { rel: "preload", href: "/fonts/JetBrainsMono/JetBrainsMono-Bold.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
  { rel: "preload", href: "/fonts/JetBrainsMono/JetBrainsMono-Italic.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },

];
export function meta({ data }: Route.MetaArgs) {
    return [
      
      
        
     
        { title: "Kotlin Programming Language" },
        { name: "description", content: "A modern programming language..." },
        { property: "og:site_name", content: "Kotlin" },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "./../public/images/twitter/general.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@kotlin" },
    ];
}
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
 <meta charSet="utf-8" />
 <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
                        <script suppressHydrationWarning dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-5P98');`
                }}/>
      </head>
      <body>
        <ThemeProvider theme="dark">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}

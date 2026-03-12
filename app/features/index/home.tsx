import type { Route } from "../+types/home";
import './index.scss';
//import Header from "./../../shared/layout/Header/Header";
 import {HeaderSection} from "./../index/components/header-section/header-section"
import './../../../public/css/grid.scss';
import {LatestFromKotlinSection} from "../index/components/latest-from-kotlin/LatestFromKotlinSection";
 import {WhyKotlinSection} from './components/why-kotlin-section';
  import {UsageSection} from './components/usage-section/index';
import logo from './../../assets/images/favicon.ico';
  import {StartSection} from './components/start-section/index';
// import Footer from '../../components/layout/Footer';
/*
export function links() {
    return [

        { rel: "dns-prefetch", href: "//fonts.googleapis.com" },
        { rel: "dns-prefetch", href: "//fonts.gstatic.com" },
        { rel: "dns-prefetch", href: "//resources.jetbrains.com" },

        { rel: "icon", type: "image/svg+xml", href: logo },
        { rel: "alternate icon", href: logo },
        { rel: "apple-touch-icon", href: "/images/apple-touch-icon.png" },
        { rel: "apple-touch-icon", sizes: "72x72", href: "/images/apple-touch-icon-72x72.png" },
        { rel: "apple-touch-icon", sizes: "114x114", href: "/images/apple-touch-icon-114x114.png" },
        { rel: "apple-touch-icon", sizes: "144x144", href: "/images/apple-touch-icon-144x144.png" },


        { rel: "preload", href: "/assets/fonts/JetBrainsMono/JetBrainsMono-Regular.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
        { rel: "preload", href: "/assets/fonts/JetBrainsMono/JetBrainsMono-Bold.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
        { rel: "preload", href: "/assets/fonts/JetBrainsMono/JetBrainsMono-Italic.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
 
 
    ];
}

export async function loader({ request }: Route.LoaderArgs) {
    const url = new URL(request.url);

    
    return {
 
        url: url.pathname,
        title: "Kotlin Programming Language",
        description: "A modern programming language that makes developers happier.",
        ogImage: logo,

       
    };
}
  export  function meta({ data }:  Route.MetaArgs) {
   return [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" }, 
        { httpEquiv: "X-UA-Compatible", content: "IE=edge,chrome=1" },

         
        { title: "Kotlin Programming Language" },
 
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Kotlin" },
        { property: "og:image", content: "https://kotlinlang.org/images/open-graph/general.png" },
        { property: "og:title", content: "Kotlin Programming Language" },
        { property: "og:description", content: "" },
 
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@kotlin" },
        { name: "twitter:title", content: "Kotlin Programming Language" },
        { name: "twitter:description", content: "" },
        { name: "twitter:image:src", content: "https://kotlinlang.org/images/twitter/general.png" },
    ];}
*/
export default function Home() {
  return <>
    <div className="overview-page">
    <HeaderSection/> 
    <LatestFromKotlinSection/>
    <WhyKotlinSection/>
 
    <UsageSection/> 
    <StartSection/>
     </div>
  
    
    </>;
}

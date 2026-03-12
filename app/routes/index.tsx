import type { Route } from '../+types/root';
import Home from '../features/index/home';
 
import { SEO } from '~/features/index/meta';
export async function loader({ request }: Route.LoaderArgs) {
    return {
        url: new URL(request.url).pathname,
    };
}
export function meta({ data }: Route.MetaArgs) {
    return [
        { title: SEO.title },
        { name: 'description', content: SEO.description },
        { property: 'og:title', content: SEO.title },
        { property: 'og:description', content: SEO.description },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Kotlin' },
        { property: 'og:url', content: `https://kotlinlang.org${data.url}` },
        { property: 'og:image', content: `https://kotlinlang.org${SEO.ogImage}` },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@kotlin' },
        { name: 'twitter:title', content: SEO.title },
        { name: 'twitter:description', content: SEO.description },
        { name: 'twitter:image:src', content: `https://kotlinlang.org${SEO.ogImage}` },
    ];
}
 

export default function HomeRoute() {
    return <Home />;
}
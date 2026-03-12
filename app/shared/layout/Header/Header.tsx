import '@jetbrains/kotlin-web-site-ui/dist/header.css';
import HeaderModule from '@jetbrains/kotlin-web-site-ui/dist/header.js';

const GlobalHeader = (HeaderModule as any).default ?? HeaderModule;

export default function Header(props: any) {
  return <GlobalHeader {...props} />;
}
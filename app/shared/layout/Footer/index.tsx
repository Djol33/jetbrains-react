import React from "react";
import GlobalFooter from '@jetbrains/kotlin-web-site-ui/dist/footer.js';
import '@jetbrains/kotlin-web-site-ui/dist/footer.css';
import { ThemeProvider } from '@rescui/ui-contexts';
const FooterComp = (GlobalFooter as any).default ?? GlobalFooter;
const Footer = (props) => {
  return (
 
      <FooterComp { ... props } />
 
  );
}

export default Footer;

/**
 * Analytics Tracking Helper for Sesame AI Marketing Site
 *
 * Implements GTM data-layer events tracking for:
 * - nav_click
 * - cta_join
 * - cta_open_roles
 * - gallery_swipe
 * - outbound_research
 * - scroll_depth
 */

// Type for our dataLayer
type DataLayerEvent = {
  event: string;
  [key: string]: any;
};

declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
  }
}

// Initialize dataLayer if not already initialized
const initDataLayer = (): void => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
  }
};

// Push event to dataLayer
const pushEvent = (event: DataLayerEvent): void => {
  if (typeof window !== "undefined") {
    initDataLayer();
    window.dataLayer.push(event);
  }
};

// Track navigation link clicks
export const trackNavClick = (linkName: string, linkUrl: string): void => {
  pushEvent({
    event: "nav_click",
    linkName,
    linkUrl,
  });
};

// Track "Join Us" CTA clicks
export const trackJoinCta = (ctaLocation: string): void => {
  pushEvent({
    event: "cta_join",
    ctaLocation,
  });
};

// Track "Open Roles" CTA clicks
export const trackOpenRolesCta = (ctaLocation: string): void => {
  pushEvent({
    event: "cta_open_roles",
    ctaLocation,
  });
};

// Track gallery/carousel swipes
export const trackGallerySwipe = (
  galleryName: string,
  direction: "left" | "right",
  slideIndex: number
): void => {
  pushEvent({
    event: "gallery_swipe",
    galleryName,
    direction,
    slideIndex,
  });
};

// Track outbound research PDF clicks
export const trackOutboundResearch = (
  pdfName: string,
  pdfUrl: string
): void => {
  pushEvent({
    event: "outbound_research",
    pdfName,
    pdfUrl,
  });
};

// Track scroll depth
export const trackScrollDepth = (depth: number): void => {
  pushEvent({
    event: "scroll_depth",
    depth,
  });
};

// Initialize scroll depth tracking
export const initScrollDepthTracking = (): void => {
  if (typeof window === "undefined") return;

  const scrollDepths = [25, 50, 75, 100];
  let trackedDepths: number[] = [];

  const calculateScrollPercentage = (): number => {
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollTop = window.scrollY;
    return Math.floor((scrollTop / docHeight) * 100);
  };

  const handleScroll = (): void => {
    const scrollPercentage = calculateScrollPercentage();

    scrollDepths.forEach((depth) => {
      if (scrollPercentage >= depth && !trackedDepths.includes(depth)) {
        trackScrollDepth(depth);
        trackedDepths.push(depth);
      }
    });
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
};

// Google Tag Manager script to be included in the head
export const GTM_ID = "GTM-XXXXXXX"; // Replace with actual GTM ID

export const GTMScript = `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
`;

// Google Tag Manager noscript to be included in the body
export const GTMNoScript = `
<noscript>
  <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
`;

export default function getMediaQuery(breakpoint) {
    const breakpoints = {
      xs: "(max-width: 599.95px)",
      sm: "(min-width: 600px) and (max-width: 959.95px)",
      md: "(min-width: 960px) and (max-width: 1279.95px)",
      lg: "(min-width: 1280px) and (max-width: 1919.95px)",
      xl: "(min-width: 1920px)",
    };
    return breakpoints[breakpoint] || "";
  }
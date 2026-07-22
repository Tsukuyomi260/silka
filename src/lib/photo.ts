import type { CSSProperties } from "react";

// Reproduces the prototype's photo backgrounds: the image over a striped
// fallback gradient that shows through if the image fails to load.
export function photoBg(url: string, stripe = 8): CSSProperties {
  return {
    backgroundImage: `url(${url}), repeating-linear-gradient(45deg,#eceaf3,#eceaf3 ${stripe}px,#e4e1ee ${stripe}px,#e4e1ee ${stripe * 2}px)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
}

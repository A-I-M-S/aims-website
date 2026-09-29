import type { CSSProperties, ReactNode } from "react";

const paths: Record<string, ReactNode> = {
  arrow: (
    <>
      <path d="M4 12h15M13 5l7 7-7 7" />
    </>
  ),
  diagonal: (
    <>
      <path d="M5 19 19 5M5 5h14v14" />
    </>
  ),
  chevron: <path d="m8 4 8 8-8 8" />,
  plus: <path d="M12 5v14M5 12h14" />,
  check: <path d="m5 12 4 4L19 6" />,
  menu: <path d="M4 8h16M4 16h16" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  workflow: (
    <>
      <rect x="2" y="3" width="7" height="6" rx="1" />
      <rect x="15" y="15" width="7" height="6" rx="1" />
      <path d="M9 6h9v9M6 9v9h9" />
    </>
  ),
  chat: (
    <>
      <path d="M21 11a8 8 0 0 1-8 8H7l-5 3V11a8 8 0 0 1 8-8h3a8 8 0 0 1 8 8Z" />
      <path d="M7 10h10M7 14h6" />
    </>
  ),
  connect: (
    <>
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" />
      <path d="M2 3h5M17 21h5" />
    </>
  ),
  knowledge: (
    <>
      <path d="M12 5C8 2 4 3 2 4v15c4-2 7-1 10 1 3-2 6-3 10-1V4c-2-1-6-2-10 1Zm0 0v15" />
      <path d="m5 8 4 1m-4 3 4 1m6-4 4-1m-4 5 4-1" />
    </>
  ),
  agent: (
    <>
      <rect x="5" y="6" width="14" height="14" rx="4" />
      <path d="M12 2v4M2 11h3m14 0h3M9 16h6" />
      <circle cx="9" cy="11" r=".7" />
      <circle cx="15" cy="11" r=".7" />
    </>
  ),
  environment: (
    <>
      <path d="m12 2 9 5v10l-9 5-9-5V7l9-5Zm0 10 9-5M3 7l9 5v10" />
      <path d="m7 4 10 6" />
    </>
  ),
  code: (
    <>
      <rect x="2" y="3" width="20" height="18" rx="2" />
      <path d="M2 8h20m-15 4 3 3-3 3m6 0h4" />
      <circle cx="5" cy="5.5" r=".5" />
    </>
  ),
  gateway: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v6m0 8v6M2 12h6m8 0h6M5 5l4 4m6 6 4 4M5 19l4-4m6-6 4-4" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="3" width="18" height="7" rx="2" />
      <rect x="3" y="14" width="18" height="7" rx="2" />
      <path d="M7 6.5h.01M7 17.5h.01M12 6.5h5M12 17.5h5" />
    </>
  ),
  models: (
    <>
      <path d="m12 2 10 5-10 5L2 7l10-5Zm-10 10 10 5 10-5M2 17l10 5 10-5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <path d="M3 12h18M5 6h14M5 18h14" />
    </>
  ),
  shield: (
    <>
      <path d="m12 2 9 4v6c0 5-9 10-9 10S3 17 3 12V6l9-4Z" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m16 16 5 5" />
    </>
  ),
};

export function Icon({
  name,
  className = "",
  style,
}: {
  name: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      className={`icon ${className}`}
      style={style}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name] || paths.arrow}
    </svg>
  );
}

const TAU = Math.PI * 2;

function project(x: number, y: number, z: number) {
  const angle = -0.36;
  const tiltedY = y * Math.cos(0.35) - z * Math.sin(0.35);
  const depth = y * Math.sin(0.35) + z * Math.cos(0.35);
  return {
    x: 310 + (x * Math.cos(angle) - tiltedY * Math.sin(angle)) * 190,
    y: 300 + (x * Math.sin(angle) + tiltedY * Math.cos(angle)) * 190,
    depth,
  };
}

function linePath(points: { x: number; y: number }[]) {
  return points
    .map(
      (point, index) =>
        `${index ? "L" : "M"}${point.x.toFixed(1)},${point.y.toFixed(1)}`,
    )
    .join(" ");
}

export function IntelligenceVisual() {
  const latitudeLines = Array.from({ length: 15 }, (_, index) => {
    const lat = ((index + 1) / 16 - 0.5) * Math.PI;
    return linePath(
      Array.from({ length: 97 }, (_, step) => {
        const lon = (step / 96) * TAU;
        return project(
          Math.cos(lat) * Math.cos(lon),
          Math.sin(lat),
          Math.cos(lat) * Math.sin(lon),
        );
      }),
    );
  });
  const longitudeLines = Array.from({ length: 22 }, (_, index) => {
    const lon = (index / 22) * TAU;
    return linePath(
      Array.from({ length: 65 }, (_, step) => {
        const lat = (step / 64 - 0.5) * Math.PI;
        return project(
          Math.cos(lat) * Math.cos(lon),
          Math.sin(lat),
          Math.cos(lat) * Math.sin(lon),
        );
      }),
    );
  });
  const nodes = Array.from({ length: 75 }, (_, index) => {
    const lat = Math.asin((2 * (index + 0.5)) / 75 - 1);
    const lon = index * 2.39996;
    return project(
      Math.cos(lat) * Math.cos(lon),
      Math.sin(lat),
      Math.cos(lat) * Math.sin(lon),
    );
  }).filter((point) => point.depth > -0.15);

  return (
    <div
      className="intelligence-visual"
      role="img"
      aria-label="Illustration of a connected AI architecture: business systems, agent orchestration, and model infrastructure."
    >
      <div className="visual-topline">
        <span className="mono">AIMS / INTELLIGENCE ARCHITECTURE</span>
        <span className="visual-coordinate">01—10</span>
      </div>
      <svg
        className="intelligence-sphere"
        viewBox="0 0 620 600"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="sphere-glow">
            <stop stopColor="#a9efc0" stopOpacity=".13" />
            <stop offset="1" stopColor="#a9efc0" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id="sphere-line"
            x1="90"
            y1="80"
            x2="480"
            y2="470"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#c7fca4" stopOpacity=".8" />
            <stop offset=".5" stopColor="#9dddc9" stopOpacity=".35" />
            <stop offset="1" stopColor="#46786c" stopOpacity=".1" />
          </linearGradient>
        </defs>
        <circle cx="310" cy="300" r="270" fill="url(#sphere-glow)" />
        <g stroke="#b4cab9" strokeOpacity=".14">
          <circle cx="310" cy="300" r="237" strokeDasharray="2 7" />
          <circle cx="310" cy="300" r="272" strokeDasharray="1 12" />
          <path d="M10 300h64m472 0h64M310 0v36m0 528v36" />
          <path d="M90 90h20m-10-10v20m400 400h20m-10-10v20" />
        </g>
        <g className="sphere-mesh" stroke="url(#sphere-line)" strokeWidth=".65">
          {latitudeLines.map((d, index) => (
            <path key={`lat-${index}`} d={d} />
          ))}
          {longitudeLines.map((d, index) => (
            <path key={`lon-${index}`} d={d} />
          ))}
        </g>
        <ellipse
          cx="310"
          cy="300"
          rx="284"
          ry="102"
          stroke="#c6f3aa"
          strokeOpacity=".38"
          transform="rotate(-29 310 300)"
        />
        <ellipse
          cx="310"
          cy="300"
          rx="253"
          ry="122"
          stroke="#9dddc9"
          strokeOpacity=".22"
          transform="rotate(37 310 300)"
          strokeDasharray="5 7"
        />
        {nodes.map((point, index) => (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r={point.depth > 0.5 ? 2 : 1.2}
            fill="#d4fbc4"
            opacity={Math.max(0.25, point.depth)}
          />
        ))}
        <g className="orbit-point">
          <circle cx="550" cy="159" r="6" fill="#d4fbc4" />
          <circle
            cx="550"
            cy="159"
            r="13"
            stroke="#d4fbc4"
            strokeOpacity=".25"
          />
        </g>
        <circle cx="82" cy="424" r="4" fill="#9dddc9" />
        <circle cx="390" cy="91" r="3" fill="#d4fbc4" />
        <path
          d="M142 182h-38l-28-28H20m443 210h72l25 25h35M268 472v34l-18 18"
          stroke="#a8b8ac"
          strokeOpacity=".45"
        />
      </svg>
      <div className="visual-label visual-label-one">
        <span className="tiny-cross">+</span>
        <div>
          <span className="mono">01 / CONNECT</span>
          <strong>Your systems. In sync.</strong>
        </div>
      </div>
      <div className="visual-label visual-label-two">
        <span className="status-dot" />
        <div>
          <span className="mono">02 / ORCHESTRATE</span>
          <strong>Intelligence in motion.</strong>
        </div>
      </div>
      <div className="visual-label visual-label-three">
        <span className="mono">03 / OPERATE</span>
        <strong>Built for production.</strong>
      </div>
      <div className="visual-bottomline">
        <span>CONNECTED BY DESIGN</span>
        <span>API · MCP · LLM</span>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";

type FoamNode = {
  x: number;
  y: number;
  size: number;
  depth: number;
  rotate: number;
  delay: number;
  kind: "cell" | "insert";
};

const standards = [
  { value: "ASTM D3575", label: "Material performance" },
  { value: "ASTM D1596", label: "Cushion engineering" },
  { value: "ASTM D4169", label: "Transit validation" },
  { value: "RoHS / REACH", label: "Material compliance" },
];

function seededRandom(seed: number) {
  const value = Math.sin(seed * 931.17) * 10000;
  return value - Math.floor(value);
}

const foamNodes: FoamNode[] = Array.from({ length: 74 }, (_, index) => {
  const angle = (index / 74) * Math.PI * 2 + seededRandom(index + 7) * 0.34;
  const radius = 30 + seededRandom(index + 17) * 27;
  const x = 58 + Math.cos(angle) * radius * 0.95;
  const y = 49 + Math.sin(angle) * radius * 0.7;
  const kind = index % 9 === 0 ? "insert" : "cell";

  return {
    x,
    y,
    size: kind === "insert" ? 24 + seededRandom(index + 29) * 18 : 8 + seededRandom(index + 29) * 8,
    depth: -140 + seededRandom(index + 41) * 280,
    rotate: -48 + seededRandom(index + 53) * 96,
    delay: -seededRandom(index + 67) * 7,
    kind,
  };
});

type FoamNodeStyle = CSSProperties & {
  "--node-x": string;
  "--node-y": string;
  "--node-size": string;
  "--node-depth": string;
  "--node-rotate": string;
  "--node-delay": string;
};

function IndustrialDisplay() {
  return (
    <div className="epe-product epe-product-display" aria-label="Industrial electronic display module">
      <span className="epe-product-screen" />
      <span className="epe-product-side" />
      <span className="epe-product-port epe-product-port-one" />
      <span className="epe-product-port epe-product-port-two" />
      <span className="epe-product-leds" />
    </div>
  );
}

export function EpeInteractiveShowcase() {
  const stageRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const pointerRef = useRef({ x: 0.34, y: 0.58, active: false });
  useEffect(() => {
    let frame = 0;
    let elapsed = 0;

    const animate = (time: number) => {
      const stage = stageRef.current;
      if (!stage) return;

      elapsed = time / 1000;
      const pointer = pointerRef.current;
      const px = pointer.active ? pointer.x : 0.31 + Math.sin(elapsed * 0.52) * 0.08;
      const py = pointer.active ? pointer.y : 0.58 + Math.cos(elapsed * 0.43) * 0.1;

      stage.style.setProperty("--cursor-x", `${px * 100}%`);
      stage.style.setProperty("--cursor-y", `${py * 100}%`);

      nodeRefs.current.forEach((node, index) => {
        if (!node) return;
        const data = foamNodes[index];
        const dx = data.x / 100 - px;
        const dy = data.y / 100 - py;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const force = Math.max(0, 1 - distance / 0.22);
        const length = Math.max(distance, 0.025);
        const pushX = (dx / length) * force * 42;
        const pushY = (dy / length) * force * 34;
        node.style.setProperty("--push-x", `${pushX}px`);
        node.style.setProperty("--push-y", `${pushY}px`);
        node.style.setProperty("--force", force.toFixed(3));
      });

      frame = window.requestAnimationFrame(animate);
    };

    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerRef.current = {
      x: Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width)),
      y: Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height)),
      active: true,
    };
  };

  return (
    <div
      ref={stageRef}
      className="epe-stage technical-grid"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        pointerRef.current.active = false;
      }}
    >
      <div className="epe-stage-topline">
        <div>
          <span className="epe-live-dot" />
          Interactive EPE engineering
        </div>
        <span>Move to shape protection</span>
      </div>

      <div className="epe-stage-copy">
        <p>Adaptive protection system</p>
        <h2>Electronic Display Module</h2>
        <span>Precision display protection</span>
      </div>

      <div className="epe-cursor-field" aria-hidden="true">
        <span />
        <span />
        <span />
        <i />
      </div>

      <div className="epe-flow epe-flow-one" aria-hidden="true" />
      <div className="epe-flow epe-flow-two" aria-hidden="true" />
      <div className="epe-flow epe-flow-three" aria-hidden="true" />

      <div className="epe-foam-cloud" aria-hidden="true">
        {foamNodes.map((node, index) => (
          <span
            key={index}
            ref={(element) => {
              nodeRefs.current[index] = element;
            }}
            className={`epe-foam-node epe-foam-node-${node.kind}`}
            style={
              {
                "--node-x": `${node.x}%`,
                "--node-y": `${node.y}%`,
                "--node-size": `${node.size}px`,
                "--node-depth": `${node.depth}px`,
                "--node-rotate": `${node.rotate}deg`,
                "--node-delay": `${node.delay}s`,
              } as FoamNodeStyle
            }
          />
        ))}
      </div>

      <div className="epe-product-wrap">
        <span className="epe-cradle epe-cradle-top" />
        <span className="epe-cradle epe-cradle-right" />
        <span className="epe-cradle epe-cradle-bottom" />
        <span className="epe-cradle epe-cradle-left" />
        <IndustrialDisplay />
      </div>

      <div className="epe-standards">
        {standards.map((standard) => (
          <div key={standard.value}>
            <strong>{standard.value}</strong>
            <span>{standard.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

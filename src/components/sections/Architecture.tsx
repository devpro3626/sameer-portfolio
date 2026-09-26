import type { CSSProperties } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechIcon } from "@/components/ui/TechIcon";
import {
  ARCHITECTURE_VIEWBOX,
  clientNodes,
  coreNode,
  serviceNodes,
  type ArchitectureNode,
} from "@/content/architecture";
import { cn } from "@/lib/cn";

const { width, height, nodeWidth } = ARCHITECTURE_VIEWBOX;
const half = nodeWidth / 2;

function curve(fromX: number, fromY: number, toX: number, toY: number) {
  const midX = (fromX + toX) / 2;
  return `M${fromX},${fromY} C${midX},${fromY} ${midX},${toY} ${toX},${toY}`;
}

const connections = [
  ...clientNodes.map((node) => curve(node.x + half, node.y, coreNode.x - half, coreNode.y)),
  ...serviceNodes.map((node) => curve(coreNode.x + half, coreNode.y, node.x - half, node.y)),
];

export function Architecture() {
  return (
    <section id="architecture" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Under the hood"
          title="How the products I ship fit together"
          description="A typical architecture behind the platforms I build: typed clients, a secure multi-tenant API, an AI layer and the integrations a business runs on."
        />

        <Reveal className="relative mt-16 hidden aspect-[1000/560] lg:block">
          <svg viewBox={`0 0 ${width} ${height}`} className="absolute inset-0 size-full" aria-hidden>
            {connections.map((path, index) => (
              <g key={path}>
                <path d={path} fill="none" stroke="var(--border-strong)" strokeWidth={1.5} />
                <path
                  d={path}
                  fill="none"
                  stroke="var(--accent)"
                  strokeOpacity={0.45}
                  strokeWidth={1.5}
                  strokeDasharray="6 4"
                  className="animate-dash"
                />
                <circle r={4} fill="var(--accent)" style={{ filter: "drop-shadow(0 0 6px var(--accent))" }}>
                  <animateMotion dur="2.6s" repeatCount="indefinite" path={path} begin={`${index * 0.43}s`} />
                </circle>
              </g>
            ))}
          </svg>

          {[...clientNodes, ...serviceNodes].map((node) => (
            <DiagramNode key={node.id} node={node} className="absolute" style={positionOf(node)} />
          ))}

          <div className="absolute" style={positionOf(coreNode)}>
            <span
              aria-hidden
              className="absolute top-1/2 left-1/2 size-[15rem] -translate-1/2 animate-spin-slower rounded-full border border-dashed border-accent/30"
            />
            <span
              aria-hidden
              className="absolute top-1/2 left-1/2 size-[19rem] -translate-1/2 rounded-full border border-border"
            />
            <DiagramNode node={coreNode} highlighted />
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col items-center gap-0 lg:hidden">
          <NodeGroup nodes={clientNodes} />
          <FlowConnector />
          <DiagramNode node={coreNode} highlighted className="w-full max-w-sm" />
          <FlowConnector />
          <NodeGroup nodes={serviceNodes} />
        </div>
      </div>
    </section>
  );
}

function positionOf(node: ArchitectureNode): CSSProperties {
  return {
    left: `${((node.x - half) / width) * 100}%`,
    top: `${(node.y / height) * 100}%`,
    width: `${(nodeWidth / width) * 100}%`,
    transform: "translateY(-50%)",
  };
}

interface DiagramNodeProps {
  node: ArchitectureNode;
  highlighted?: boolean;
  className?: string;
  style?: CSSProperties;
}

function DiagramNode({ node, highlighted = false, className, style }: DiagramNodeProps) {
  return (
    <div
      style={style}
      className={cn(
        "relative rounded-2xl border bg-surface/95 p-4 backdrop-blur-md",
        highlighted
          ? "border-accent/60 shadow-[0_0_0_6px_var(--accent-soft),0_0_60px_rgb(107_140_255/0.25)]"
          : "border-border-strong",
        className,
      )}
    >
      <p className="text-sm font-semibold">{node.title}</p>
      <p className="mt-0.5 text-xs text-muted">{node.subtitle}</p>
      <div className="mt-3 flex gap-1.5">
        {node.tech.map((tech) => (
          <span
            key={tech}
            title={tech}
            className="grid size-7 place-items-center rounded-lg bg-white/5 text-muted"
          >
            <TechIcon name={tech} className="size-3.5" />
          </span>
        ))}
      </div>
    </div>
  );
}

function NodeGroup({ nodes }: { nodes: ArchitectureNode[] }) {
  return (
    <div className="grid w-full gap-3 sm:grid-cols-3">
      {nodes.map((node) => (
        <DiagramNode key={node.id} node={node} />
      ))}
    </div>
  );
}

function FlowConnector() {
  return (
    <div
      aria-hidden
      className="relative h-14 w-px bg-border-strong"
      style={{ "--pulse-duration": "1.8s" } as CSSProperties}
    >
      <span className="absolute left-1/2 size-2 -translate-1/2 animate-pulse-y rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
    </div>
  );
}

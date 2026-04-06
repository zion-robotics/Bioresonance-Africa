import { useEffect, useRef } from "react";

export default function DNAHelix() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;

    const draw = () => {
      ctx.clearRect(0, 0, W(), H());
      time += 0.012;

      const cx = W() / 2;
      const numNodes = 28;
      const spacing = H() / (numNodes - 1);
      const amplitude = Math.min(W() * 0.18, 80);

      // Draw connecting rungs first (behind strands)
      for (let i = 0; i < numNodes; i++) {
        const y = i * spacing;
        const phase = i * 0.45 + time * 3;
        const x1 = cx + Math.sin(phase) * amplitude;
        const x2 = cx + Math.sin(phase + Math.PI) * amplitude;
        const depth = Math.cos(phase);

        if (i % 2 === 0) {
          ctx.beginPath();
          ctx.moveTo(x1, y);
          ctx.lineTo(x2, y);
          const alpha = 0.15 + Math.abs(depth) * 0.15;
          ctx.strokeStyle = `rgba(234, 179, 8, ${alpha})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }

      // Draw two helix strands
      for (let strand = 0; strand < 2; strand++) {
        const phaseOffset = strand * Math.PI;

        ctx.beginPath();
        for (let i = 0; i < numNodes; i++) {
          const y = i * spacing;
          const phase = i * 0.45 + time * 3 + phaseOffset;
          const x = cx + Math.sin(phase) * amplitude;

          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        const gradient = ctx.createLinearGradient(0, 0, 0, H());
        gradient.addColorStop(0, strand === 0 ? "rgba(27, 63, 123, 0.7)" : "rgba(234, 179, 8, 0.5)");
        gradient.addColorStop(0.5, strand === 0 ? "rgba(27, 63, 123, 0.9)" : "rgba(234, 179, 8, 0.8)");
        gradient.addColorStop(1, strand === 0 ? "rgba(27, 63, 123, 0.4)" : "rgba(234, 179, 8, 0.3)");
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Draw nodes
        for (let i = 0; i < numNodes; i++) {
          const y = i * spacing;
          const phase = i * 0.45 + time * 3 + phaseOffset;
          const x = cx + Math.sin(phase) * amplitude;
          const depth = Math.cos(phase);
          const size = 2.5 + Math.abs(depth) * 2;
          const alpha = 0.4 + Math.abs(depth) * 0.6;

          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = strand === 0
            ? `rgba(27, 63, 123, ${alpha})`
            : `rgba(234, 179, 8, ${alpha})`;
          ctx.fill();

          // Glow effect on foreground nodes
          if (Math.abs(depth) > 0.7) {
            ctx.beginPath();
            ctx.arc(x, y, size + 4, 0, Math.PI * 2);
            ctx.fillStyle = strand === 0
              ? `rgba(27, 63, 123, ${alpha * 0.15})`
              : `rgba(234, 179, 8, ${alpha * 0.15})`;
            ctx.fill();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: "block" }}
      aria-hidden="true"
    />
  );
}

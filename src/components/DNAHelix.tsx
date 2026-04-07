import { useEffect, useRef, useCallback } from "react";

export default function DNAHelix() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const w = rect.width;
    const h = rect.height;

    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    timeRef.current += 0.015;
    const time = timeRef.current;

    const cx = w / 2;
    const numNodes = 30;
    const spacing = h / (numNodes - 1);
    const amplitude = Math.min(w * 0.22, 90);

    // Rungs
    for (let i = 0; i < numNodes; i++) {
      const y = i * spacing;
      const phase = i * 0.42 + time * 2.5;
      const x1 = cx + Math.sin(phase) * amplitude;
      const x2 = cx + Math.sin(phase + Math.PI) * amplitude;
      const depth = Math.cos(phase);

      if (i % 2 === 0) {
        const alpha = 0.12 + Math.abs(depth) * 0.2;
        ctx.beginPath();
        ctx.moveTo(x1, y);
        ctx.lineTo(x2, y);
        ctx.strokeStyle = `rgba(234, 179, 8, ${alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Base pair dots
        const mx = (x1 + x2) / 2;
        ctx.beginPath();
        ctx.arc(mx, y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(234, 179, 8, ${alpha * 0.5})`;
        ctx.fill();
      }
    }

    // Two helix strands
    for (let strand = 0; strand < 2; strand++) {
      const phaseOffset = strand * Math.PI;
      const colors = strand === 0
        ? ["27, 63, 123", "27, 100, 180"]
        : ["234, 179, 8", "255, 200, 50"];

      // Smooth curve
      ctx.beginPath();
      for (let i = 0; i <= numNodes * 4; i++) {
        const t = i / (numNodes * 4);
        const y = t * h;
        const nodePhase = t * numNodes * 0.42 + time * 2.5 + phaseOffset;
        const x = cx + Math.sin(nodePhase) * amplitude;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, `rgba(${colors[0]}, 0.3)`);
      grad.addColorStop(0.3, `rgba(${colors[1]}, 0.85)`);
      grad.addColorStop(0.7, `rgba(${colors[1]}, 0.85)`);
      grad.addColorStop(1, `rgba(${colors[0]}, 0.3)`);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 3;
      ctx.stroke();

      // Nodes with glow
      for (let i = 0; i < numNodes; i++) {
        const y = i * spacing;
        const phase = i * 0.42 + time * 2.5 + phaseOffset;
        const x = cx + Math.sin(phase) * amplitude;
        const depth = Math.cos(phase);
        const size = 3 + Math.abs(depth) * 2.5;
        const alpha = 0.4 + Math.abs(depth) * 0.6;

        // Outer glow
        if (Math.abs(depth) > 0.5) {
          ctx.beginPath();
          ctx.arc(x, y, size + 6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${colors[1]}, ${alpha * 0.08})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${colors[1]}, ${alpha})`;
        ctx.fill();
      }
    }

    animRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    animRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animRef.current);
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block"
      aria-hidden="true"
    />
  );
}

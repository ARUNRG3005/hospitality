import * as React from 'react';

interface LuxeBackgroundProps {
  theme?: 'light' | 'dark';
}

export default function LuxeBackground({ theme = 'dark' }: LuxeBackgroundProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const mouseRef = React.useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;
    const render = () => {
      time += 0.0008; // Super slow, cinematic movement

      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.02;
      mouse.y += (mouse.targetY - mouse.y) * 0.02;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw base gradient
      const baseGrad = ctx.createLinearGradient(0, 0, width, height);
      if (theme === 'dark') {
        baseGrad.addColorStop(0, '#040F0B'); // Deepest dark emerald
        baseGrad.addColorStop(0.5, '#0A241C'); // Brand primary emerald
        baseGrad.addColorStop(1, '#061712'); // Rich emerald
      } else {
        baseGrad.addColorStop(0, '#FAF8F5'); // Warm ivory
        baseGrad.addColorStop(0.5, '#F6F3EC'); // Light container tone
        baseGrad.addColorStop(1, '#FAF8F5'); // Warm ivory
      }
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw animated organic waves
      const waveCount = 3;
      for (let i = 0; i < waveCount; i++) {
        ctx.save();
        
        const phase = time * (1.2 + i * 0.4);
        const amplitude = height * (0.04 + i * 0.015) + (mouse.y - height / 2) * 0.03;
        const frequency = 0.0015 + i * 0.0008;
        
        const waveGrad = ctx.createLinearGradient(0, 0, width, 0);
        if (theme === 'dark') {
          if (i === 1) {
            // Gold shimmer wave
            waveGrad.addColorStop(0, 'rgba(197, 168, 128, 0.0)');
            waveGrad.addColorStop(0.5, 'rgba(197, 168, 128, 0.06)');
            waveGrad.addColorStop(1, 'rgba(197, 168, 128, 0.0)');
          } else {
            // Soft emerald wave
            waveGrad.addColorStop(0, 'rgba(21, 60, 48, 0.0)');
            waveGrad.addColorStop(0.5, 'rgba(21, 60, 48, 0.25)');
            waveGrad.addColorStop(1, 'rgba(21, 60, 48, 0.0)');
          }
        } else {
          if (i === 1) {
            // Gold wave on light background
            waveGrad.addColorStop(0, 'rgba(197, 168, 128, 0.0)');
            waveGrad.addColorStop(0.5, 'rgba(197, 168, 128, 0.09)');
            waveGrad.addColorStop(1, 'rgba(197, 168, 128, 0.0)');
          } else {
            // Very soft emerald tint wave on light background
            waveGrad.addColorStop(0, 'rgba(10, 36, 28, 0.0)');
            waveGrad.addColorStop(0.5, 'rgba(10, 36, 28, 0.03)');
            waveGrad.addColorStop(1, 'rgba(10, 36, 28, 0.0)');
          }
        }

        ctx.fillStyle = waveGrad;
        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x += 15) {
          const mouseEffect = (mouse.x - width / 2) * 0.00015;
          const y =
            height * (0.55 + i * 0.08) +
            Math.sin(x * frequency + phase + mouseEffect) * amplitude +
            Math.cos(x * 0.0008 - phase * 0.7) * (amplitude * 0.6);
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }

      // 3. Subtle interactive spotlight
      if (mouse.x > 0 && mouse.y > 0) {
        const spotGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          Math.max(width, height) * 0.4
        );
        
        if (theme === 'dark') {
          spotGrad.addColorStop(0, 'rgba(197, 168, 128, 0.04)'); // Gold highlight
          spotGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        } else {
          spotGrad.addColorStop(0, 'rgba(197, 168, 128, 0.12)'); // Gold highlight on light
          spotGrad.addColorStop(1, 'rgba(250, 248, 245, 0)');
        }
        
        ctx.fillStyle = spotGrad;
        ctx.fillRect(0, 0, width, height);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}

import { useCursorGlow } from '../hooks/useCursorGlow';

interface CursorGlowProps {
  color: string;
  intensity: number;
}

export function CursorGlow({ color, intensity }: CursorGlowProps) {
  const position = useCursorGlow();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(circle 600px at ${position.x}px ${position.y}px, ${color}${Math.round(intensity * 25).toString(16).padStart(2, '0')}, transparent 80%)`,
      }}
    />
  );
}

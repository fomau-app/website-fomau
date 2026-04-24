"use client";
export default function FomauLogo({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <svg width={size * 3.5} height={size} viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <text
        x="0" y="32"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="38"
        fontWeight="300"
        letterSpacing="-1"
        fill="#8B35F1"
      >
        fomau
      </text>
    </svg>
  );
}

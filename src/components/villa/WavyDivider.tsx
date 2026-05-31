export function WavyDivider({
  flip = false,
  color = "var(--beige)",
}: {
  flip?: boolean;
  color?: string;
}) {
  return (
    <div
      className="w-full leading-[0]"
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block h-12 w-full md:h-20">
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

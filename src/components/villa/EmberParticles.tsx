export function EmberParticles({ count = 18 }: { count?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const size = 2 + Math.random() * 4;
        const left = Math.random() * 100;
        const dur = 6 + Math.random() * 8;
        const delay = Math.random() * 8;
        return (
          <span
            key={i}
            className="ember-particle absolute bottom-0 rounded-full"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              background:
                "radial-gradient(circle, rgba(212,160,23,0.95), rgba(192,57,43,0.5))",
              animationDuration: `${dur}s`,
              animationDelay: `${delay}s`,
              filter: "blur(0.5px)",
            }}
          />
        );
      })}
    </div>
  );
}

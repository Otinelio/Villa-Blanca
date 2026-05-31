import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useInView, m as motion } from "../_libs/framer-motion.mjs";
function SectionReveal({
  children,
  delay = 0,
  className
}) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 30 },
      animate: inView ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.6, delay, ease: "easeOut" },
      className,
      children
    }
  );
}
export {
  SectionReveal as S
};

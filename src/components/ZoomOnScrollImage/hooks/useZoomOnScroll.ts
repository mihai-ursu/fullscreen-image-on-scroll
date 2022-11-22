import { useScroll, useSpring, useTransform } from "framer-motion";
import useIsomorphicLayoutEffect from "hooks/useIsomorphicLayoutEffect";
import { RefObject, useState } from "react";

const useZoomOnScroll = (ref: RefObject<HTMLDivElement>) => {
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const { scrollY } = useScroll();

  const initial = Math.max(elementTop, 0);
  const final = elementTop + clientHeight / 1.4;

  const scaleRange = useTransform(scrollY, [initial, final], [0.4, 1]);
  const scale = useSpring(scaleRange, { stiffness: 400, damping: 90 });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    const onResize = () => {
      if (!element) return;
      setElementTop(
        element.getBoundingClientRect().top + window.scrollY || window.scrollY
      );
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  return scale;
};

export default useZoomOnScroll;

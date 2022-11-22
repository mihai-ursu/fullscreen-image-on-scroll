import { motion } from "framer-motion";
import { useRef } from "react";
import useZoomOnScroll from "./hooks/useZoomOnScroll";
import styles from "./ZoomOnScrollImage.module.scss";

const ZoomOnScrollImage = () => {
  const ref = useRef<HTMLDivElement>(null);

  const scale = useZoomOnScroll(ref);

  return (
    <div className={styles.wrapper} ref={ref}>
      <motion.div
        style={{ scale: scale }}
        initial={{ scale: 0.4 }}
        className={styles.contentWrapper}
      ></motion.div>
    </div>
  );
};

export default ZoomOnScrollImage;

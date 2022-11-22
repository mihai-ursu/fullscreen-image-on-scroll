import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useZoomOnScroll from "./hooks/useZoomOnScroll";
import styles from "./ZoomOnScrollImage.module.scss";

const ZoomOnScrollImage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const scale = useZoomOnScroll(ref);

  return (
    <div className={styles.wrapper} ref={ref}>
      <motion.div style={{ scale: scale }} className={styles.mediaWrapper}>
        <Image src="/images/mountains.jpg" alt="Mountains" fill />
      </motion.div>
    </div>
  );
};

export default ZoomOnScrollImage;

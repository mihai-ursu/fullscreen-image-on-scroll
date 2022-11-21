import { motion } from "framer-motion";
import styles from "./ZoomOnScrollImage.module.scss";

const ZoomOnScrollImage = () => {
  return (
    <div className={styles.wrapper}>
      <motion.div
        initial={{ scale: 0.4 }}
        className={styles.contentWrapper}
      ></motion.div>
    </div>
  );
};

export default ZoomOnScrollImage;

import ZoomOnScrollImage from "components/ZoomOnScrollImage/ZoomOnScrollImage";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.spacer} />
      <ZoomOnScrollImage />
      <div className={styles.spacer} />
    </div>
  );
}

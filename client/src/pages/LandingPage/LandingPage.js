import Questions from "../../components/Questions/Questions";

import styles from "./LandingPage.module.css";

function LandingPage() {
  return (
    <div className={styles.rootContainer}>
      <Questions />
    </div>
  );
}

export default LandingPage;

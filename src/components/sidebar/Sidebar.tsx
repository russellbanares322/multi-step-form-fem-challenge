import styles from "./styles.module.css";

export function Sidebar() {
  return (
    <div className={styles.sidebar_container}>
      <div className={styles.sidebar_wrapper}>
        <div className={styles.sidebar_links_wrapper}>
          <span className={styles.sidebar_step_number}>1</span>
          <div className={styles.sidebar_links_step}>
            <span className={styles.sidebar_step_text}>STEP 1</span>
            <span className={styles.sidebar_step_title}>YOUR INFO</span>
          </div>
        </div>
        <div className={styles.sidebar_links_wrapper}>
          <span className={styles.sidebar_step_number}>2</span>
          <div className={styles.sidebar_links_step}>
            <span className={styles.sidebar_step_text}>STEP 2</span>
            <span className={styles.sidebar_step_title}>SELECT PLAN</span>
          </div>
        </div>
        <div className={styles.sidebar_links_wrapper}>
          <span className={styles.sidebar_step_number}>3</span>
          <div className={styles.sidebar_links_step}>
            <span className={styles.sidebar_step_text}>STEP 3</span>
            <span className={styles.sidebar_step_title}>ADD-ONS</span>
          </div>
        </div>
        <div className={styles.sidebar_links_wrapper}>
          <span className={styles.sidebar_step_number}>4</span>
          <div className={styles.sidebar_links_step}>
            <span className={styles.sidebar_step_text}>STEP 4</span>
            <span className={styles.sidebar_step_title}>SUMMARY</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import styles from "./styles.module.css";
import checkIcon from "../../assets/icon-thank-you.svg";

export function Confirmation() {
  return (
    <div className={styles.confirmation_wrapper}>
      <div className={styles.confirmation_details}>
        <img src={checkIcon} alt="check_icon" />
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platforms. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}

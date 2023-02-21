import { useState } from "react";
import styles from "./styles.module.css";
import { PaginationButton } from "../../components/paginationBtns/PaginationButton";

export function SelectPlan() {
  const [isToggled, setIsToggled] = useState(false);

  const inactiveMonthColor = isToggled
    ? "hsl(213, 96%, 18%)"
    : "hsl(231, 11%, 63%)";
  const activeMonthColor = !isToggled
    ? "hsl(213, 96%, 18%)"
    : "hsl(231, 11%, 63%)";

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={styles.second_step_wrapper}>
      <h1>Select Plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className={styles.billing_card_wrapper}>
        <div className={styles.billing_card}>
          <img src="../src/assets/icon-arcade.svg" />
          <span>Arcade</span>
          <p>$9/mo</p>
        </div>
        <div className={styles.billing_card}>
          <img src="../src/assets/icon-advanced.svg" />
          <span>Advanced</span>
          <p>$12/mo</p>
        </div>
        <div className={styles.billing_card}>
          <img src="../src/assets/icon-pro.svg" />
          <span>Pro</span>
          <p>$15/mo</p>
        </div>
      </div>
      <div className={styles.billing_date_wrapper}>
        <span
          style={{
            color: activeMonthColor,
          }}
        >
          Monthly
        </span>
        <div onClick={handleToggle} className={styles.toggle_wrapper}>
          <div
            style={{ right: isToggled ? "0.2rem" : "1.2rem" }}
            className={styles.toggle_btn}
          ></div>
        </div>
        <span
          style={{
            color: inactiveMonthColor,
          }}
        >
          Yearly
        </span>
      </div>
      <PaginationButton />
    </div>
  );
}

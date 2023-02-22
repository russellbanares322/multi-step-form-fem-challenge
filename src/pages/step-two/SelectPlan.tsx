import { useState } from "react";
import styles from "./styles.module.css";
import { PaginationButton } from "../../components/paginationBtns/PaginationButton";
import { planData } from "./planData";

export function SelectPlan() {
  const [isToggled, setIsToggled] = useState(false);

  //Color of month indicator depending on toggle
  const inactiveMonthColor = isToggled
    ? "hsl(213, 96%, 18%)"
    : "hsl(231, 11%, 63%)";
  const activeMonthColor = !isToggled
    ? "hsl(213, 96%, 18%)"
    : "hsl(231, 11%, 63%)";

  //Month indicator in price
  const selectedMonth = isToggled ? "yr" : "mo";
  //Toggle button for monthly and yearly plan
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={styles.second_step_wrapper}>
      <h1>Select Plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className={styles.billing_card_wrapper}>
        {planData.map((plan) => (
          <div
            key={plan.id}
            className={styles.billing_card}
            style={{
              borderColor:
                plan.id == 1 ? "hsl(243, 100%, 62%)" : "hsl(229, 24%, 87%)",
              backgroundColor: plan.id == 1 ? "hsl(231, 100%, 99%)" : "none",
            }}
          >
            <img src={plan.icon} />
            <span>{plan.name}</span>
            <p>
              ${isToggled ? plan.price * 10 : plan.price}/{selectedMonth}
            </p>
            {isToggled && <p className={styles.freebie}>{plan.freebie}</p>}
          </div>
        ))}
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

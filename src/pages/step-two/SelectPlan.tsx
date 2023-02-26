import { useContext, useState } from "react";
import styles from "./styles.module.css";
import { planData } from "./planData";
import PaginationContext from "../../components/context/PaginationContext";

export function SelectPlan() {
  const { state, dispatch } = useContext(PaginationContext);
  const [selectedPlan, setSelectedPlan] = useState(1);

  const handleSelectPlan = (selectedID: any) => {
    setSelectedPlan(selectedID);
  };

  //Toggle button for monthly and yearly plan
  const handleTogglePlan = () => {
    dispatch({ type: "SET_TOGGLE_PLAN_BTN" });
  };

  //Color of month indicator depending on toggle
  const inactiveMonthColor = state.isToggled
    ? "hsl(213, 96%, 18%)"
    : "hsl(231, 11%, 63%)";
  const activeMonthColor = !state.isToggled
    ? "hsl(213, 96%, 18%)"
    : "hsl(231, 11%, 63%)";

  //Month indicator in price
  const selectedMonth = state.isToggled ? "yr" : "mo";

  return (
    <div className={styles.second_step_wrapper}>
      <h1>Select Plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className={styles.billing_card_wrapper}>
        {planData.map((plan) => (
          <div
            onClick={() => handleSelectPlan(plan.id)}
            key={plan.id}
            className={styles.billing_card}
            style={{
              borderColor: plan.id == selectedPlan ? "hsl(243, 100%, 62%)" : "",
              backgroundColor:
                plan.id == selectedPlan ? "hsl(231, 100%, 99%)" : "none",
            }}
          >
            <img src={plan.icon} />
            <div>
              <span>{plan.name}</span>
              <p>
                ${state.isToggled ? plan.price * 10 : plan.price}/
                {selectedMonth}
              </p>
              {state.isToggled && (
                <p className={styles.freebie}>{plan.freebie}</p>
              )}
            </div>
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
        <div onClick={handleTogglePlan} className={styles.toggle_wrapper}>
          <div
            style={{ right: state.isToggled ? "0.2rem" : "1.2rem" }}
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
    </div>
  );
}

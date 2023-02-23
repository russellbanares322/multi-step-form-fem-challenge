import { useContext } from "react";
import PaginationContext from "../../components/context/PaginationContext";
import styles from "./styles.module.css";

export function Summary() {
  const { state } = useContext(PaginationContext);

  const selectedMonth = state.isToggled ? "Yearly" : "Monthly";
  const shortenedMonthName = state.isToggled ? "yr" : "mo";
  const arcadePrice = state.isToggled ? 9 * 10 : 9;
  const servicePrice = state.isToggled ? 1 * 10 : 1;
  const storagePrice = state.isToggled ? 2 * 10 : 2;
  const totalPrice = state.isToggled ? 12 * 10 : 12;

  return (
    <div className={styles.fourth_step_wrapper}>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className={styles.price_wrapper}>
        <div className={styles.plan_type_price}>
          <div className={styles.plan_type}>
            <p className={styles.arcade}>Arcade({selectedMonth})</p>
            <p className={styles.change}>Change</p>
          </div>
          <p className={styles.arcade_price}>
            ${arcadePrice}/{shortenedMonthName}
          </p>
        </div>
        <div className={styles.service_wrapper}>
          <p className={styles.service}>Online service</p>
          <p className={styles.service_price}>
            +${servicePrice}/{shortenedMonthName}
          </p>
        </div>
        <div className={styles.storage_wrapper}>
          <p className={styles.storage}>Larger storage</p>
          <p className={styles.storage_price}>
            +${storagePrice}/{shortenedMonthName}
          </p>
        </div>
      </div>
      <div className={styles.total_price_wrapper}>
        <p className={styles.total}>Total(per month)</p>
        <p className={styles.total_price}>
          +${totalPrice}/{shortenedMonthName}
        </p>
      </div>
    </div>
  );
}

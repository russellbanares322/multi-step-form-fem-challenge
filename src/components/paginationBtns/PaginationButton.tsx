import { useContext } from "react";
import PaginationContext from "../context/PaginationContext";
import styles from "./styles.module.css";

export function PaginationButton() {
  const { state, dispatch } = useContext(PaginationContext);

  const handlePrevPage = () => {
    dispatch({ type: "SET_DECREMENT_PAGENUM" });
  };
  const handleNextPage = () => {
    dispatch({ type: "SET_INCREMENT_PAGENUM" });
  };

  return (
    <div className={styles.pagination_wrapper}>
      <span
        style={{ zIndex: state.isButtonDisabled ? "-1" : "1" }}
        className={styles.pagination_prev_btn}
        onClick={handlePrevPage}
      >
        Go Back {state.pageNumber}
      </span>
      <button onClick={handleNextPage}>Next Step</button>
    </div>
  );
}

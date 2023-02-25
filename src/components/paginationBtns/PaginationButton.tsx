import { useContext } from "react";
import PaginationContext from "../context/PaginationContext";
import styles from "./styles.module.css";

export function PaginationButton() {
  const { state, dispatch } = useContext(PaginationContext);

  const confirmButtonDisplay = state.pageNumber === 4 ? true : false;

  const handlePrevPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({ type: "SET_DECREMENT_PAGENUM" });
  };
  const handleNextPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({ type: "SET_INCREMENT_PAGENUM" });
  };

  return (
    <div className={styles.pagination_wrapper}>
      <span
        style={{ zIndex: state.isButtonDisabled ? "-1" : "1" }}
        className={styles.pagination_prev_btn}
        onClick={handlePrevPage}
      >
        Go Back
      </span>
      {!confirmButtonDisplay && (
        <button className={styles.pagination_next_btn} onClick={handleNextPage}>
          Next Step
        </button>
      )}

      {confirmButtonDisplay && (
        <button
          className={styles.pagination_confirm_btn}
          onClick={handleNextPage}
        >
          Confirm
        </button>
      )}
    </div>
  );
}

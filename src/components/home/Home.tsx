import { Summary } from "../../pages/step-four/Summary";
import { PersonalInfo } from "../../pages/step-one/PersonalInfo";
import { AddOns } from "../../pages/step-three/AddOns";
import { useContext, useEffect, useState } from "react";
import { SelectPlan } from "../../pages/step-two/SelectPlan";
import PaginationContext from "../context/PaginationContext";
import { Sidebar } from "../sidebar/Sidebar";
import styles from "./styles.module.css";
import { PaginationButton } from "../paginationBtns/PaginationButton";

export function Home() {
  const { state } = useContext(PaginationContext);
  const [isDesktopMode, setIsDesktopMode] = useState(true);

  const pageOne = state.pageNumber === 1;
  const pageTwo = state.pageNumber === 2;
  const pageThree = state.pageNumber === 3;
  const pageFour = state.pageNumber === 4;
  const hidePagination = state.isConfirmed;

  const handleScreenWidth = () => {
    if (window.innerWidth >= 1000) {
      setIsDesktopMode(true);
    } else {
      setIsDesktopMode(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreenWidth);
  }, [isDesktopMode]);

  return (
    <div className={styles.home_content}>
      <div>
        <Sidebar />
      </div>
      <div className={styles.right_content}>
        {pageOne && <PersonalInfo />}
        {pageTwo && <SelectPlan />}
        {pageThree && <AddOns />}
        {pageFour && <Summary />}
        {!hidePagination && isDesktopMode && <PaginationButton />}
      </div>
      {!hidePagination && !isDesktopMode && <PaginationButton />}
    </div>
  );
}

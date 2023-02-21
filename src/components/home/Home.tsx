//  import { Summary } from "../../pages/step-four/Summary";
import { PersonalInfo } from "../../pages/step-one/PersonalInfo";
//  import { AddOns } from "../../pages/step-three/AddOns";
import { useContext } from "react";
import { SelectPlan } from "../../pages/step-two/SelectPlan";
import PaginationContext from "../context/PaginationContext";
import { Sidebar } from "../sidebar/Sidebar";
import styles from "./styles.module.css";

export function Home() {
  const { state } = useContext(PaginationContext);

  const pageOne = state.pageNumber === 1;
  const pageTwo = state.pageNumber === 2;
  // const pageThree = state.pageNumber === 3;
  // const pageFour = state.pageNumber === 4;

  return (
    <div className={styles.home_content}>
      <div>
        <Sidebar />
      </div>
      <div>
        {pageOne && <PersonalInfo />}
        {pageTwo && <SelectPlan />}
        {/* <AddOns /> */}
        {/* <Summary /> */}
      </div>
    </div>
  );
}

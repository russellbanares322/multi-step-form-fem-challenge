import { Summary } from "../../pages/step-four/Summary";
import { PersonalInfo } from "../../pages/step-one/PersonalInfo";
import { AddOns } from "../../pages/step-three/AddOns";
import { SelectPlan } from "../../pages/step-two/SelectPlan";
import { Sidebar } from "../sidebar/Sidebar";
import styles from "./styles.module.css";

export function Home() {
  return (
    <div className={styles.home_container}>
      <div>
        <Sidebar />
      </div>
      <div>
        <PersonalInfo />
        <SelectPlan />
        <AddOns />
        <Summary />
      </div>
    </div>
  );
}

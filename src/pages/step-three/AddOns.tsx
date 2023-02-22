import styles from "./styles.module.css";
import { addonsData as AddonsData } from "./addonsData";
import { PaginationButton } from "../../components/paginationBtns/PaginationButton";
import { useState } from "react";

export function AddOns() {
  const [addonsData, setAddonsData] = useState(AddonsData);

  const handleChange = (selectedAddonIndex: number) => {
    const addons = [...addonsData];
    const addon = { ...addons[selectedAddonIndex] };
    addon.isChecked = !addon.isChecked;
    addons[selectedAddonIndex] = addon;

    setAddonsData(addons);

    console.log(addons);
  };

  return (
    <div className={styles.step_three_wrapper}>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className={styles.addons_wrapper}>
        {addonsData.map((addon, index) => (
          <div
            className={styles.addons_card}
            key={index}
            style={{
              borderColor: addon.isChecked
                ? "hsl(243, 100%, 62%)"
                : "hsl(229, 24%, 87%)",
              background: addon.isChecked ? "hsl(231, 100%, 99%)" : "none",
            }}
          >
            <input
              checked={addon.isChecked}
              type="checkbox"
              onChange={() => handleChange(index)}
            />
            <div className={styles.addons_info}>
              <span className={styles.title}>{addon.title}</span>
              <span className={styles.details}>{addon.details}</span>
            </div>
            <span className={styles.price}>+${addon.price}/mo</span>
          </div>
        ))}
        <div className={styles.pagination}>
          <PaginationButton />
        </div>
      </div>
    </div>
  );
}

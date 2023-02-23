import styles from "./styles.module.css";

export function PersonalInfo() {
  return (
    <div className={styles.first_step_container}>
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <form>
        <label>Name</label>
        <input type="text" placeholder="e.g. Stephen King" />
        <label>Email Address</label>
        <input placeholder="e.g. stephenking@lorem.com" type="email" />
        <label>Phone Number</label>
        <input inputMode="numeric" placeholder="e.g. +1 234 567 890" />
      </form>
    </div>
  );
}

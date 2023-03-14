type PaginationData = {
  title: string;
  details: string;
  price: number;
  isChecked: boolean;
};

export const addonsData: PaginationData[] = [
  {
    title: "Online service",
    details: "Access to multiplayer games",
    price: 1,
    isChecked: false,
  },
  {
    title: "Larger storage",
    details: "Extra 1TB of cloud save",
    price: 2,
    isChecked: false,
  },
  {
    title: "Customizable profile",
    details: "Custom theme on your profile",
    price: 2,
    isChecked: false,
  },
];

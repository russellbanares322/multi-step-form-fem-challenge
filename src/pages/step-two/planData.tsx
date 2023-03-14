import arcadeIcon from "../../assets/icon-arcade.svg";
import advancedIcon from "../../assets/icon-advanced.svg";
import proIcon from "../../assets/icon-pro.svg";

type PlanData = {
  id: number;
  name: string;
  price: number;
  freebie: string;
  icon: string;
};
export const planData: PlanData[] = [
  {
    id: 1,
    name: "Arcade",
    price: 9,
    freebie: "2 months free",
    icon: arcadeIcon,
  },
  {
    id: 2,
    name: "Advanced",
    price: 12,
    freebie: "2 months free",
    icon: advancedIcon,
  },
  {
    id: 3,
    name: "Pro",
    price: 15,
    freebie: "2 months free",
    icon: proIcon,
  },
];

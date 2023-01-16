import MyToggle from "./MyToggle";
import PlanOption from "./PlanOption";
import { useState } from "react";

const PlanSelect = () => {
  const [monthly, setMonthly] = useState(false);

  const planOptions = [
    {
      name: "Arcade",
      cost: 9,
      iconPath: "/images/icon-arcade.svg",
    },
    {
      name: "Advanced",
      cost: 12,
      iconPath: "/images/icon-advanced.svg",
    },
    { name: "Pro", cost: 15, iconPath: "/images/icon-pro.svg" },
  ];
  //WARN: Careful with paddings for flex containers it tends to shrink the text down
  return (
    <div className="flex flex-col h-full w-11/12 mx-auto md:px-20 py-16">
      <h2 className="block font-extrabold info__head text-2xl md:text-4xl">
        Select your plan
      </h2>
      <p className="info__p text-base md:text-lg font-normal mb-10">
        You have the option of monthly or yearly billing.
      </p>
      <ul className="flex flex-col gap-3">
        {planOptions.map((option, i) => {
          return (
            <PlanOption
              key={i}
              monthly={monthly}
              planName={option.name}
              cost={option.cost}
              iconPath={option.iconPath}
            ></PlanOption>
          );
        })}
      </ul>
      <MyToggle enabled={monthly} setEnabled={setMonthly}></MyToggle>
    </div>
  );
};

export default PlanSelect;

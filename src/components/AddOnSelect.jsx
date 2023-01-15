import AddOnOption from "./AddOnOption";
import MyToggle from "./MyToggle";
import { useState } from "react";

const AddOnSelect = () => {
  const [monthly, setMonthly] = useState(false);
  const addOnOptions = [
    {
      name: "Online service",
      cost: 1,
      details: "Access to multiplayer games",
    },
    {
      name: "Larger storage",
      cost: 2,
      details: "Extra 1TB of cloud save",
    },
    {
      name: "Customizable",
      cost: 2,
      details: "Custom theme on your profile",
    },
  ];
  return (
    <div className="flex flex-col h-full w-11/12 mx-auto lg:px-16 py-16">
      <h2 className="block font-extrabold info__head text-2xl md:text-4xl">
        Pick add-ons
      </h2>
      <p className="info__p text-base md:text-lg font-normal mb-10">
        Add-ons help enhance your gaming experience.
      </p>
      <ul className="flex flex-col gap-5">
        {addOnOptions.map((option, i) => {
          return (
            <AddOnOption
              key={i}
              optionName={option.name}
              details={option.details}
              cost={option.cost}
              monthly={monthly}
            ></AddOnOption>
          );
        })}
      </ul>
      <MyToggle enabled={monthly} setEnabled={setMonthly}></MyToggle>
    </div>
  );
};

export default AddOnSelect;

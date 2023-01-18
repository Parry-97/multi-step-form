import AddOnOption from "./AddOnOption";
import MyToggle from "./MyToggle";
import { useState } from "react";
import { useCost, useCostDispatch } from "./CostContext";
import { useActiveStep, useSetStep } from "./FormContext";

const AddOnSelect = (props) => {
  const overallCost = useCost();
  const dispatch = useCostDispatch();
  const [monthly, setMonthly] = useState(overallCost.monthly);
  const setStep = useSetStep();
  const activeStep = useActiveStep();

  const [selectedAddons, setSelectedAddons] = useState(overallCost.addons);

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

  const handleSubmit = async function () {
    if (selectedAddons.length > 0) {
      dispatch({ type: "monthly", monthly: monthly });
      dispatch({ type: "addons", addons: selectedAddons });
      setStep(activeStep + 1);
    }
  };

  const handleSelect = (option) => {
    console.log(selectedAddons);
    const found = selectedAddons.find(
      (selected) => option.name == selected.name
    );
    if (found) {
      setSelectedAddons(
        selectedAddons.filter((addon) => addon.name != found.name)
      );
      return;
    }

    setSelectedAddons([option, ...selectedAddons]);
  };

  const checkSelected = (option) => {
    // console.log(selectedAddons);
    return selectedAddons.find((addon) => addon.name == option.name) != null;
  };

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
              selected={checkSelected(option)}
              setSelected={() => handleSelect(option)}
            ></AddOnOption>
          );
        })}
      </ul>
      <MyToggle enabled={monthly} setEnabled={setMonthly}></MyToggle>
      <button
        className="absolute -bottom-40 right-5 md:right-10 md:bottom-5 z-10 ml-auto md:mr-20 py-2 rounded-md px-4 border bg-blue-900 text-white font-medium text-base"
        type="submit"
        onClick={handleSubmit}
      >
        Next Step
      </button>
    </div>
  );
};

export default AddOnSelect;

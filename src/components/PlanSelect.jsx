import MyToggle from "./MyToggle";
import PlanOption from "./PlanOption";
import { useState } from "react";
import iconArcade from "../../assets/images/icon-arcade.svg";
import iconAdvanced from "../../assets/images/icon-advanced.svg";
import iconPro from "../../assets/images/icon-pro.svg";
import { useCost, useCostDispatch } from "./CostContext";
import { useActiveStep, useSetStep } from "./FormContext";
// import MyDialog from "./MyDialog";

const PlanSelect = () => {
  const overallCost = useCost();
  const dispatch = useCostDispatch();
  const [monthly, setMonthly] = useState(overallCost.monthly);
  // const [isError, setIsError] = useState(false);
  const [selectedPlan, setselectedPlan] = useState(overallCost?.plan?.name);
  const setStep = useSetStep();
  const activeStep = useActiveStep();

  const planOptions = [
    {
      name: "Arcade",
      cost: 9,
      iconPath: iconArcade,
    },
    {
      name: "Advanced",
      cost: 12,
      iconPath: iconAdvanced,
    },
    { name: "Pro", cost: 15, iconPath: iconPro },
  ];

  const handleSubmit = async function () {
    console.log(selectedPlan);
    if (selectedPlan) {
      dispatch({ type: "monthly", monthly: monthly });

      var plan = planOptions.find((plan) => plan.name == selectedPlan);
      dispatch({ type: "plan", plan: { name: plan.name, cost: plan.cost } });

      setStep(activeStep + 1);
      return;
    }
    console.log("Please select a valid plan");

    // setIsError(true);
  };

  // if (isError) {
  //   return <MyDialog isOpen={isError} setIsOpen={setIsError}></MyDialog>;
  // } else {
  //WARN: Careful with paddings for flex containers it tends to shrink/smush the text down
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
              selected={option.name == selectedPlan}
              onSelect={() => setselectedPlan(option.name)}
            ></PlanOption>
          );
        })}
      </ul>
      <MyToggle
        enabled={monthly}
        setEnabled={() => {
          setMonthly(!monthly);
        }}
      ></MyToggle>
      <button
        className="absolute -bottom-44 right-5 md:right-10 md:bottom-5 z-10 ml-auto md:mr-20 py-2 rounded-md px-4 border bg-blue-900 text-white font-medium text-base"
        type="submit"
        onClick={handleSubmit}
      >
        Next Step
      </button>
      <span
        onClick={() => setStep(activeStep - 1)}
        className="font-bold text-lg absolute -bottom-44 left-5 md:left-80 py-2 hover:cursor-pointer text-gray-400 md:bottom-5 z-10"
      >
        Go Back
      </span>
    </div>
  );
};
// };

export default PlanSelect;

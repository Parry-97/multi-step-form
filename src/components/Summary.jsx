import { useCost } from "./CostContext";
import { useActiveStep, useSetStep } from "./FormContext";

const Summary = () => {
  const finalCost = useCost();
  const activeStep = useActiveStep();
  const setStep = useSetStep();

  const totalCost =
    finalCost.plan?.cost +
    finalCost.addons?.reduce((previous, current) => {
      return previous + current.cost;
    }, 0);

  const handleSubmit = async function () {
    setStep(activeStep + 1);
  };
  return (
    <div className="h-full w-11/12 mx-auto lg:px-16 py-16">
      <h1 className="info__head mt-10 font-extrabold text-2xl md:text-4xl">
        Finishing up
      </h1>
      <p className="info__p">
        Double-check everything looks OK before confirming.
      </p>
      <div className="rounded-md mt-10 bg-gray-50 px-5">
        <div className="flex justify-between py-5">
          <div>
            <h2 className="info__head font-medium">
              {finalCost.plan?.name ?? "None"} (
              {finalCost.monthly ? "Yearly" : "Monthly"})
            </h2>
            <span
              onClick={() => setStep(activeStep - 2)}
              className="underline info_p hover:cursor-pointer"
            >
              Change
            </span>
          </div>{" "}
          <span className="info__head font-extrabold">
            {finalCost.monthly
              ? `$${finalCost.plan?.cost * 10}/yr`
              : `$${finalCost.plan?.cost}/mo`}
          </span>
        </div>
        <hr />
        <>
          {finalCost.addons?.map((addon, index) => {
            return (
              <div key={index} className="flex justify-between py-1.5">
                <p className="info__p">{addon.name}</p>
                <span className="info__head ">
                  +
                  {finalCost.monthly
                    ? `$${addon?.cost * 10}/yr`
                    : `$${addon?.cost}/mo`}
                </span>
              </div>
            );
          })}
        </>
      </div>
      <div className="flex justify-between px-5 mt-8">
        <p className="info__p ">
          Total(per {finalCost.monthly ? "year" : "month"})
        </p>
        <span className="text-indigo-600 font-extrabold text-2xl">
          {finalCost.monthly ? `$${totalCost * 10}/yr` : `$${totalCost}/mo`}
        </span>
      </div>
      <button
        className="absolute -bottom-72 right-5 md:right-10 md:bottom-5 z-10 ml-auto md:mr-20 py-2 rounded-md px-4 border bg-indigo-600 text-white font-medium text-base"
        type="submit"
        onClick={handleSubmit}
      >
        Confirm
      </button>
    </div>
  );
};

export default Summary;

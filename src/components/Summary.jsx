import { useCost } from "./CostContext";

const Summary = (props) => {
  const finalCost = useCost();

  const handleSubmit = async function (evt) {
    props.onGoNext();
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
          <h2 className="info__head font-medium">Arcade (Monthly)</h2>
          <span className="info__head font-extrabold">$ 9/mo</span>
        </div>
        <hr />
        <div className="flex justify-between py-1.5">
          <p className="info__p">Online service</p>
          <span className="info__head ">+$1/mo</span>
        </div>
        <div className="flex justify-between py-1.5">
          <p className="info__p">Larger storage</p>
          <span className="info__head ">+$2/mo</span>
        </div>
      </div>
      <div className="flex justify-between px-5 mt-8">
        <p className="info__p ">Total(per month)</p>
        <span className="text-indigo-600 font-extrabold text-lg">+$12/mo</span>
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

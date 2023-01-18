import Option from "./Option";
// import { useState } from "react";
import checkmark from "../../assets/images/icon-checkmark.svg";

const AddOnOption = ({
  selected,
  setSelected,
  optionName,
  monthly,
  cost,
  details,
}) => {
  // const [selected, setselected] = useState(false);

  return (
    <Option selected={selected} onSelect={setSelected}>
      <div className="flex align-middle w-full">
        <span className="border self-start my-auto mx-4  rounded-md ">
          <img
            className={`${
              selected ? "visible" : "invisible"
            } bg-indigo-600 py-2 px-1.5 rounded my-auto`}
            src={checkmark}
            alt="checkmark"
          />
        </span>
        <div className="flex flex-col align-middle">
          <h2 className="info__label font-medium text-lg">{optionName}</h2>
          <p className="info__p">{details}</p>
        </div>
        <span className="ml-auto mr-5 text-indigo-700 flex flex-col justify-center">
          {!monthly ? `$ ${cost}/mo` : `$ ${cost * 10}/yr`}
        </span>
      </div>
    </Option>
  );
};

export default AddOnOption;

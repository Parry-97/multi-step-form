import Option from "./Option";
import { useState } from "react";

const PlanOption = ({ iconPath, planName, monthly, cost }) => {
  const [selected, setselected] = useState(false);
  return (
    //HACK: Can refactor this outer div as a reusable Option component that can include the
    //      other more specific stuff as children
    <Option selected={selected} onSelect={() => setselected(!selected)}>
      <img className="px-4" src={iconPath} alt="game themed icon" />
      <div className="flex flex-col">
        <h2 className="info__label font-medium text-lg">{planName}</h2>
        <span className="info__p">
          {!monthly ? `$ ${cost}/mo` : `$ ${cost * 10}/yr`}
        </span>
      </div>
    </Option>
  );
};

export default PlanOption;

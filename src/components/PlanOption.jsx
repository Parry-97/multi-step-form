const PlanOption = ({ iconPath, planName, monthly, cost }) => {
  return (
    <div className="flex py-5 gap-2 justify-start rounded-xl border focus:border-purple-100">
      <img className="px-4" src={iconPath} alt="game themed icon" />
      <div className="flex flex-col">
        <h2 className="info__label font-medium text-lg">{planName}</h2>
        <span className="info__p">
          {!monthly ? `$ ${cost}/mo` : `$ ${cost * 10}/yr`}
        </span>
      </div>
    </div>
  );
};

export default PlanOption;

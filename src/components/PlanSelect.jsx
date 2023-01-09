const PlanSelect = () => {
  return (
    <div>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <ul>
        <li>Arcade $9/mo</li>
        <li>Advanced $12/mo</li>
        <li>Pro $15/mo</li>
        <input type="checkbox" />
      </ul>
      Monthly Yearly
      <span>Go Back</span>
      <span>Next Step</span>
    </div>
  );
};

export default PlanSelect;

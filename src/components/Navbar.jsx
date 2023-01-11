const Navbar = ({ stepDescriptions: descriptions, activeStep, showFull }) => {
  //TODO: Add conditional logic display of active step based on prop of shared state
  console.log(descriptions);

  return (
    <div className="px-10 bg-cover bg-[url('../../assets/images/bg-sidebar-desktop.svg')]">
      <ul>
        {descriptions.map((description, i) => {
          return activeStep == i ? (
            <li key={i} className="underline">
              {description}
            </li>
          ) : (
            <li key={i}>{description}</li>
          );
        })}
      </ul>{" "}
    </div>
  );
};
export default Navbar;

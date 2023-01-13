const Navbar = ({ stepDescriptions: descriptions, activeStep }) => {
  //TODO: Add conditional logic display of active step based on prop of shared state
  console.log(descriptions);

  return (
    <div className="navbar__img rounded-xl lg:rounded-r bg-clip-border px-10 py-10 lg:px-20 lg:py-20 bg-cover bg-[url('../../assets/images/bg-sidebar-mobile.svg')] lg:bg-[url('../../assets/images/bg-sidebar-desktop.svg')]">
      <ul className="flex flex-row  lg:flex-col lg:items-start justify-center items-center uppercase text-base text-slate-50 font-extrabold">
        {descriptions.map((description, i) => {
          return activeStep == i ? (
            <li key={i} className="mt-5">
              <span className="rounded-full text-center bg-teal-50 text-gray-700 py-1 px-3 border-2 border-white inline-block mr-5">
                {i + 1}
              </span>
              <span className="hidden lg:inline">{description}</span>
            </li>
          ) : (
            <li key={i} className="mt-5 flex flex-row items-center">
              <span className="rounded-full text-center  py-1 px-3 border-2 border-white inline-block mr-5">
                {i + 1}
              </span>

              <span className="hidden lg:inline-flex justify-start">
                <div className="flex flex-col">
                  <span className="step__num text-sm font-light">
                    STEP {i + 1}
                  </span>
                  <span>{description}</span>
                </div>
              </span>
            </li>
          );
        })}
      </ul>{" "}
    </div>
  );
};
export default Navbar;

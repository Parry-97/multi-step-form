import { useState } from "react";
import CardFactory from "./components/CardFactory";
// import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Finish from "./components/Finish";
import Summary from "./components/Summary";
import PlanSelect from "./components/PlanSelect";
import InfoForm from "./components/InfoForm";
import AddOnSelect from "./components/AddOnSelect";

function App() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [InfoForm, PlanSelect, AddOnSelect, Summary, Finish];
  const stepDescriptions = ["Your info", "select plan", "add-ons", "Summary"];
  //TODO: Add state for currently active step and pass it down to Navbar and Card Factory component

  /* WARN: The align-items property will align the items on the cross axis.
   * The initial value for this property is stretch and this is why
   * flex items stretch to the height of the flex container by default.*/

  return (
    <div className="flex grow my-20  mx-auto shadow-2xl rounded-t-xl rounded-b-xl flex-col lg:flex-row  max-w-screen-lg">
      <Navbar
        stepDescriptions={stepDescriptions}
        activeStep={activeStep}
        showFull={false}
      />
      <CardFactory
        component={steps[activeStep]}
        onGoBack={() =>
          setActiveStep(activeStep > 0 ? activeStep - 1 : activeStep)
        }
        onGoNext={() => setActiveStep(activeStep + 1)}
      ></CardFactory>
    </div>
  );
}

export default App;

import { useState } from "react";
import CardFactory from "./components/CardFactory";
// import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
// import Finish from "./components/Finish";
import Summary from "./components/Summary";
import PlanSelect from "./components/PlanSelect";
import InfoForm from "./components/InfoForm";
import AddOnSelect from "./components/AddOnSelect";

function App() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [InfoForm, PlanSelect, AddOnSelect, Summary];
  const stepDescriptions = ["Your info", "select plan", "add-ons", "Summary"];
  //TODO: Add state for currently active step and pass it down to Navbar and Card Factory component
  return (
    <div className="flex flex-col md:flex-row max-w-screen-xl">
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

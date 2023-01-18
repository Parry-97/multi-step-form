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
import { SetStepProvider, StepProvider } from "./components/FormContext";

function App() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [InfoForm, PlanSelect, AddOnSelect, Summary, Finish];
  const stepDescriptions = ["Your info", "select plan", "add-ons", "Summary"];

  /* WARN: The align-items property will align the items on the cross axis.
   * The initial value for this property is stretch and this is why
   * flex items stretch to the height of the flex container by default.*/

  return (
    <div className="flex relative bg-gray-100 md:bg-white md:p-3 grow md:my-20  md:mx-auto md:shadow-2xl md:rounded-3xl flex-col md:flex-row  max-w-screen-lg">
      <StepProvider step={activeStep}>
        <Navbar
          stepDescriptions={stepDescriptions}
          // activeStep={activeStep}
          onSelectStep={(step) => setActiveStep(step)}
          // showFull={false}
        />
        <SetStepProvider setStep={setActiveStep}>
          <CardFactory
            component={steps[activeStep]}
            // onGoBack={() =>
            //   setActiveStep(activeStep > 0 ? activeStep - 1 : activeStep)
            // }
            // onGoNext={() =>
            //   setActiveStep(activeStep == 4 ? activeStep : activeStep + 1)
            // }
          ></CardFactory>
        </SetStepProvider>
      </StepProvider>
    </div>
  );
}

export default App;

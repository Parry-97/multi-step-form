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
  const [activeStep, setActiveStep] = useState(1);

  const steps = new Map([
    [1, InfoForm],
    [2, PlanSelect],
    [3, AddOnSelect],
    [4, Summary],
    // [5, Finish],
  ]);
  //TODO: Add state for currently active step and pass it down to Navbar and Card Factory component
  return (
    <div className="flex font-semibold">
      <Navbar options={steps} activeStep={activeStep} showFull={false} />
      <CardFactory
        component={steps.get(activeStep)}
        onGoBack={() => setActiveStep(activeStep - 1)}
        onGoNext={() => setActiveStep(activeStep + 1)}
      ></CardFactory>
    </div>
  );
}

export default App;

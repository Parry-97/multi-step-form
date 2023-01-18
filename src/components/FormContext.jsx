import { createContext, useContext } from "react";

const StepContext = createContext(null);
const ActiveStepContext = createContext(0);

export function useSetStep() {
  return useContext(StepContext);
}

export function useActiveStep() {
  return useContext(ActiveStepContext);
}

export const SetStepProvider = ({ children, setStep }) => {
  return (
    <StepContext.Provider value={setStep}>{children}</StepContext.Provider>
  );
};

export const StepProvider = ({ children, step }) => {
  return (
    <ActiveStepContext.Provider value={step}>
      {children}
    </ActiveStepContext.Provider>
  );
};

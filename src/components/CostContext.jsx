import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";

const initialCostState = {
  plan: {},
  addons: [],
  username: "",
  monthly: true,
  email: "",
  number: "",
};

const CostContext = createContext(null);
const CostDispatchContext = createContext(null);

export function useCost() {
  return useContext(CostContext);
}

export function useCostDispatch() {
  return useContext(CostDispatchContext);
}

export const CostProvider = ({ children }) => {
  const [cost, dispatch] = useImmerReducer(costReducer, initialCostState);

  return (
    <CostContext.Provider value={cost}>
      <CostDispatchContext.Provider value={dispatch}>
        {children}
      </CostDispatchContext.Provider>
    </CostContext.Provider>
  );
};

function costReducer(cost, action) {
  switch (action.type) {
    case "plan":
      cost.plan = action.plan;
      break;

    case "montly":
      cost.monthly = true;
      break;

    case "yearly":
      cost.monthly = false;
      break;

    case "addons":
      cost.addons = action.addons;
      break;

    default:
      break;
  }
}

export default CostProvider;

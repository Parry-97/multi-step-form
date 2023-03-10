import PropTypes from "prop-types";
import { CostProvider } from "./CostContext";

//WARN: This component : Component is just Object destructuring assignment
//that gets the prop value for component and assign it to the new Component variable
const CardFactory = ({ component: Component, ...rest }) => {
  return (
    <div className="flex flex-col md:w-full">
      <div className="bg-white  shadow-xl rounded-xl md:rounded-none absolute md:static top-32 right-5 left-5 z-10 md:shadow-none  md:h-full ">
        <CostProvider>
          <Component {...rest} />
        </CostProvider>
      </div>
    </div>
  );
};

CardFactory.propTypes = {
  component: PropTypes.func.isRequired,
};
export default CardFactory;

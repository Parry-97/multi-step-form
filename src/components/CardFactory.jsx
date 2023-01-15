import PropTypes from "prop-types";

//WARN: This component : Component is just Object destructuring assignment
//that gets the prop value for component and assign it to the new Component variable
const CardFactory = ({ component: Component, ...rest }) => {
  return (
    <div className="flex flex-col md:w-full">
      <div className="bg-white  shadow-xl rounded-xl md:rounded-none absolute md:static top-32 right-5 left-5 z-10 md:shadow-none  md:h-full ">
        <Component {...rest} />
      </div>
      <button
        //NOTE: Could have also had this in the parent App component.
        //      Furthemore, remember that absolute positioned elements
        //      consider the padding box as the containing block not the content-box
        //HACK: Very important to understarnd the mt-auto
        className="absolute bottom-16 right-5 md:right-10 md:bottom-5 z-10 ml-auto md:mr-20 py-2 rounded-md px-4 border bg-blue-900 text-white font-medium text-base"
        type="submit"
      >
        Next Step
      </button>
    </div>
  );
};

CardFactory.propTypes = {
  component: PropTypes.func.isRequired,
};
export default CardFactory;

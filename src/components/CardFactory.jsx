import PropTypes from "prop-types";

//WARN: This component : Component is just Object destructuring assignment
//that gets the prop value for component and assign it to the new Component variable
const CardFactory = ({ component: Component, ...rest }) => {
  return <Component {...rest} />;
};

CardFactory.propTypes = {
  component: PropTypes.func.isRequired,
};
export default CardFactory;

import PropTypes from "prop-types";

const Feature = ({feature}) => {
    return (
        <div>
            <p>{feature}</p>
        </div>
    );
};

Feature.PropTypes = {
  feature: PropTypes.string,
};
export default Feature;
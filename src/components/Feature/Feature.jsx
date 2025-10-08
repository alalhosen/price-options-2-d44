import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";

const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex text-center"><FaCheckCircle className="text-green-500 mr-2"></FaCheckCircle> {feature}</p>
        </div>
    );
};

Feature.PropTypes = {
  feature: PropTypes.string,
};
export default Feature;
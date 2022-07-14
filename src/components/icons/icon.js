import React from "react";
import PropTypes from "prop-types";
import {
  IconLogo,
  IconVisa, 
  IconMastercard,
  IconPayPal,
  IconDiscover
} from "./";

const Icon = ({ name }) => {
  switch (name) {
    case "Logo":
      return <IconLogo />;
    case "Visa": 
      return <IconVisa />;
    case "Mastercard": 
      return <IconMastercard />;
    case "PayPal":
      return <IconPayPal />;
    case "Discover": 
      return <IconDiscover />;
    default:
      return null;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;

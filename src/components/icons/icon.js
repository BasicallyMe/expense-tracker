import React from "react";
import PropTypes from "prop-types";
import {
  IconLogo,
  IconVisa, 
  IconMastercard,
  IconPayPal,
  IconDiscover
} from "./";
import { FiCreditCard, FiShoppingBag, FiShoppingCart } from "react-icons/fi";

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
    case "Investments": 
      return <FiCreditCard />;
    case "Clothing": 
      return <FiShoppingBag />;
    case "Groceries": 
      return <FiShoppingCart />;
    default:
      return null;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;

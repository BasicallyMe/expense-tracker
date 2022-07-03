import React from "react";
import PropTypes from "prop-types";
import {
  IconLogo
} from "./";

const Icon = ({ name }) => {
  switch (name) {
    case "Logo":
      return <IconLogo />;
    default:
      return null;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;

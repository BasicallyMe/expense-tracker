import React from "react";
import Icon from "../icons";
import "./Item.scss";

const Item = (props) => {
  const { data } = props; 
  return (
    <li className="item">
      <div className="item-icon">
        <Icon name={data.category} />
      </div>
      <div className="item-info">
        <h3 className="item-name">{data.item_name}</h3>
        <h5 className="category-name">{data.category}</h5>
      </div>
      <h3 className="item-amount">
        <span>-</span>
        <span>$</span>{data.price}
      </h3>
    </li>
  );
};

export default Item;

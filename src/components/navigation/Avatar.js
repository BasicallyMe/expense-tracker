import React from "react";

const Avatar = (props) => {
  const { avatar } = props;

  return (
    <div className="avatar-container">
      <img src={avatar} alt="" className="avatar" />
    </div>
  );
};

export default Avatar;

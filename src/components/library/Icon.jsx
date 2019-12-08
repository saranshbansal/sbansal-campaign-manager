import React from "react";

const BASE_IMG_URL = `${process.env.PUBLIC_URL + '/images/'}`;

const Icon = props => {
  return <img className="icon" alt="Icon" src={BASE_IMG_URL + props.iconName} width={props.size || 24} height={props.size || 24} />;
};

export default Icon;

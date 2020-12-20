import React from "react";

const Image = ({ urls, handleClick, ...rootDOMAttributes }) => {
  console.log(rootDOMAttributes);
  return (
    <li
      className="img"
      {...rootDOMAttributes}
      // onClick={() => handleClick(urls.regular)}
    >
      <img src={urls.small} alt="Picsum photo" width="250" />
    </li>
  );
};

export default Image;

import React from "react";

export default ({ imgSrc, title, content }) => {
  return (
    <li>
      <div>
        {imgSrc && (
          <div>
            <img src={imgSrc} alt="Logo do sistema" />
          </div>
        )}
        <div>
          {title && <h4>{title}</h4>}
          {content}
        </div>
      </div>
    </li>
  );
};

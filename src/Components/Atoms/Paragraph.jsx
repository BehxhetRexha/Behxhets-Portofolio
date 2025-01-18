import React from "react";

function Paragraph({ para_class, para }) {
  return (
    <div className="Paragraph">
      <p className={para_class}>{para}</p>
    </div>
  );
}

export default Paragraph;

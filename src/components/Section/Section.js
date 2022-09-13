import React from "react";

// style
import "./Section.css";

function Section({ Icon, title, color, selected }) {
  return (
    <div
      className={`section ${selected && "section__selected"}`}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`,
      }}
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  );
}

export default Section;

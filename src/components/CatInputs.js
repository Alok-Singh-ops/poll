// CatInputs.js

import React from "react";
import PropTypes from "prop-types";

const CatInputs = ({ idx, catState, handleCatChange }) => {
  const catId = `name-${idx}`;
  const ageId = `age-${idx}`;
  return (
    <div key={`cat-${idx}`}>
      <label htmlFor={catId}>{`Question ${idx + 1}`}</label>
      <input
        type="text"
        name={catId}
        data-idx={idx}
        id={catId}
        className="name"
        value={catState[idx].name}
        onChange={handleCatChange}
      />
      <label htmlFor={ageId}>Description</label>
      <input
        type="text"
        name={ageId}
        data-idx={idx}
        id={ageId}
        className="age"
        value={catState[idx].age}
        onChange={handleCatChange}
      />
    </div>
  );
};

CatInputs.propTypes = {
  idx: PropTypes.number,
  catState: PropTypes.array,
  handleCatChange: PropTypes.func
};

export default CatInputs;

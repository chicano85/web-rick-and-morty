import React from "react";

const Filter = (props) => {
  // move the inpute value to the state

  const handleFilterName = (ev) => {
    props.handleFilter({
      key: ev.target.id,
      value: ev.target.value,
    });
  };

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
      }}
    >
      <div className="input-search">
        <label htmlFor="filterName" className="label">
          Search character
        </label>
        <input
          type="text"
          id="filterName"
          placeholder="Morty"
          value={props.filterName}
          onChange={handleFilterName}
        />
        <label htmlFor="status"></label>
        <select name="status" id="status" onChange={handleFilterName}>
          <option value="select gender"> Select gender </option>
          <option value="Female"> female </option>
          <option value="Male"> male </option>
          <option value="unknown"> unknown </option>
        </select>
      </div>
    </form>
  );
};

export default Filter;

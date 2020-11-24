import React from "react";

const Filter = (props) => {
  // move the inpute value to the state

  const handleFilterName = (ev) => {
    props.handleFilter({
      key: "filterName",
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
        <label htmlFor="filterName" class="label">
          Search character
        </label>
        <input
          type="text"
          id="filterName"
          placeholder="Morty"
          value={props.filterName}
          onChange={handleFilterName}
        />
      </div>
    </form>
  );
};

export default Filter;

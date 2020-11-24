import React from "react";

const Filter = (props) => {
  //pasar el valor del input al estado

  const handleFilterName = (ev) => {
    props.handleFilter({
      key: "filterName",
      value: ev.target.value,
    });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className="input-search">
        <label htmlFor="filterName">
          <b>Search character</b>
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

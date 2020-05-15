import React from "react";
import PropTypes from "prop-types";

const Search = (props) => {
  return (
    <div className="input-group search-category mt-3">
      <div className="input-group-prepend">
        <div className="input-group-text" id="btnGroupAddon2">
          <i className="fas fa-search"></i>
        </div>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Browse..."
        aria-label="Input group example"
        aria-describedby="btnGroupAddon2"
        name="search"
        onChange={(e) => props.changeInput(e)}
      />
    </div>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default Search;

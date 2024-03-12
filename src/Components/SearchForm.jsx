import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import Button from "./Button";

import OPTIONS from "../data/dropdownOptions";

const SearchForm = () => {
  const [input, setInput] = useState(null);
  const [difficulty, setDifficulty] = useState("any");
  const [totalTime, setTotalTime] = useState("all");
  const navigate = useNavigate();

  // This function is called when the form is submitted by
  // clicking the "Search" button or pressing Enter
  const handleSubmit = (e) => {
    e.preventDefault();

    // This builds the query string based on the form's state
    // and navigates to the new URL
    const queryParams = new URLSearchParams();

    if (input) {
      queryParams.set("search", input);
    }

    if (difficulty !== "any") {
      queryParams.set("difficulty", difficulty);
    }

    if (totalTime !== "all") {
      queryParams.set("time", totalTime);
    }

    navigate(`/?${queryParams.toString()}`);
  };

  // These input handlers are used to lift the state up to the SearchForm component
  const handleInputChange = (value) => {
    setInput(value);
  };

  const handleDropdownChange = (selection, setStateFunction) => {
    setStateFunction(selection);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col md:flex-row md:items-center my-5 gap-3'>
        <SearchBar onChange={handleInputChange} />
        <Dropdown
          onChange={handleDropdownChange}
          setStateFunction={setDifficulty}
          options={OPTIONS.difficultyDropdownOptions}
        />
        <Dropdown
          onChange={handleDropdownChange}
          setStateFunction={setTotalTime}
          options={OPTIONS.timeDropdownOptions}
        />
        <Button title='Search' />
      </div>
    </form>
  );
};

export default SearchForm;

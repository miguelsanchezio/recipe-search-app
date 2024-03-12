const Dropdown = ({ options, onChange, setStateFunction }) => {
  return (
    <div>
      <select
        className='py-4 border-salmon px-3 rounded-md w-full md:w-auto'
        // Lift the state up to the SearchForm component
        onChange={(e) => onChange(e.target.value, setStateFunction)}
      >
        {Object.keys(options).map((key, i) => (
          <option key={i} value={key}>
            {options[key]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

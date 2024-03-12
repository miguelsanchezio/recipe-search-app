const SearchBar = ({ onChange }) => {
  return (
    <div className='w-full'>
      <input
        className='py-4 px-3 border-salmon rounded-md w-full'
        type='text'
        placeholder='Search for your recipe'
        // Lift the state up to the SearchForm component
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;

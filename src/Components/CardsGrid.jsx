const CardsGrid = ({ children }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
      {children}
    </div>
  );
};

export default CardsGrid;

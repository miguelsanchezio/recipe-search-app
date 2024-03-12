const MainLayout = ({ children }) => {
  return (
    <div className='bg-almond'>
      <div className='px-5 max-w-screen-xl mx-auto'>{children}</div>
    </div>
  );
};

export default MainLayout;

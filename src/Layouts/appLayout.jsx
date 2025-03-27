const AppLayout = ({ children }) => {
  return (
    <div className="bg-[--bg-twitter] w-full md:w-[40%] md:h-[95%] h-full my-auto mx-auto flex flex-col">
      {children}
    </div>
  );
};

export default AppLayout;

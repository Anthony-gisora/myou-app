import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handSignUp = () => {
    navigate("/signup");
  };

  const handleLogIN = () => {
    navigate("/signin");
  };

  return (
    <div className="bg-[#e6ecf0] w-full md:w-[40%] md:h-[95%] h-full my-auto mx-auto flex flex-col items-center justify-evenly">
      <div className="h-[95%] w-full flex flex-col space-y-[6px] items-center justify-center">
        <h1 className="text-3xl font-extrabold text-[#50b7f5] mb-[20%]">
          myou
        </h1>
        <button
          type="submit"
          className="rounded-[30px] bg-[#50b7f5] min-w-fit w-[40%] "
          onClick={() => {
            handSignUp();
          }}
        >
          Sign Up
        </button>
        <button
          type="submit"
          className="rounded-[30px] bg-[#50b7f5] min-w-fit w-[40%]"
          onClick={() => {
            handleLogIN();
          }}
        >
          LogIn
        </button>
      </div>
      <p className=" text-gray-400 text-center m-1 flex items-center">
        Built by Anthony Gisemba 🤓
      </p>
      <p className=" text-gray-400 text-center m-1 flex items-center">
        @Tonny_G
      </p>
    </div>
  );
};

export default LandingPage;

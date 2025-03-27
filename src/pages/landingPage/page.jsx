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
    <div className="bg-[#e6ecf0] w-full md:w-[40%] md:h-[95%] h-full my-auto mx-auto flex flex-col items-center">
      <div className="h-full w-full flex flex-col space-y-[6px] items-center justify-center">
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
          className="rounded-sm bg-[#05051f] text-[#ffff] min-w-fit w-[60%] "
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

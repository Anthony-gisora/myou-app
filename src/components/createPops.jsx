import SendIcon from "@mui/icons-material/Send";
import axios from "axios";

const CreatePop = ({ pop, setPop }) => {
  const handleSubmit = (ev) => {
    axios
      .get("https://myou-server.onrender.com")
      .then((data) => console.log(data.data));
    ev.preventDefault();
    alert("You sent a pop...!");
  };

  return (
    <div className="flex w-full md:w-[80%] h-[25%] mx-auto p-4 border-b border-[#50b7f5]">
      <form
        onSubmit={(ev) => handleSubmit(ev)}
        className="flex flex-col p-1  w-[90%] "
      >
        <textarea
          cols="9"
          rows="5"
          type="text"
          value={pop}
          onChange={(e) => setPop(e.target.value)}
          placeholder="Hey send it..."
          className="focus:outline-none p-2 resize-none bg-[#fdfdfd]"
        />
        <button
          type="submit"
          className="self-end my-3 mr-6 border rounded-md px-3 bg-[#50b7f5] text-[20px] text-[#ffff] font-[500] flex justify-center items-center"
        >
          <SendIcon />
        </button>
      </form>
    </div>
  );
};

export default CreatePop;

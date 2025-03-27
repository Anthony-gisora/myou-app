import { useState } from "react";
import { Avatar } from "@mui/material";
import CreateTweet from "../../components/createTweets";
import Tweet from "../../components/tweet";
import Header from "../../components/header";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Home = ({ loggedUser }) => {
  const [tweet, setTweet] = useState();
  const [tweets, setTweets] = useState([]);

  const [comment, setComment] = useState(false);
  const handleCommSec = () => {
    setComment(!comment);
  };

  return (
    <div className="bg-[#e6ecf0] w-full md:w-[40%] md:h-[95%] h-full my-auto mx-auto flex flex-col">
      <div className="m-3 text-lg font-semibold flex w-[40%] items-baseline ">
        {/* <Avatar className="mr-6" />
        <p className="text-[24px]">{loggedUser.username}</p>
        <p className="ml-2 text-gray-400 text-center text-[14px] flex items-center">
          @{loggedUser.handle}
        </p> */}
        {/* <Header /> */}
      </div>
      {/* <button
        onClick={() => {
          handleLogOut();
        }}
        className="my-3 mr-6 border rounded-md px-3 bg-[#50b7f5] text-[20px] text-[#ffff] font-[500] self-end"
      >
        Log Out
      </button> */}
      <SignedIn>
        <UserButton />
      </SignedIn>
      <CreateTweet
        tweet={tweet}
        setTweet={setTweet}
        tweets={tweets}
        setTweets={setTweets}
      />
      <div className="overflow-auto h-[75%] space-y-2 flex-col-reverse flex ">
        {tweets &&
          tweets.map((twt, index) => {
            return (
              <Tweet
                key={index}
                indx={index}
                twt={tweets}
                comment={comment}
                handleCommSec={handleCommSec}
                displayName={loggedUser.username}
                username={`@${loggedUser.handle}`}
                text={twt.text}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Home;

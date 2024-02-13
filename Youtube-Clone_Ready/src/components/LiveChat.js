import { useEffect, useState } from "react";
import Chatmessage from "./Chatmessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import generateRandomName, { generateRandomStrings } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomStrings(22),
        })
      );
    }, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[500px] ml-2  border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, i) => (
            <Chatmessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full m-2 p-2 border border-black"
        onSubmit={(e) => {
          dispatch(
            addMessage({
              name: generateRandomName(),
              message: liveMessage,
            })
          );
          e.preventDefault();
          setLiveMessage("");
        }}
      >
        <input
          placeholder="Text Here"
          className="w-80 px-3 "
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button onClick={() => {}} className="px-2 mx-3  bg-green-200">
          send
        </button>
      </form>
    </>
  );
};
export default LiveChat;

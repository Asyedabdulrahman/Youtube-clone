import React, { useEffect, useState } from "react";

function YouTubeComments({ videoId, apiKey }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetttchComments();
  }, []);

  const fetttchComments = async () => {
    const commentsFetch = await fetch(
      `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${apiKey}`
    );
    const cmntsjson = await commentsFetch.json();
    console.log(cmntsjson);
    setComments(cmntsjson.items);
  };

  return (
    <div className="bg-gray-800 ml-5 text-white w-[1000px] ">
      <h2 className="pb-2.5 px-3 pt-3 font-extrabold">Comments :</h2>
      <div className="w-[960px] px-5">
        {comments.map((comment, index) => (
          <div key={index} className="flex items-center mb-5">
            <span>
              <img
                className="h-8 mr-2 rounded-full"
                alt="user-icon"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
              />
            </span>
            <div className="flex flex-col">
              <span className="font-semibold">
                {comment.snippet.topLevelComment.snippet.authorDisplayName}
              </span>
              <p className="text-gray-400">
                {comment.snippet.topLevelComment.snippet.textDisplay}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YouTubeComments;

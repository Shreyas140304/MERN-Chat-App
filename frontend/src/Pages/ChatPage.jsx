import React, { useEffect,useState } from "react";
import axios from "axios";

const Chatpage = () => {

  const [chats, setChats] = React.useState([]); 
  const fetchData = async () => {
    try {
      const {data}= await axios.get("/api/chat");
        setChats(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
      <div>
        {chats.map((chat) => (
          <div key={chat._id}>
            <h2>{chat.chatName}</h2>
          </div>
        ))}
      </div>
  );
};

export default Chatpage;

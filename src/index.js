import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import BotMessage from "./components/BotMessage";
import UserMessage from "./components/UserMessage";
import Messages from "./components/Messages";
import Input from "./components/Input";

import API from "./ChatbotAPI";

import "./styles.css";
import Header from "./components/Header";
import CustomInput from "./components/ContextInput";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [context, setContext] = useState("");

  useEffect(() => {
    async function loadWelcomeMessage() {
      setMessages([
        <BotMessage
          key="0"
          fetchMessage={async () => await API.GetChatbotResponse("hi", "")}
        />
      ]);
    }
    loadWelcomeMessage();
  }, []);

  const send = async text => {
    const newMessages = messages.concat(
      <UserMessage key={messages.length + 1} text={text} />,
      <BotMessage
        key={messages.length + 2}
        fetchMessage={async () => await API.GetChatbotResponse(text, context)}
      />
    );
    setMessages(newMessages);
  };

  return (
    <div className="container">
      <div className="left-column">
        <div className="header">&nbsp;Context</div>
        <CustomInput setContext={setContext} />
      </div>
      <div className="right-column">
        <div className="chatbot">
          <Header />
          <Messages messages={messages} />
          <Input onSend={send} />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Chatbot />, rootElement);

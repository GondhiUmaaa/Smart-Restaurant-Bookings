import React, { useState } from 'react';
import { TbMessageChatbot } from "react-icons/tb";
import './Chatbot.scss'; // Make sure the SCSS file is named 'ChatModal.scss' and is in the same directory

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="chat-modal-container">
      <div className="chat-button" onClick={() => setIsOpen(true)}>
        {/* Replace with your chat icon */}
        <span><TbMessageChatbot /></span>
      </div>

      {isOpen && (
        <div className="modal-backdrop">
          <div className="modal-content">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/JGqxdhRmyF5m5_78fBOLy"
            title="Smart Restaurant"
            frameborder="0"
            ></iframe>
            <button className="close-button" onClick={() => setIsOpen(false)}>x</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

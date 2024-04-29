/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./Sidebar.css";
import { Context } from "../../context/Context";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";

const Sidebar = () => {
  const [extended, setExtended] = useState(false)
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);
    const [user, loading] = useAuthState(auth); 

  
  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  }

  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          onClick={() => setExtended((prev) => !prev)}
          src={assets.menu_icon}
          alt=""
        />
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p> New Chat</p> : null}
        </div>

        <div className="recent">
          <p className="recent-title">{extended ? "Recent" : null}</p>
          {prevPrompts.map((prompt, index) => {
            return (
              <div
                onClick={() => loadPrompt(prompt)}
                className="recent-entry"
                key={index}
              >
                <img src={assets.message_icon} alt="" />
                {extended ? <p>{prompt.slice(0, 18)}...</p> : null}
              </div>
            );
          })}
          {/* <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>What is react ...</p>
            </div> */}
        </div>
      </div>

      <div className="bottom">
        <div
          className="bottom-item recent-entry"
          onClick={() => auth.signOut()}
        >
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Logout</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

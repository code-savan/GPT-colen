/* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/Context";
import Nav from "./Nav";



const Main = ({user}) => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loadingR,
    resultData,
    setInput,
    input,
    // newChat
  } = useContext(Context);
  

  useEffect(() => {
    const textarea = document.querySelector("textarea");
    if (textarea) {
      textarea.addEventListener("input", function () {
        // let scHeight = e.target.scrollHeight;
        textarea.style.height = "50px";
        textarea.style.height = textarea.scrollHeight + "px";
      });
    }
  }, []);



  
 

    return (
      <div className="main">
        <Nav user={user} />

        <div className="main-container">
          {!showResult ? (
            <>
              <div className="greet">
                <p>
                  <span>Hello, {user ? user.displayName : "Dev"}👋</span>
                </p>
                <p>How can I help you today?</p>
              </div>
              <div className="cards">
                <div
                  onClick={() =>
                    onSent(
                      "Suggest beautiful places to see on an upcoming road trip"
                    )
                  }
                  className="card"
                >
                  <p>
                    Suggest beautiful places to see on an upcoming road trip
                  </p>
                  <img src={assets.compass_icon} alt="" />
                </div>
                <div
                  onClick={() =>
                    onSent("Briefly summarize this concept: urban planning")
                  }
                  className="card"
                >
                  <p>Briefly summarize this concept: urban planning</p>
                  <img src={assets.bulb_icon} alt="" />
                </div>
                <div
                  onClick={() =>
                    onSent(
                      "Brainstorm team bonding activities for our work retreat"
                    )
                  }
                  className="card hidden md:inline-flex"
                >
                  <p>Brainstorm team bonding activities for our work retreat</p>
                  <img src={assets.message_icon} alt="" />
                </div>
                <div
                  onClick={() =>
                    onSent("Improve the readability of the following code")
                  }
                  className="card hidden md:inline-flex"
                >
                  <p>Improve the readability of the following code</p>
                  <img src={assets.code_icon} alt="" />
                </div>
              </div>
            </>
          ) : (
            <div className="result">
              <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loadingR ? (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          )}
        </div>


        <div className="main-bottom">
          <div className="search-box">
            <textarea
              onChange={(e) => setInput(e.target.value)} // Update the input state
              value={input}
              type="text"
              required
              placeholder="Enter a prompt here"
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  onSent();
                }
              }}
            />
       

            <div>
              {/* <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" /> */}
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="send" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Conversio may display incorrect info, including about people, so
            double-check it&apos;s responses.
          </p>
        </div>
      </div>
    );
};

export default Main;

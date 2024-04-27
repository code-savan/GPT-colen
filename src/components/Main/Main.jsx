/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/Context";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon, EditIcon } from "@chakra-ui/icons";

const Main = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    newChat
  } = useContext(Context);


  return (
    <div className="main">
      <nav className="nav">
        <div className="menu" onClick={onOpen}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p>VirgoGPT 1.1</p>
        <img src={assets.user_icon} alt="" />
        <Drawer
          placement={"left"}
          size={"xs"}
          onClick={onOpen}
          onClose={onClose}
          isOpen={isOpen}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader className="flex justify-end">
              <CloseIcon onClick={onClose} boxSize={4} className="mt-3" />
            </DrawerHeader>
            <DrawerBody className="px-0 p-0 m-0 drawer">
              <div onClick={() => {
                newChat();
                onClose();
              }} className="new-chat">
                <div>
                <img src={assets.plus_icon} alt="" />
                <p> New Chat</p>
                </div>
                <EditIcon boxSize={5} />
              </div>

              <p className="recent">Recent</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </nav>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev👋</span>
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
                <p>Suggest beautiful places to see on an upcoming road trip</p>
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
              {loading ? (
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
          <input
            onChange={(e) => setInput(e.target.value)} // Update the input state
            value={input}
            type="text"
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
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            ) : null}
          </div>
        </div>
        <p className="bottom-info">
          GPT may display incorrect info, including about people, so
          double-check it&apos;s responses.
        </p>
      </div>
    </div>
  );
};

export default Main;

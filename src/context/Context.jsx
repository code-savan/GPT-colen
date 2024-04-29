/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */



import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loadingR, setLoadingR] = useState(false);
  const [resultData, setResultData] = useState("");

  const delaypara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 35 * index);
  };

  const newChat = () => {
    setLoadingR(false);
    setShowResult(false);
  };

  const removeHeaderHashes = (response) => {
    return response.replace(/^##\s*/gm, ""); // Remove ## from the beginning of each line
  };

  const onSent = async (prompt) => {
    setResultData("");
    setLoadingR(true);
    setShowResult(true);
    let response;
    if (prompt !== undefined) {
      response = await runChat(prompt);
      setRecentPrompt(prompt);
    } else {
      setPrevPrompts((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await runChat(input);
    }

    const formattedResponse = removeHeaderHashes(response); // Remove ## from the response
    let responseArray = formattedResponse.split("**");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<br /><br /><b>" + responseArray[i] + "</b>";
      }
    }
    let newResponse2 = newResponse.split("*").join("");
    let newResponseArray = newResponse2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delaypara(i, nextWord + " ");
    }
    setLoadingR(false);
    setInput("");
  };


    
  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loadingR,
    resultData,
    input,
    setInput,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;

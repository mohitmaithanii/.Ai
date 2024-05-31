import { useState, createContext } from "react";
import runChat from "../config/gemini";

// Create a context to manage state and functions
export const Context = createContext();

// Context Provider component
const ContextProvider = (props) => {
	// State variables
	const [input, setInput] = useState("");
	const [recentPrompt, setRecentPrompt] = useState("");
	const [prevPrompts, setPrevPrompts] = useState([]);
	const [showResult, setShowResult] = useState(false);
	const [loading, setLoading] = useState(false);
	const [resultData, setResultData] = useState("");

	// Function to delay rendering paragraphs
	const delayPara = (index, nextWord) => {
		setTimeout(() => {
			setResultData((prev) => prev + nextWord);
		}, 75 * index);
	};

	// Function to start a new chat session
	const newChat = () => {
		setLoading(false);
		setShowResult(false);
		setRecentPrompt("");
		setResultData("");
	};

	// Function to handle sending a prompt
	const onSent = async (prompt) => {
		setResultData("");
		setLoading(true);
		setShowResult(true);

		let response;
		if (prompt !== undefined) {
			setRecentPrompt(prompt);
			if (!prevPrompts.includes(prompt)) {
				setPrevPrompts((prev) => [...prev, prompt]);
			}
			response = await runChat(prompt);
		} else {
			if (!prevPrompts.includes(input)) {
				setPrevPrompts((prev) => [...prev, input]);
			}
			setRecentPrompt(input);
			response = await runChat(input);
		}

		let responseArray = response.split("**");
		let newResponse = "";
		for (let i = 0; i < responseArray.length; i++) {
			if (i === 0 || i % 2 !== 1) {
				newResponse += responseArray[i];
			} else {
				newResponse += `<b> ${responseArray[i]} </b>`;
			}
		}

		let newResponse2 = newResponse.split("*").join("</br>");
		let newResponseArray = newResponse2.split(" ");
		for (let i = 0; i < newResponseArray.length; i++) {
			const nextWord = newResponseArray[i];
			delayPara(i, nextWord + " ");
		}

		setLoading(false);
		setInput("");
	};

	// Function to clear chat history
	const clearHistory = () => {
		setPrevPrompts([]);
		setRecentPrompt("");
	};

	// Context value
	const contextValue = {
		prevPrompts,
		setPrevPrompts,
		onSent,
		setRecentPrompt,
		recentPrompt,
		showResult,
		loading,
		resultData,
		input,
		setInput,
		newChat,
		clearHistory,
	};

	// Return the context provider with the context value
	return (
		<Context.Provider value={contextValue}>{props.children}</Context.Provider>
	);
};

export default ContextProvider;

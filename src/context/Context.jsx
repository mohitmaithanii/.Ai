import { useState } from "react";
import { createContext } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
	const [input, setInput] = useState("");
	const [recentPrompt, setRecentPrompt] = useState("");
	const [prevPrompts, setPrevPrompts] = useState([]);
	const [showResult, setShowResult] = useState(false);
	const [loading, setLoading] = useState(false);
	const [resultData, setResultData] = useState("");

	// Function to delay the display of each word in the result data
	const delayPara = (index, nextWord) => {
		setTimeout(() => {
			setResultData((prev) => prev + nextWord);
		}, 75 * index);
	};

	// Function to reset the chat
	const newChat = () => {
		setLoading(false);
		setShowResult(false);
	};

	// Function to handle sending a prompt to the chat model
	const onSent = async (prompt) => {
		setResultData("");
		// Reset the result data and set loading status to true
		setLoading(true);
		setShowResult(true);

		// Send the prompt to the chat model and get the response
		let response;
		if (prompt !== undefined) {
			response = await runChat(prompt);
			setRecentPrompt(prompt);
		} else {
			setPrevPrompts((prev) => [...prev, input]);
			setRecentPrompt(input);
			response = await runChat(input);
		}

		// Format the response by splitting it into an array and adding bold tags to every other element
		let responseArray = response.split("**");
		let newResponse = "";
		for (let i = 0; i < responseArray.length; i++) {
			if (i === 0 || i % 2 !== 1) {
				newResponse += responseArray[i];
			} else {
				newResponse += `<b> ${responseArray[i]} </b>`;
			}
		}

		// Split the formatted response into an array of words and display each word with a delay
		let newResponse2 = newResponse.split("*").join("</br>");
		let newResponseArray = newResponse2.split(" ");
		for (let i = 0; i < newResponseArray.length; i++) {
			const nextWord = newResponseArray[i];
			delayPara(i, nextWord + " ");
		}

		// Set loading status to false and reset the input
		setLoading(false);
		setInput("");
	};

	// Object containing the shared state and functions
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
	};
	return (
		<Context.Provider value={contextValue}>{props.children}</Context.Provider>
	);
};

export default ContextProvider;

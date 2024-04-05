import React, { useContext } from "react";
import { Context } from "../../context/Context";
import {
	Compass,
	Lightbulb,
	MessageSquare,
	CodeXml,
	SendHorizontal,
	ImagePlus,
	Mic,
	User,
	Sparkles,
} from "lucide-react";

const Main = () => {
	const {
		onSent,
		recentPrompt,
		showResult,
		loading,
		resultData,
		setInput,
		input,
	} = useContext(Context);

	return (
		<div className="flex flex-col max-w-sm px-4 py-6 mx-auto sm:max-w-7xl sm:px-6">
			{!showResult ? (
				<>
					<div className="max-w-xl mx-auto text-center">
						<div className="mx-auto inline-flex rounded-full bg-gray-100 px-4 py-1.5">
							<p className="text-xs font-semibold tracking-widest text-black uppercase">
								Gemini 2.0
							</p>
						</div>
						<h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
							Hello, Dev.👋
						</h2>
						<p className="mt-4 text-3xl leading-relaxed text-gray-600">
							How can I help you today?
						</p>
					</div>
					<div className="grid grid-cols-1 my-10 text-center gap-y-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 ">
						<div className="w-48 h-56 px-4 py-8 duration-500 bg-white shadow-xl rounded-2xl hover:scale-105 ">
							<span className="flex items-center justify-center w-12 h-12 mx-auto bg-gray-100 rounded-full">
								<Compass className="text-gray-700 h-7 w-7" />
							</span>
							<p className="mt-4 mb-4 text-sm text-gray-600 ">
								Suggest beautiful places to see on an upcoming road trip
							</p>
						</div>
						<div className="w-48 h-56 px-4 py-8 duration-500 bg-white shadow-xl rounded-2xl hover:scale-105 ">
							<span className="flex items-center justify-center w-12 h-12 mx-auto bg-gray-100 rounded-full">
								<Lightbulb className="text-gray-700 h-7 w-7" />
							</span>
							<p className="mt-4 mb-4 text-sm text-gray-600 ">
								Briefly summarize this concept: urban planing
							</p>
						</div>
						<div className="w-48 h-56 px-4 py-8 duration-500 bg-white shadow-xl rounded-2xl hover:scale-105">
							<span className="flex items-center justify-center w-12 h-12 mx-auto bg-gray-100 rounded-full">
								<MessageSquare className="text-gray-700 h-7 w-7" />
							</span>
							<p className="mt-4 mb-4 text-sm text-gray-600 ">
								Brainstorm bonding activities for work retreat
							</p>
						</div>
						<div className="w-48 h-56 px-4 py-8 duration-500 bg-white shadow-xl rounded-2xl hover:scale-105">
							<span className="flex items-center justify-center w-12 h-12 mx-auto bg-gray-100 rounded-full">
								<CodeXml className="text-gray-700 h-7 w-7" />
							</span>
							<p className="mt-4 mb-4 text-sm text-gray-600 ">
								Tell me about React js and React native
							</p>
						</div>
					</div>
				</>
			) : (
				<div className="">
					<div className="flex items-center gap-4 mb-4">
						<span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
							<User />
						</span>
						<p className="py-2 text-sm font-semibold ">{recentPrompt}</p>
					</div>
					<div className="w-full mx-auto overflow-y-scroll bg-white shadow-2xl h-96 rounded-xl">
						<div className="flex items-center p-3">
							<div className="px-1">
								<span className="inline-block w-3 h-3 bg-red-500 rounded-full cursor-pointer sm:h-4 sm:w-4"></span>
							</div>
							<div className="px-1">
								<span className="inline-block w-3 h-3 bg-yellow-400 rounded-full cursor-pointer sm:h-4 sm:w-4"></span>
							</div>
							<div className="px-1">
								<span className="inline-block w-3 h-3 bg-green-500 rounded-full cursor-pointer sm:h-4 sm:w-4"></span>
							</div>
						</div>
						<p
							className="px-4 text-sm leading-8"
							dangerouslySetInnerHTML={{ __html: resultData }}
						></p>
					</div>
				</div>
			)}

			{/* Input */}
			<div className="w-full py-2 mx-auto xl:mt-24">
				<div className="flex items-center justify-center gap-4 px-4 py-4 bg-white rounded-full shadow-xl md:flex-row md:justify-between">
					<input
						onChange={(e) => setInput(e.target.value)}
						value={input}
						type="text"
						placeholder="Enter a prompt here"
						className="w-full px-2 text-sm text-gray-800 bg-transparent outline-none sm:py-2 sm:text-base"
					/>
					<div className="flex gap-2 sm:gap-4">
						<ImagePlus className="w-5 h-5" />
						<Mic className="w-5 h-5" />
						{input ? (
							<SendHorizontal className="w-5 h-5" onClick={() => onSent()} />
						) : null}
					</div>
				</div>
				<p className="mt-4 text-xs text-center text-gray-600">
					Gemini may display inaccurate info, including about people, so
					double-check its responses. Your privacy and Gemini Apps
				</p>
			</div>
		</div>
	);
};

export default Main;

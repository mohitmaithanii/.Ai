import React from "react";
import {
	Compass,
	Lightbulb,
	MessageSquare,
	CodeXml,
	SendHorizontal,
	ImagePlus,
	Mic,
} from "lucide-react";

const Main = () => {
	return (
		<div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
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
			<div className="grid grid-cols-1 mt-12 text-center gap-y-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 ">
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

			{/* Input */}
			<div className="w-full py-2 mx-auto md:mt-24">
				<div className="flex items-center justify-center gap-4 px-4 py-4 bg-white rounded-full shadow-xl md:flex-row md:justify-between">
					<input
						type="text"
						placeholder="Enter a prompt here"
						className="w-full px-2 py-2 text-base text-gray-800 bg-transparent outline-none"
					/>
					<div className="flex gap-4">
						<ImagePlus />
						<Mic />
						<SendHorizontal />
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

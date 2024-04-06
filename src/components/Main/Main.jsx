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
	Github,
	Linkedin,
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
		<div className=" w-full h-screen bg-gray-100">
			<div className="mx-auto max-w-7xl lg:px-8">
				<div className="flex flex-col justify-center px-6 py-6 lg:px-6">
					{/* nav */}
					<div className="inline-flex items-center justify-between">
						<span className=" text-2xl font-bold">.Ai🚀</span>
						<div className="flex items-center justify-center gap-4">
							<a href="https://github.com/mohitmaithanii/">
								<span className="flex items-center justify-center w-8 h-8 bg-black rounded-full hover:bg-gray-200 hover:duration-500 text-white hover:text-black">
									<Github className="w-5 h-5" />
								</span>
							</a>
							<a href="https://www.linkedin.com/in/mohitmaithanii/">
								<span className="flex items-center justify-center w-8 h-8 bg-black rounded-full hover:bg-gray-200 hover:duration-500 text-white hover:text-black">
									<Linkedin className="w-5 h-5" />
								</span>
							</a>
						</div>
					</div>
					{!showResult ? (
						<div className="">
							{/* title */}
							<h1 className="mt-6 max-w-4xl text-4xl sm:text-7xl font-bold tracking-tight text-black lg:text-8xl">
								Hello, <span className="text-gray-400">Dev</span>.
							</h1>
							<p className="mt-4 max-w-3xl text-xl text-gray-700 sm:text-4xl lg:text-5xl">
								How can I help you today ?
							</p>

							{/* Cards */}
							<div className="xl:mt-28 mt-6 flex items-center justify-center lg:justify-start mb-4 ">
								<div className="grid grid-cols-1 text-center gap-y-2 sm:gap-y-2 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4  ">
									<div className="lg:w-48 lg:h-48 px-6 py-8 duration-500 bg-white shadow-xl rounded-2xl hover:scale-105 cursor-pointer  h-14 sm:h-28  flex">
										<div className="flex justify-between gap-4 items-center text-start lg:flex-col lg:text-center ">
											<span>
												<Compass className="text-purple-400 sm:h-10 sm:w-10 " />
											</span>
											<p className="mt-4 mb-4 sm:text-sm text-gray-600 text-xs font-semibold">
												Beautiful places to see on an upcoming trip
											</p>
										</div>
									</div>
									<div className="lg:w-48 lg:h-48 px-4 py-8 duration-500 bg-white shadow-xl rounded-2xl hover:scale-105 cursor-pointer  h-14  flex sm:h-28  ">
										<div className="flex justify-between gap-4 items-center text-start lg:flex-col lg:text-center ">
											<span>
												<Lightbulb className="text-orange-400 sm:h-10 sm:w-10 " />
											</span>
											<p className="mt-4 mb-4 sm:text-sm font-semibold text-gray-600 text-xs">
												Briefly summarize this concept: urban planing
											</p>
										</div>
									</div>
									<div className="lg:w-48 lg:h-48 px-4 py-8 duration-500 bg-white shadow-xl rounded-2xl hover:scale-105 cursor-pointer  h-14  flex sm:h-28">
										<div className="flex justify-between gap-4 items-center text-start lg:flex-col lg:text-center ">
											<span>
												<MessageSquare className="text-yellow-400 sm:h-10 sm:w-10 " />
											</span>
											<p className="mt-4 mb-4 sm:text-sm text-gray-600 text-xs font-semibold">
												Brainstorm bonding activities for work retreat
											</p>
										</div>
									</div>
									<div className="lg:w-48 lg:h-48 px-4 py-8 duration-500 bg-white shadow-xl rounded-2xl hover:scale-105 cursor-pointer  h-14  flex  sm:h-28 ">
										<div className="flex justify-between gap-4 items-center text-start lg:flex-col lg:text-center ">
											<span>
												<CodeXml className="text-green-400 sm:h-10 sm:w-10 " />
											</span>
											<p className="mt-4 mb-4 sm:text-sm text-gray-600 text-xs font-semibold">
												Tell me about React js and React native
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					) : (
						<div className="flex items-start flex-col">
							<div className="flex items-center gap-4 mt-4 mb-4">
								<span className="flex items-center justify-center w-8 h-8 bg-white rounded-full text-black ">
									<User className="w-5 h-5" />
								</span>
								<p className="py-2 text-sm font-semibold ">{recentPrompt}</p>
							</div>
							<div className="w-full mx-auto overflow-y-scroll bg-white shadow-2xl h-[350px] rounded-xl no-scrollbar px-2 sm:h-[350px] lg:h-[330px] xl:h-[430px] py-4 ">
								<div className="flex items-center px-3">
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
								{loading ? (
									<div className=" px-4 w-3/4 animate-pulse flex space-x-4">
										<div className="flex-1 space-y-3 py-1">
											<div className="h-3 bg-gray-300 rounded"></div>
											<div className="space-y-3">
												<div className="grid grid-cols-3 gap-4">
													<div className="h-3 bg-gray-300 rounded col-span-2"></div>
													<div className="h-3 bg-gray-300 rounded col-span-3"></div>
													<div className="h-3 bg-gray-300 rounded col-span-4"></div>
												</div>
											</div>
										</div>
									</div>
								) : (
									<p
										className="px-4 leading-6 sm:leading-8 text-xs sm:text-sm"
										dangerouslySetInnerHTML={{ __html: resultData }}
									></p>
								)}
							</div>
						</div>
					)}
					{/* Input */}
					<div className="w-full  mx-auto mt-4 ">
						<div className="flex items-center justify-center gap-4 px-4 py-3 lg:py-4 bg-white rounded-full shadow-xl md:flex-row md:justify-between">
							<input
								onChange={(e) => setInput(e.target.value)}
								value={input}
								type="text"
								placeholder="Enter a prompt here"
								className="w-full px-2 text-sm text-gray-800 bg-transparent outline-none sm:py-2 sm:text-base"
							/>
							<div className="flex gap-2 sm:gap-4 justify-center items-center">
								<span className="hidden sm:flex  gap-2 sm:gap-4 justify-center items-center">
									<ImagePlus className="w-5 h-5 sm:w-6 sm:h-6" />
									<Mic className="w-5 h-5 sm:w-6 sm:h-6" />
								</span>
								{input ? (
									<span className="flex items-center justify-center w-7 sm:w-9 sm:h-9 h-7 bg-black rounded-full  text-white ">
										<SendHorizontal
											className="sm:w-5 sm:h-5 w-4 h-4"
											onClick={() => onSent()}
										/>
									</span>
								) : null}
							</div>
						</div>
						<p className="mt-3 text-xs text-center text-gray-600">
							<span className="font-bold">.Ai</span> can make mistakes. Consider
							checking important information.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;

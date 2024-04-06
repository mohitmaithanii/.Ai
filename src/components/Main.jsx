import React, { useContext } from "react";
import { Context } from "../context/Context";
import { User, Github, Linkedin } from "lucide-react";
import Card from "../components/Card";
import Input from "../components/Input";

const Main = () => {
	const { recentPrompt, showResult, loading, resultData } = useContext(Context);

	return (
		<div className=" w-full h-screen bg-gray-100">
			<div className="mx-auto max-w-7xl lg:px-8">
				<div className="flex flex-col justify-center px-6  lg:px-16">
					{/* nav */}
					<div className="flex items-center justify-between py-4 ">
						<span className=" text-xl sm:text-2xl font-bold cursor-pointer">
							.Ai🚀
						</span>
						<div className="flex items-center justify-center gap-3">
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

							{/* Card */}
							<Card />
						</div>
					) : (
						/* Output Screen */
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

								{/* Loading Animations */}
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
					<Input />
				</div>
			</div>
		</div>
	);
};

export default Main;

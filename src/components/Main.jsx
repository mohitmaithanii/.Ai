import { useContext } from "react";
import { Context } from "../context/Context";
import { User, Github, Linkedin } from "lucide-react";
import Card from "../components/Card";
import Input from "../components/Input";

const Main = () => {
	const { recentPrompt, showResult, loading, resultData } = useContext(Context);

	return (
		<div className="w-full h-screen bg-gray-100 ">
			<div className="mx-auto max-w-7xl lg:px-8">
				<div className="flex flex-col justify-center px-6 lg:px-16">
					{/* nav */}
					<div className="flex items-center justify-between py-4 ">
						<span className="text-xl font-bold cursor-pointer sm:text-2xl">
							.Ai🚀
						</span>
						<div className="flex items-center justify-center gap-3">
							<a href="https://github.com/mohitmaithanii/" target="_blank">
								<span className="flex items-center justify-center w-8 h-8 text-white bg-black rounded-full hover:bg-gray-200 hover:duration-500 hover:text-black">
									<Github className="w-5 h-5" />
								</span>
							</a>
							<a
								href="https://www.linkedin.com/in/mohitmaithanii/"
								target="_blank"
							>
								<span className="flex items-center justify-center w-8 h-8 text-white bg-black rounded-full hover:bg-gray-200 hover:duration-500 hover:text-black">
									<Linkedin className="w-5 h-5" />
								</span>
							</a>
						</div>
					</div>
					{!showResult ? (
						<div className="">
							{/* title */}
							<h1 className="max-w-4xl mt-6 text-4xl font-bold tracking-tight text-black sm:text-7xl lg:text-8xl">
								Hello, <span className="text-gray-400">Dev</span>.
							</h1>
							<p className="max-w-3xl mt-4 text-xl text-gray-700 sm:text-4xl lg:text-5xl">
								How can I help you today ?
							</p>

							{/* Card */}
							<Card />
						</div>
					) : (
						/* Output Screen */
						<div className="flex flex-col items-start">
							<div className="flex items-center gap-4 mt-4 mb-4">
								<span className="flex items-center justify-center w-8 h-8 text-black bg-white rounded-full ">
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
									<div className="flex w-3/4 px-4 space-x-4 animate-pulse">
										<div className="flex-1 py-1 space-y-3">
											<div className="h-3 bg-gray-300 rounded"></div>
											<div className="space-y-3">
												<div className="grid grid-cols-3 gap-4">
													<div className="h-3 col-span-2 bg-gray-300 rounded"></div>
													<div className="h-3 col-span-3 bg-gray-300 rounded"></div>
													<div className="h-3 col-span-4 bg-gray-300 rounded"></div>
												</div>
											</div>
										</div>
									</div>
								) : (
									<p
										className="px-4 text-xs leading-6 sm:leading-8 sm:text-sm"
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

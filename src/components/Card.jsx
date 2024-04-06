import React from "react";
import { Compass, Lightbulb, MessageSquare, CodeXml } from "lucide-react";

const Card = () => {
	return (
		<>
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
		</>
	);
};

export default Card;

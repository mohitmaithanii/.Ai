import { Compass, Lightbulb, MessageSquare, CodeXml } from "lucide-react";

const Card = () => {
	return (
		<>
			<div className="flex items-center justify-center mt-6 mb-4 xl:mt-28 lg:justify-start ">
				<div className="grid grid-cols-1 text-center gap-y-2 sm:gap-y-2 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 ">
					<div className="flex px-6 py-8 duration-500 bg-white shadow-xl cursor-pointer lg:w-48 lg:h-48 rounded-2xl hover:scale-105 h-14 sm:h-28">
						<div className="flex items-center justify-between gap-4 text-start lg:flex-col lg:text-center ">
							<span>
								<Compass className="text-purple-400 sm:h-10 sm:w-10 " />
							</span>
							<p className="mt-4 mb-4 text-xs font-semibold text-gray-600 sm:text-sm">
								Beautiful places to see on an upcoming trip
							</p>
						</div>
					</div>
					<div className="flex px-4 py-8 duration-500 bg-white shadow-xl cursor-pointer lg:w-48 lg:h-48 rounded-2xl hover:scale-105 h-14 sm:h-28 ">
						<div className="flex items-center justify-between gap-4 text-start lg:flex-col lg:text-center ">
							<span>
								<Lightbulb className="text-orange-400 sm:h-10 sm:w-10 " />
							</span>
							<p className="mt-4 mb-4 text-xs font-semibold text-gray-600 sm:text-sm">
								Briefly summarize this concept: urban planing
							</p>
						</div>
					</div>
					<div className="flex px-4 py-8 duration-500 bg-white shadow-xl cursor-pointer lg:w-48 lg:h-48 rounded-2xl hover:scale-105 h-14 sm:h-28">
						<div className="flex items-center justify-between gap-4 text-start lg:flex-col lg:text-center ">
							<span>
								<MessageSquare className="text-yellow-400 sm:h-10 sm:w-10 " />
							</span>
							<p className="mt-4 mb-4 text-xs font-semibold text-gray-600 sm:text-sm">
								Brainstorm bonding activities for work retreat
							</p>
						</div>
					</div>
					<div className="flex px-4 py-8 duration-500 bg-white shadow-xl cursor-pointer lg:w-48 lg:h-48 rounded-2xl hover:scale-105 h-14 sm:h-28 ">
						<div className="flex items-center justify-between gap-4 text-start lg:flex-col lg:text-center ">
							<span>
								<CodeXml className="text-green-400 sm:h-10 sm:w-10 " />
							</span>
							<p className="mt-4 mb-4 text-xs font-semibold text-gray-600 sm:text-sm">
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

import { Compass, Lightbulb, MessageSquare, CodeXml } from "lucide-react";

// Component for rendering clickable cards with icons and text
const Card = ({ onCardClick }) => {
	// Data for each card containing icon and text
	const items = [
		{
			icon: <Compass className="text-purple-400 sm:h-10 sm:w-10" />,
			text: "Beautiful places to see on an upcoming trip",
		},
		{
			icon: <Lightbulb className="text-orange-400 sm:h-10 sm:w-10" />,
			text: "Briefly summarize this concept: urban planning",
		},
		{
			icon: <MessageSquare className="text-yellow-400 sm:h-10 sm:w-10" />,
			text: "Brainstorm bonding activities for work retreat",
		},
		{
			icon: <CodeXml className="text-green-400 sm:h-10 sm:w-10" />,
			text: "Tell me about React js and React native",
		},
	];

	return (
		<div className="flex items-center justify-center lg:justify-start">
			{/* Grid layout for displaying cards */}
			<div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
				{items.map((item, index) => (
					<div
						key={index}
						// Clickable card with border and hover effect
						className="flex px-6 py-8 duration-500 border border-[#555] cursor-pointer lg:w-48 lg:h-48 rounded-2xl hover:bg-[#222] h-14 sm:h-28"
						// Handle click event to pass text to parent component
						onClick={() => onCardClick(item.text)}
					>
						{/* Icon and text content */}
						<div className="flex items-center justify-between gap-4 text-start lg:flex-col lg:text-center">
							<span>{item.icon}</span>
							<p className="mt-4 mb-4 text-xs font-semibold text-[#999] sm:text-sm">
								{item.text}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Card;

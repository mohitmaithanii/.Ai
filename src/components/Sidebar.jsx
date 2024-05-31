import { useContext, useState } from "react";
import { Context } from "../context/Context";
import {
	Plus,
	CircleHelp,
	History,
	Settings,
	MessageSquare,
	AlignLeft,
	Trash2,
} from "lucide-react";

// Sidebar component for displaying menu options and recent prompts
export default function Sidebar() {
	// State to manage menu open/close
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	// Accessing context for managing state and functions
	const { onSent, prevPrompts, setRecentPrompt, newChat, clearHistory } =
		useContext(Context);

	// Function to toggle menu open/close
	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	// Function to handle starting a new chat
	const handleNewChat = () => {
		newChat();
	};

	// Function to load a previous prompt
	const loadPrompt = async (prompt) => {
		setRecentPrompt(prompt);
		await onSent(prompt);
	};

	return (
		<aside
			className={`hidden lg:block ${
				isMenuOpen ? "w-44" : "w-16"
			} transition-width duration-300 ease-in-out fixed top-0 h-full  `}
		>
			<div className="fixed top-0 w-44 h-full  ">
				{/* Menu section */}
				<section className="absolute top-0 left-0 flex flex-col justify-between h-screen px-4 py-5 text-[#999] bg-[#111]">
					<div className="flex flex-col gap-4">
						{/* Menu toggle and clear history button */}
						<div className="flex justify-between">
							<AlignLeft
								onClick={toggleMenu}
								className="ml-4 cursor-pointer"
								aria-label="Toggle menu"
							/>
							{isMenuOpen && (
								<Trash2
									onClick={clearHistory}
									className="cursor-pointer"
									aria-label="Delete all history"
								/>
							)}
						</div>

						{/* Button for starting a new chat */}
						<a
							onClick={handleNewChat}
							className="flex justify-center gap-2 px-3 py-3 font-semibold bg-[#333] rounded-full cursor-pointer"
							href="#"
							aria-label="New Chat"
						>
							<Plus />
							{isMenuOpen && <span className="text-[#fff]">New Chat</span>}
						</a>

						{/* Section for displaying recent prompts */}
						{isMenuOpen && (
							<div className="space-y-2">
								<span className="text-lg">Recent</span>
								{prevPrompts.map((item, index) => (
									<div
										key={index}
										onClick={() => loadPrompt(item)}
										className="flex items-center justify-start gap-2 px-3 py-2 font-semibold bg-[#333] cursor-pointer rounded-3xl"
										aria-label={`Load prompt: ${item}`}
									>
										<MessageSquare className="w-5 h-5" />
										<span className="text-xs font-semibold text-[#fff]">
											{item.length > 18 ? `${item.slice(0, 10)}...` : item}
										</span>
									</div>
								))}
							</div>
						)}
					</div>

					{/* Section for menu options */}
					<div className="flex flex-col space-y-1">
						<a
							className="flex gap-3 px-3 py-2 text-sm font-semibold cursor-pointer hover:bg-[#333] hover:rounded-3xl"
							href="#"
							aria-label="Help"
						>
							<CircleHelp className="w-5 h-5" />
							{isMenuOpen && <span>Help</span>}
						</a>

						<a
							className="flex gap-3 px-3 py-2 text-sm font-semibold cursor-pointer hover:bg-[#333] hover:rounded-3xl"
							href="#"
							aria-label="Activity"
						>
							<History className="w-5 h-5" />
							{isMenuOpen && <span>Activity</span>}
						</a>

						<a
							className="flex gap-3 px-3 py-2 text-sm font-semibold cursor-pointer hover:bg-[#333] hover:rounded-3xl"
							href="#"
							aria-label="Settings"
						>
							<Settings className="w-5 h-5" />
							{isMenuOpen && <span>Settings</span>}
						</a>
					</div>
				</section>
			</div>
		</aside>
	);
}

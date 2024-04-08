import { useContext, useState } from "react";
import { Context } from "../context/Context";
import {
	Plus,
	CircleHelp,
	History,
	Settings,
	MessageSquare,
	AlignLeft,
} from "lucide-react";

export default function Sidebar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

	// Function to load prompt and send it to server
	const loadPrompt = async (prompt) => {
		// Set recent prompt using setRecentPrompt function from Context
		setRecentPrompt(prompt);
		// Send prompt to server using onSent function from Context
		await onSent(prompt);
	};

	return (
		<aside className="hidden lg:block">
			<div className="fixed top-0 w-40 h-full ">
				<section className="absolute top-0 left-0 flex flex-col justify-between h-screen px-3 py-5 text-black bg-gray-100">
					<div className="flex flex-col gap-4">
						<AlignLeft
							onClick={() => setIsMenuOpen((prev) => !prev)}
							className="ml-4 cursor-pointer"
						/>
						<a
							onClick={() => newChat()}
							className="flex justify-center gap-2 px-3 py-3 font-semibold bg-gray-200 rounded-full"
							href="javascript:void(0)"
						>
							<Plus />
							{isMenuOpen && <span>New Chat</span>}
						</a>
						{isMenuOpen && (
							<div className="space-y-2">
								<span className="text-lg">Recent</span>
								{prevPrompts.map((item, index) => (
									<div
										key={index}
										onClick={() => loadPrompt(item)}
										className="flex items-center justify-start gap-2 px-3 py-2 font-semibold bg-gray-200 cursor-pointer rounded-3xl "
									>
										<MessageSquare className="w-5 h-5" />
										<span className="text-xs font-semibold ">
											{item.slice(0, 18)}...
										</span>
									</div>
								))}
							</div>
						)}
					</div>
					<div className="flex flex-col space-y-1">
						<a
							className="flex gap-3 px-3 py-2 text-sm font-semibold hover:bg-gray-200 hover:rounded-3xl"
							href="javascript:void(0)"
						>
							<CircleHelp className="w-5 h-5" />
							{isMenuOpen && <span>Help</span>}
						</a>

						<a
							className="flex gap-3 px-3 py-2 text-sm font-semibold hover:bg-gray-200 hover:rounded-3xl"
							href="javascript:void(0)"
						>
							<History className="w-5 h-5" />
							{isMenuOpen && <span>Activity</span>}
						</a>

						<a
							className="flex gap-3 px-3 py-2 text-sm font-semibold hover:bg-gray-200 hover:rounded-3xl"
							href="javascript:void(0)"
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

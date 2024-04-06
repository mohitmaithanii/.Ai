import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import {
	Menu,
	Plus,
	CircleHelp,
	History,
	Settings,
	MessageSquare,
} from "lucide-react";

export default function Sidebar() {
	const [extended, setExtended] = useState(false);
	const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

	const loadPrompt = async (prompt) => {
		setRecentPrompt(prompt);
		await onSent(prompt);
	};

	return (
		<aside className="inline-flex flex-col items-center justify-between min-h-screen px-2 py-8 duration-700 bg-gray-100  border-r sm:px-4">
			<nav className="flex flex-col flex-1 space-y-6 ">
				<a
					className="px-4"
					onClick={() => setExtended((prev) => !prev)}
					href="javascript:void(0)"
				>
					<Menu />
				</a>

				<a
					onClick={() => newChat()}
					className="flex justify-center gap-2 px-3 py-3 font-semibold bg-gray-100 rounded-full"
					href="javascript:void(0)"
				>
					<Plus className="w-6 h-6" />
					{extended && <span>New Chat</span>}
				</a>

				{extended && (
					<div className="space-y-2">
						<span className="text-lg">Recent</span>
						{prevPrompts.map((item, index) => (
							<div
								key={index}
								onClick={() => loadPrompt(item)}
								className="flex items-center justify-start gap-2 px-3 py-2 font-semibold bg-gray-100 cursor-pointer rounded-3xl "
							>
								<MessageSquare className="w-5 h-5" />
								<span className="text-xs font-semibold ">
									{item.slice(0, 18)}...
								</span>
							</div>
						))}
					</div>
				)}
			</nav>

			<div className="flex flex-col space-y-1">
				<a
					className="flex gap-3 px-3 py-2 text-sm font-semibold hover:bg-gray-100 hover:rounded-3xl"
					href="javascript:void(0)"
				>
					<CircleHelp className="w-5 h-5" />
					{extended && <span>Help</span>}
				</a>

				<a
					className="flex gap-3 px-3 py-2 text-sm font-semibold hover:bg-gray-100 hover:rounded-3xl"
					href="javascript:void(0)"
				>
					<History className="w-5 h-5" />
					{extended && <span>Activity</span>}
				</a>

				<a
					className="flex gap-3 px-3 py-2 text-sm font-semibold hover:bg-gray-100 hover:rounded-3xl"
					href="javascript:void(0)"
				>
					<Settings className="w-5 h-5" />
					{extended && <span>Settings</span>}
				</a>
			</div>
		</aside>
	);
}

import React, { useState } from "react";
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

	return (
		<aside className="inline-flex flex-col items-center justify-between min-h-screen px-2 py-8 duration-700 bg-white border-r sm:px-4">
			<nav className="flex flex-col flex-1 space-y-6 ">
				<a
					className="px-4"
					onClick={() => setExtended((prev) => !prev)}
					href="#"
				>
					<Menu />
				</a>

				<a
					className="flex justify-center gap-2 px-3 py-3 font-semibold bg-gray-100 rounded-full"
					href="#"
				>
					<Plus className="w-6 h-6" />
					{extended ? <span>New Chat</span> : null}
				</a>

				{extended ? (
					<div className="space-y-2">
						<span className="text-lg">Recent</span>
						<div className="flex items-center justify-start gap-2 px-3 py-2 font-semibold bg-gray-100 rounded-3xl ">
							<MessageSquare className="w-5 h-5" />
							<span className="text-xs font-semibold ">What is React...</span>
						</div>
					</div>
				) : null}
			</nav>

			<div className="flex flex-col space-y-1">
				<a
					className="flex gap-3 px-3 py-2 text-sm font-semibold hover:bg-gray-100 hover:rounded-3xl"
					href="#"
				>
					<CircleHelp className="w-5 h-5" />
					{extended ? <span>Help</span> : null}
				</a>

				<a
					className="flex gap-3 px-3 py-2 text-sm font-semibold hover:bg-gray-100 hover:rounded-3xl"
					href="#"
				>
					<History className="w-5 h-5" />
					{extended ? <span>Activity</span> : null}
				</a>

				<a
					className="flex gap-3 px-3 py-2 text-sm font-semibold hover:bg-gray-100 hover:rounded-3xl"
					href="#"
				>
					<Settings className="w-5 h-5" />
					{extended ? <span>Settings</span> : null}
				</a>
			</div>
		</aside>
	);
}

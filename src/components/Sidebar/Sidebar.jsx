import React from "react";
import { assets } from "../../assets/assets";

const Sidebar = () => {
	return (
		<div className="">
			{/* sidebar top */}
			<div className="">
				<img className="" src={assets.menu_icon} alt="" />
				<div className="">
					<img src={assets.plus_icon} alt="" />
				</div>
				<p>New Chat</p>
			</div>
			<div className="">
				<p>Recent</p>
			</div>
			<div className="">
				<img src={assets.message_icon} alt="" />
				<p>What is react...</p>
			</div>
			{/* sidebar bottom */}
			<div className="">
				<div className="">
					<img src={assets.question_icon} alt="" />
					<p>Help</p>
				</div>
				<div className="">
					<img src={assets.history_icon} alt="" />
					<p>Activity</p>
				</div>
				<div className="">
					<img src={assets.setting_icon} alt="" />
					<p>Setting</p>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;

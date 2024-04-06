import React from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

const App = () => {
	return (
		<div className="flex bg-gray-100">
			<Sidebar />
			<Main />
		</div>
	);
};

export default App;

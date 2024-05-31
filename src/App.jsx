import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<Sidebar />
			<Main />
		</Router>
	);
};

export default App;

import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import AdvancedInfo from "./components/AdvancedInfo";

function App() {
	return (
		<section className=" w-full h-[100vh] bg-[#E6EBF4] mx-auto flex justify-center items-center font-[poppins] ">
			<section className="container dashboard w-[90%] h-[90%] bg-[white] flex justify-start pt-[30px] ">
				<Sidebar />
				<Dashboard />
				<AdvancedInfo />
			</section>
		</section>
	);
}

export default App;

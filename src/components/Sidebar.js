import React from "react";
import { sideBarElements } from "../data/Sidebar.js";
import Logout from "../images/logout.png";
import Logo from "../images/logo.png";

const NavElement = ({ img, name, state }) => {
	return (
		<div className="w-full h-[40px] flex justify-start items-center mb-[15px]">
			<div className="icon w-[25px] h-[25px]  flex justify-center items-center">
				<img src={img} className="text-[#1F1E31]  text-[18px]" alt={name}></img>
			</div>

			<p
				className={`${state} ml-[5px] text[#1F1E31] text-[11px]  -mt-[2px] opacity-[0.6]`}
			>
				{name}
			</p>
		</div>
	);
};

const Sidebar = () => {
	return (
		<section className="w-[15%] h-[100%] bg-[white] pl-[40px] border-r-[2px] border-[#E6EBF4] relative">
			<header className="w-full h-auto flex justify-start items-center">
				<div className="logo rounded-[50%] w-[35px] h-[35px] bg-[#C4E2FF] flex justify-center items-center">
					<img
						src={Logo}
						alt="Logo"
						className="w-[80%] h-[80%] rounded-full ml-[4px]"
					/>
				</div>
				<p className="text-[14px] ml-[10px] font-bold text[#1F1E31]">Cuacane</p>
			</header>

			<nav className="w-full h-[400px] mt-[60px]">
				{sideBarElements.map((e, index) => {
					return (
						<NavElement
							key={index}
							name={e.name}
							img={e.img}
							state={e.state ? e.state : ""}
						/>
					);
				})}
			</nav>

			<section>
				<div className="logout absolute bottom-[20px]">
					<NavElement name="Log Out" img={Logout} />
				</div>
			</section>
		</section>
	);
};

export default Sidebar;

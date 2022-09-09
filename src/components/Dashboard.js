import React from "react";
import WeatherInfo from "./WeatherInfo";
import Profile from "../images/profile.jpg";
import Search from "../images/search.png";
import Notification from "../images/notification.png";
function TopSection() {
	return (
		<article className="top flex justify-between  items-start w-full h-[40px]">
			<article className="search w-[40%] h-[auto]  flex justify-start items-center ">
				<button className="icon w-[30px] h-[30px] flex justify-center items-center ">
					<img src={Search} className="bg-[red] " alt="Search"></img>
				</button>
				<input
					type="text"
					placeholder="Search something here..."
					className=" w-[350px] border-0 focus:outline-0 pl-[5px] h-[35px] text-[12px]"
				/>
			</article>
			<article className="user w-[80px] h-[40px] flex justify-between items-center ">
				<button className="notifications w-[26px] h-[25px]">
					<img
						src={Notification}
						className="w-full h-full rounded-full"
						alt=""
					/>
				</button>
				<div className="profile  w-[30px] h-[30px] bg-[black] rounded-full">
					<img
						src={Profile}
						className="w-full h-full  rounded-full"
						alt="profile"
					/>
				</div>
			</article>
		</article>
	);
}
const Dashboard = () => {
	return (
		<section className="w-[60%] h-[100%] px-[40px] border-r-[2px] border-[#E6EBF4] ">
			<TopSection />
			<WeatherInfo />
		</section>
	);
};

export default Dashboard;

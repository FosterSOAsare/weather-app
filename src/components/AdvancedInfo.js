import { useState } from "react";
import Left from "../images/left.png";
import Right from "../images/right.png";
import { WeekData } from "../data/WeekData";
import Inactive1 from "../images/inactive1.png";
import Inactive2 from "../images/inactive2.png";
import Active from "../images/active.png";

const TodayElement = ({ time, image, value, type }) => {
	return (
		<section className={`w-full rounded-[5px] p-[10px] h-auto ${type ? type : ""}`}>
			<div className="time text-[10px] text-center ">{time}</div>
			<div className="image w-[70%] h-[27px] mx-[auto] my-[5px] bg-[red]">
				<img src={image} alt="" className="w-full h-full" />
			</div>
			<div className="value text-[12px] text-center">{value}&#xb0;</div>
		</section>
	);
};

const WeekElements = ({ img, name, value, date }) => {
	return (
		<section className="element w-full h-[45px] flex justify-between items-center mb-[10px]">
			<div className="info w-[40%] h-full">
				<p className="text-[11px] font-bold mb-[5px]">{name}</p>
				<p className="font-regular text-[12px] opacity-[0.8]">{date}</p>
			</div>
			<div className="info w-[15%] h-full  flex justify-center items-center">
				{value}&#xb0;
			</div>
			<div className="info w-[40%] h-full   flex justify-center items-center">
				<img src={img} alt="" />
			</div>
		</section>
	);
};
const AdvancedInfo = () => {
	return (
		<section className="w-[25%] px-[20px] pt-[10px]">
			<article className="top w-full h-auto  flex justify-between items-center">
				<img src={Left} alt="" className=" hover:cursor-pointer" />
				<h3 className="text-[16px]"> This Week</h3>
				<img src={Right} alt="" className="-mt-[3px] hover:cursor-pointer" />
			</article>

			<article
				id="today"
				className="w-full h-auto mb-[10px]  mt-[30px] grid grid-cols-4 gap-[12px]"
			>
				<TodayElement time="Now" value="12" type="active" image={Active} />
				<TodayElement time="01PM" value="12" image={Inactive1} />
				<TodayElement time="02PM" value="11" image={Inactive1} />
				<TodayElement time="03PM" value="10" image={Inactive2} />
			</article>

			<section className="w-full h-[380px] mt-[20px]">
				{WeekData.map((e) => (
					<WeekElements
						name={e.name}
						key={e.name + e.value}
						date={e.date}
						value={e.value}
						img={e.img}
					/>
				))}
			</section>
		</section>
	);
};

export default AdvancedInfo;

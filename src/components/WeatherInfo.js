import React from "react";
import UV from "../images/uv.png";
import Pressure from "../images/pressure.png";
import Wind from "../images/wind.png";
import Chance from "../images/chance.png";

const WeatherElements = ({ name, desc, value, image }) => {
	return (
		<article className="w-[100%] h-[110px] rounded-[5px] bg-[#ECF3F8] p-[10px] px-[20px] flex">
			<div className="info w-full flex justify-between items-center">
				<div className="info">
					<h3 className=" mb-[10px]">{name}</h3>
					<p className="text-[12px] opacity-[0.6] mb-[10px] text-cabin">
						{desc}
					</p>
					<p className="value">{value}</p>
				</div>
				<div className="image w-[40%] h-[90px] flex items-center justify-center">
					<img src={image} alt={name} />
				</div>
			</div>
		</article>
	);
};
const WeatherInfo = () => {
	return (
		<>
			<section className="w-full h-[230px] bg-dashboardImg bg-center bg-cover bg-no-repeat rounded-[10px] p-[20px] flex justify-center gap-[20px] mt-[20px] items-center">
				<article className="w-[50%]  h-[100%]"></article>
				<article className="w-[50%] bg-[#6C7786] h-[100%] rounded-[10px] p-[18px]">
					<h3 className="text-white text-[18px] font-bold">Temperature</h3>
				</article>
			</section>
			<section className="w-full h-[auto] grid grid-cols-2 gap-[15px] mt-[20px] ">
				<WeatherElements
					name="Wind"
					desc="Total wind speed"
					value="24km/h"
					image={Wind}
				/>
				<WeatherElements
					name="Rain Chance"
					desc="Total rain chance"
					value="90%"
					image={Chance}
				/>
				<WeatherElements
					name="Pressure"
					desc="Total pressure"
					value="720 hPa"
					image={Pressure}
				/>
				<WeatherElements
					name="UV Index"
					desc="Total UV Index"
					value="2"
					image={UV}
				/>
			</section>
		</>
	);
};

export default WeatherInfo;

import React from "react";
import UV from "../images/uv.png";
import Pressure from "../images/pressure.png";
import Wind from "../images/wind.png";
import Chance from "../images/chance.png";
import Hpa from "../images/hpa.png";
import Drop from "../images/drop.png";
import Speed from "../images/speed.png";
import Graph from "../images/graph.png";
import Location from "../images/location.png";

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

const ValueElement = ({ img, value, name }) => {
	return (
		<article className="flex justify-start items-center">
			<div className="image">
				<img src={img} alt={name} />
			</div>
			<div className="value text-white">
				<p className="text-[10px] ml-[5px]">{value}</p>
			</div>
		</article>
	);
};
const InformationElement = ({ time, value }) => {
	return (
		<div className="text-center w-[20%]  h-auto text-white ">
			<p className="time text-[10px] mb-[5px]">{time}</p>
			<p className="value text-[10px]">{value}</p>
		</div>
	);
};
const WeatherInfo = () => {
	return (
		<>
			<section className="w-full h-[230px] bg-dashboardImg bg-center bg-cover bg-no-repeat rounded-[10px] p-[20px] flex justify-center gap-[20px] mt-[20px] items-center">
				<article className="w-[50%]  h-[100%] ">
					<div className="top w-full h-[40px] flex justify-between items-center mb-[10px]">
						<div className="location  flex justify-start text-[14px] text-white items-center">
							<div className="icon w-[20px] h-[25px] mr-[5px]  ">
								<img src={Location} alt="" />
							</div>
							Gotham
						</div>
						<div className="time text-[12px] text-white">Today 00:32PM</div>
					</div>
					<div className="desc w-full h-auto  mb-[10px] pt-[20px] text-center text-white">
						<h1 className="text-[72px] leading-[30px] h-auto mb-[20px] w-[80px] mx-[auto] relative">
							12
							<span className="absolute -right-[5px] -top-[20px] text-[28px]">
								&#xb0;
							</span>
						</h1>
						<p className="text-[14px]">Mostly Clear</p>
					</div>
					<div className="values w-full h-[40px] flex justify-between items-center bg-[#1D2F44] px-[20px]">
						<ValueElement name="pressure" value="720hpa" img={Hpa} />
						<ValueElement name="chance" value="32%" img={Drop} />
						<ValueElement name="wind" value="12km/h" img={Speed} />
					</div>
				</article>
				<article className="w-[50%] bg-[#646c77cc] h-[100%] rounded-[10px] pt-[18px]">
					<h3 className="text-white text-[15px] font-regular px-[18px]">
						Temperature
					</h3>
					<article id="graph" className="w-full mt-[5px] h-[80px] px-[10px]">
						<img src={Graph} alt="Graph" className="w-full h-full" />
					</article>
					<article
						id="information"
						className="w-full h-auto  flex justify-between items-center gap-[10px] mt-[10px]  px-[18px]"
					>
						<InformationElement time="Morning" value="15" />
						<InformationElement time="Afternoon" value="14" />
						<InformationElement time="Evening" value="16" />
						<InformationElement time="Night" value="12" />
					</article>
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

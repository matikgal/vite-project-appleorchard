import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import '../App.css'

export default function HomePageSection2() {
	const [activeTab, setActiveTab] = useState<'weekdays' | 'weekends'>('weekdays')

	const handleTabChange = (tab: 'weekdays' | 'weekends') => {
		setActiveTab(tab)
	}

	return (
		<div className="bg-[#FDF1DE] p-5">
			<div className="flex flex-col text-center md:text-left justify-center items-center gap-y-5 container mx-auto md:flex-row md:justify-between">
				<div className="flex flex-col justify-between md:py-5 gap-5">
					<h2 className="text-[#B42E02] font-medium">choose when you're coming</h2>
					<div className="hidden md:flex gap-x-5">
						<h3
							className={`text-2xl font-medium cursor-pointer ${
								activeTab === 'weekdays' ? 'underline underline-offset-8 text-black' : 'text-gray-500'
							}`}
							onClick={() => handleTabChange('weekdays')}>
							Weekdays
						</h3>
						<h3
							className={`text-2xl font-medium cursor-pointer ${
								activeTab === 'weekends' ? 'underline underline-offset-8 text-black' : 'text-gray-500'
							}`}
							onClick={() => handleTabChange('weekends')}>
							Weekends & Holidays
						</h3>
					</div>
				</div>
				<a href="" className="bg-[#362400] text-[#FDF1DE] w-[200px] px-6 py-3 rounded-full uppercase font-medium">
					all attraction
				</a>
				<a href="" className="bg-[#CF9A29] text-[#FDF1DE] w-full py-4 rounded-full uppercase font-medium md:hidden">
					weekdays
				</a>
			</div>

			<div className="mt-10 container mx-auto">
				<Swiper
					spaceBetween={30}
					navigation={true}
					speed={1000}
					modules={[Navigation]}
					loop={true}
					breakpoints={{
						640: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: activeTab === 'weekdays' ? 3 : 4,
						},
						1280: {
							slidesPerView: activeTab === 'weekdays' ? 4 : 5,
						},
					}}
					className="mySwiper my-auto">
					{activeTab === 'weekdays' ? (
						<>
							<SwiperSlide className="w-[200px] my-auto">
								<div className="relative flex justify-center items-center h-[270px] w-9/12 bg-[url('images/slider1.jpg')] bg-cover bg-center mx-auto rounded-2xl border-2 border-[#CF9A29] group overflow-hidden">
									<div className="absolute inset-0 bg-black opacity-30  w-full mx-auto group-hover:opacity-0 transition-opacity duration-300"></div>
									<p className="absolute uppercase text-[#FDF1DE] text-2xl z-10 group-hover:opacity-0 transition-opacity duration-300">
										bubble barn
									</p>

									<div className="absolute inset-0 bg-[#FDF1DE]   flex flex-col justify-center   p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-5 text-[#16472D]">
										<div>
											<h3 className="text-xl font-bold">Weekdays</h3>
											<p className="text-sm">Mon - Fri</p>
											<p className="text-sm">8 am - 5:30 pm</p>
											<p className="text-sm ">Free Mon - Fri</p>
										</div>
										<div>
											<h3 className="text-xl font-bold">Weekends</h3>
											<p className="text-sm">Sat - Sun & Holiday Mondays</p>
											<p className="text-sm">9 am - 5:30 pm</p>
											<p className="text-sm ">Included with General Admission</p>
										</div>
									</div>
								</div>
							</SwiperSlide>

							<SwiperSlide className="w-[200px] my-auto">
								<div className="relative flex justify-center items-center h-[270px] w-9/12 bg-[url('images/slider2.jpg')] bg-cover bg-center mx-auto rounded-2xl border-2 border-[#CF9A29] group overflow-hidden">
									<div className="absolute inset-0 bg-black opacity-30  w-full mx-auto group-hover:opacity-0 transition-opacity duration-300"></div>
									<p className="absolute uppercase text-[#FDF1DE] text-2xl z-10 group-hover:opacity-0 transition-opacity duration-300">
										bubble barn
									</p>

									<div className="absolute inset-0 bg-[#FDF1DE]   flex flex-col justify-center   p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-5 text-[#16472D]">
										<div>
											<h3 className="text-xl font-bold">Weekdays</h3>
											<p className="text-sm">Mon - Fri</p>
											<p className="text-sm">8 am - 5:30 pm</p>
											<p className="text-sm ">Free Mon - Fri</p>
										</div>
										<div>
											<h3 className="text-xl font-bold">Weekends</h3>
											<p className="text-sm">Sat - Sun & Holiday Mondays</p>
											<p className="text-sm">9 am - 5:30 pm</p>
											<p className="text-sm ">Included with General Admission</p>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="w-[200px] my-auto">
								<div className="relative flex justify-center items-center h-[270px] w-9/12 bg-[url('images/slider3.jpg')] bg-cover bg-center mx-auto rounded-2xl border-2 border-[#CF9A29] group overflow-hidden">
									<div className="absolute inset-0 bg-black opacity-30  w-full mx-auto group-hover:opacity-0 transition-opacity duration-300"></div>
									<p className="absolute uppercase text-[#FDF1DE] text-2xl z-10 group-hover:opacity-0 transition-opacity duration-300">
										bubble barn
									</p>

									<div className="absolute inset-0 bg-[#FDF1DE]   flex flex-col justify-center   p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-5 text-[#16472D]">
										<div>
											<h3 className="text-xl font-bold">Weekdays</h3>
											<p className="text-sm">Mon - Fri</p>
											<p className="text-sm">8 am - 5:30 pm</p>
											<p className="text-sm ">Free Mon - Fri</p>
										</div>
										<div>
											<h3 className="text-xl font-bold">Weekends</h3>
											<p className="text-sm">Sat - Sun & Holiday Mondays</p>
											<p className="text-sm">9 am - 5:30 pm</p>
											<p className="text-sm ">Included with General Admission</p>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="w-[200px] my-auto">
								<div className="relative flex justify-center items-center h-[270px] w-9/12 bg-[url('images/slider4.jpg')] bg-cover bg-center mx-auto rounded-2xl border-2 border-[#CF9A29] group overflow-hidden">
									<div className="absolute inset-0 bg-black opacity-30  w-full mx-auto group-hover:opacity-0 transition-opacity duration-300"></div>
									<p className="absolute uppercase text-[#FDF1DE] text-2xl z-10 group-hover:opacity-0 transition-opacity duration-300">
										bubble barn
									</p>

									<div className="absolute inset-0 bg-[#FDF1DE]   flex flex-col justify-center   p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-5 text-[#16472D]">
										<div>
											<h3 className="text-xl font-bold">Weekdays</h3>
											<p className="text-sm">Mon - Fri</p>
											<p className="text-sm">8 am - 5:30 pm</p>
											<p className="text-sm ">Free Mon - Fri</p>
										</div>
										<div>
											<h3 className="text-xl font-bold">Weekends</h3>
											<p className="text-sm">Sat - Sun & Holiday Mondays</p>
											<p className="text-sm">9 am - 5:30 pm</p>
											<p className="text-sm ">Included with General Admission</p>
										</div>
									</div>
								</div>
							</SwiperSlide>
						</>
					) : (
						<>
							<SwiperSlide className="w-[200px] my-auto">
								<div className="relative flex justify-center items-center h-[270px] w-9/12 bg-[url('images/slider1.jpg')] bg-cover bg-center mx-auto rounded-2xl border-2 border-[#CF9A29] group overflow-hidden">
									<div className="absolute inset-0 bg-black opacity-30  w-full mx-auto group-hover:opacity-0 transition-opacity duration-300"></div>
									<p className="absolute uppercase text-[#FDF1DE] text-2xl z-10 group-hover:opacity-0 transition-opacity duration-300">
										bubble barn
									</p>

									<div className="absolute inset-0 bg-[#FDF1DE]   flex flex-col justify-center   p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-5 text-[#16472D]">
										<div>
											<h3 className="text-xl font-bold">Weekdays</h3>
											<p className="text-sm">Mon - Fri</p>
											<p className="text-sm">8 am - 5:30 pm</p>
											<p className="text-sm ">Free Mon - Fri</p>
										</div>
										<div>
											<h3 className="text-xl font-bold">Weekends</h3>
											<p className="text-sm">Sat - Sun & Holiday Mondays</p>
											<p className="text-sm">9 am - 5:30 pm</p>
											<p className="text-sm ">Included with General Admission</p>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="w-[200px] my-auto">
								<div className="relative flex justify-center items-center h-[270px] w-9/12 bg-[url('images/slider2.jpg')] bg-cover bg-center mx-auto rounded-2xl  border-2 border-[#CF9A29] group overflow-hidden">
									<div className="absolute inset-0 bg-black opacity-30  w-full mx-auto group-hover:opacity-0 transition-opacity duration-300"></div>
									<p className="absolute uppercase text-[#FDF1DE] text-2xl z-10 group-hover:opacity-0 transition-opacity duration-300">
										bubble barn
									</p>

									<div className="absolute inset-0 bg-[#FDF1DE]   flex flex-col justify-center   p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-5 text-[#16472D]">
										<div>
											<h3 className="text-xl font-bold">Weekdays</h3>
											<p className="text-sm">Mon - Fri</p>
											<p className="text-sm">8 am - 5:30 pm</p>
											<p className="text-sm ">Free Mon - Fri</p>
										</div>
										<div>
											<h3 className="text-xl font-bold">Weekends</h3>
											<p className="text-sm">Sat - Sun & Holiday Mondays</p>
											<p className="text-sm">9 am - 5:30 pm</p>
											<p className="text-sm ">Included with General Admission</p>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="w-[200px] my-auto">
								<div className="relative flex justify-center items-center h-[270px] w-9/12 bg-[url('images/slider3.jpg')] bg-cover bg-center mx-auto rounded-2xl border-2 border-[#CF9A29] group overflow-hidden">
									<div className="absolute inset-0 bg-black opacity-30 w-full mx-auto group-hover:opacity-0 transition-opacity duration-300"></div>
									<p className="absolute uppercase text-[#FDF1DE] text-2xl z-10 group-hover:opacity-0 transition-opacity duration-300">
										bubble barn
									</p>

									<div className="absolute inset-0 bg-[#FDF1DE]   flex flex-col justify-center   p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-5 text-[#16472D]">
										<div>
											<h3 className="text-xl font-bold">Weekdays</h3>
											<p className="text-sm">Mon - Fri</p>
											<p className="text-sm">8 am - 5:30 pm</p>
											<p className="text-sm ">Free Mon - Fri</p>
										</div>
										<div>
											<h3 className="text-xl font-bold">Weekends</h3>
											<p className="text-sm">Sat - Sun & Holiday Mondays</p>
											<p className="text-sm">9 am - 5:30 pm</p>
											<p className="text-sm ">Included with General Admission</p>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="w-[200px] my-auto">
								<div className="relative flex justify-center items-center h-[270px] w-9/12 bg-[url('images/slider4.jpg')] bg-cover bg-center mx-auto rounded-2xl border-2 border-[#CF9A29] group overflow-hidden">
									<div className="absolute inset-0 bg-black opacity-30  w-full mx-auto group-hover:opacity-0 transition-opacity duration-300"></div>
									<p className="absolute uppercase text-[#FDF1DE] text-2xl z-10 group-hover:opacity-0 transition-opacity duration-300">
										bubble barn
									</p>

									<div className="absolute inset-0 bg-[#FDF1DE]   flex flex-col justify-center   p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-5 text-[#16472D]">
										<div>
											<h3 className="text-xl font-bold">Weekdays</h3>
											<p className="text-sm">Mon - Fri</p>
											<p className="text-sm">8 am - 5:30 pm</p>
											<p className="text-sm ">Free Mon - Fri</p>
										</div>
										<div>
											<h3 className="text-xl font-bold">Weekends</h3>
											<p className="text-sm">Sat - Sun & Holiday Mondays</p>
											<p className="text-sm">9 am - 5:30 pm</p>
											<p className="text-sm ">Included with General Admission</p>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="w-[200px] my-auto">
								<div className="relative flex justify-center items-center h-[270px] w-9/12 bg-[url('images/slider5.jpg')] bg-cover bg-center mx-auto rounded-2xl border-2 border-[#CF9A29] group  overflow-hidden">
									<div className="absolute inset-0 bg-black opacity-30  w-full mx-auto group-hover:opacity-0 transition-opacity duration-300"></div>
									<p className="absolute uppercase text-[#FDF1DE] text-2xl z-10 group-hover:opacity-0 transition-opacity duration-300">
										bubble barn
									</p>

									<div className="absolute inset-0 bg-[#FDF1DE]   flex flex-col justify-center   p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-5 text-[#16472D]">
										<div>
											<h3 className="text-xl font-bold">Weekdays</h3>
											<p className="text-sm">Mon - Fri</p>
											<p className="text-sm">8 am - 5:30 pm</p>
											<p className="text-sm ">Free Mon - Fri</p>
										</div>
										<div>
											<h3 className="text-xl font-bold">Weekends</h3>
											<p className="text-sm">Sat - Sun & Holiday Mondays</p>
											<p className="text-sm">9 am - 5:30 pm</p>
											<p className="text-sm ">Included with General Admission</p>
										</div>
									</div>
								</div>
							</SwiperSlide>
						</>
					)}
				</Swiper>
			</div>
		</div>
	)
}

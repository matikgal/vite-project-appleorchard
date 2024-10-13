import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'
import '../App.css'
import { useEffect, useRef, useState } from 'react'
import SwiperCore from 'swiper'

export default function HomePageSection4() {
	const [progress, setProgress] = useState(0)
	const swiperRef = useRef<SwiperCore | null>(null)

	const apples = [
		{
			name: 'Fuji',
			image: 'images/apple1.webp',
			description: 'Snacking & Cooking',
			ripening: 'Approx. Ripening Mid October',
		},
		{
			name: 'Gala',
			image: 'images/apple1.webp',
			description: 'Sweet & Crisp',
			ripening: 'Approx. Ripening Early September',
		},
		{
			name: 'Granny Smith',
			image: 'images/apple1.webp',
			description: 'Tart & Baking',
			ripening: 'Approx. Ripening Late October',
		},
		{
			name: 'Honeycrisp',
			image: 'images/apple1.webp',
			description: 'Juicy & Crisp',
			ripening: 'Approx. Ripening Mid September',
		},
		{
			name: 'Pink Lady',
			image: 'images/apple1.webp',
			description: 'Sweet-Tart & Snacking',
			ripening: 'Approx. Ripening Late November',
		},
	]

	useEffect(() => {
		const interval = setInterval(() => {
			if (swiperRef.current) {
				const swiper = swiperRef.current
				setProgress((swiper.realIndex / (swiper.slides.length - 1)) * 100)
			}
		}, 50)

		return () => clearInterval(interval)
	}, [])

	return (
		<div>
			<div className="bg-[url('images/cider-house-large.jpg')] h-[50vh] w-full bg-center bg-no-repeat bg-cover"></div>
			<div className="">
				<div className="flex flex-col md:flex-row items-center bg-[#CF9A29]">
					<h2 className="text-center md:text-left py-5 lg:py-0 lg:pr-2 text-4xl font-bold text-[#FDF1DE] transform md:-rotate-90 whitespace-nowrap md:w-[150px] flex justify-center">
						currently picking
					</h2>
					<div className="bg-[#FDF1DE] w-full md:w-[80%] h-[8080%] lg:h-[full] p-2 flex-1 pt-10">
						<Swiper
							onSwiper={swiper => (swiperRef.current = swiper)}
							spaceBetween={20}
							autoplay={{
								delay: 3000,
								disableOnInteraction: false,
							}}
							loop={true}
							modules={[Autoplay]}
							slidesPerView={1.2}
							breakpoints={{
								640: {
									slidesPerView: 2.2,
								},
								1024: {
									slidesPerView: 4.2,
								},
							}}
							centeredSlides={false}
							className="w-full h-full flex justify-center items-center pb-10">
							{apples.map((apple, index) => (
								<SwiperSlide key={index} className="w-full h-full flex justify-center items-center relative">
									<div className="flex flex-col items-center border-[1px] border-[#CF9A29] rounded-3xl w-full sm:h-[450px] h-[450px] lg:min-h-[400px] lg:h-max text-center p-5 transition-all duration-300 transform hover:opacity-0">
										<img src={apple.image} alt={apple.name} className="" />
										<h2 className="uppercase text-4xl font-bold md:text-2xl">{apple.name}</h2>
										<h3 className="uppercase font-bold text-[#CF9A29] pt-5 md:text-[12px]">{apple.description}</h3>
										<p className="text-sm">{apple.ripening}</p>
									</div>

									<div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center p-14 opacity-0 transition-opacity duration-300 hover:opacity-100 bg-[#FDF1DE] border-[1px] border-[#CF9A29] rounded-3xl leading-7 gap-5">
										<h2 className="text-2xl font-bold ">{apple.name}</h2>
										<p>
											A beautiful bright red apple that is very crisp and flavorful. It has a rich tart flavor and
											pinkish flesh that is great for snacking and a favorite apple for baking pies or making sauce.
										</p>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
						<div className="mt-15 w-[90%] h-2 bg-[#CF9A29] rounded-full overflow-hidden mx-auto ">
							<div className="h-full bg-[#B42E02] transition-all duration-200" style={{ width: `${progress}%` }}></div>
						</div>
						<div className="flex flex-col justify-center items-center gap-5 p-5 lg:flex-row lg:justify-around lg:py-10">
							<a
								href=""
								className="bg-[#B42E02] py-3 px-6 rounded-full font-medium text-[#FDF1DE] uppercase md:text-xl text-nowrap">
								apple alerts
							</a>
							<p className="text-center font-medium px-5 md:text-lg">
								<i>sign up </i>
								to be notified when your favorite apples & attractions become available
							</p>
							<a
								href=""
								className="bg-[#16472D] py-3 px-6 rounded-full font-medium text-[#FDF1DE] uppercase md:text-xl text-nowrap">
								view all
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

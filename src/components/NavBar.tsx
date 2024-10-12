import { useState } from 'react'
import { motion } from 'framer-motion'

export default function NavBar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<div className="w-full xl:text-lg font-medium text-sm">
			<div className="bg-[#CF9A29] overflow-hidden whitespace-nowrap">
				<motion.div
					className="flex lg:container mx-auto py-1 text-[#FDF1DE] space-x-12"
					animate={{ x: ['0%', '-100%'] }}
					transition={{
						repeat: Infinity,
						duration: 15,
						ease: 'linear',
					}}>
					{Array(12)
						.fill(null)
						.map((_, idx) => (
							<p key={idx} className="inline-block">
								{idx % 2 === 0 ? 'Open for the season!' : 'Store & Bakery Open daily 9am-5:30pm'}
							</p>
						))}
				</motion.div>
			</div>

			<div className="bg-[#B42E02] flex items-center justify-center relative">
				{/* mobile */}
				<div className="py-3 lg:py-5">
					<img src="./images/jonamac-logo.svg" alt="" className="xl:hidden size-52 !h-max md:size-72" />
				</div>

				{/* mobile menu bars */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="31"
					height="24"
					viewBox="0 0 31 24"
					fill="none"
					className="absolute right-7 size-8 xl:hidden cursor-pointer"
					onClick={toggleMenu}>
					<g clipPath="url(#clip0_43_12)">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M0 1.71429C0 0.767143 0.770694 0 1.72222 0H29.2778C30.2293 0 31 0.767143 31 1.71429C31 2.66143 30.2293 3.42857 29.2778 3.42857H1.72222C0.770694 3.42857 0 2.66143 0 1.71429ZM0 12C0 11.0529 0.770694 10.2857 1.72222 10.2857H18.9444C19.896 10.2857 20.6667 11.0529 20.6667 12C20.6667 12.9471 19.896 13.7143 18.9444 13.7143H1.72222C0.770694 13.7143 0 12.9471 0 12ZM0 22.2857C0 21.3386 0.770694 20.5714 1.72222 20.5714H10.3333C11.2849 20.5714 12.0556 21.3386 12.0556 22.2857C12.0556 23.2329 11.2849 24 10.3333 24H1.72222C0.770694 24 0 23.2329 0 22.2857Z"
							fill="#FDF1DE"></path>
					</g>
					<defs>
						<clipPath id="clip0_43_12">
							<rect width="31" height="24" fill="white"></rect>
						</clipPath>
					</defs>
				</svg>

				{/* pc navbar */}
				<div className="hidden container xl:flex justify-around items-center text-[#FDF1DE]  mx-auto uppercase text-lg h-28">
					<a
						href="/OurOrchard"
						className="underline-offset-8 hover:underline decoration-[#CF9A29] decoration-2 group h-28 text-center self-center pt-10">
						orchard
						<div className="hidden bg-[#FDF1DE] !max-w-full w-full h-[32rem] top-[110px] left-0 absolute  !mx-0  group-hover:flex flex-row  bg-no-repeat bg-cover bg-center z-10  p-8  justify-center">
							<div className="!container flex flex-row ">
								<div className=" text-start flex flex-col items-start">
									<img
										src="images/navbar1.jpg"
										alt=""
										className="bg-no-repeat bg-cover bg-center h-3/4 rounded-[12%] w-[85%] mb-10"
									/>
									<a href="/OurOrchard" className="text-red-700 text-3xl font-bold">
										Our Orchard
									</a>
								</div>
								<div className=" text-start">
									<img
										src="images/navbar2.jpg"
										alt=""
										className="bg-no-repeat bg-cover bg-center h-3/4 rounded-[12%] mb-10 w-[85%] "
									/>
									<a href="/OurOrchard" className="text-red-700 text-3xl font-bold">
										Apples Varietes
									</a>
								</div>
								<div className=" text-start">
									<img
										src="images/navbar3.jpg"
										alt=""
										className="bg-no-repeat bg-cover bg-center h-3/4 rounded-[12%] mb-10 w-[85%] "
									/>
									<a href="/OurOrchard" className="text-red-700 text-3xl font-bold">
										Apple picking
									</a>
								</div>
							</div>
						</div>
					</a>

					<a href="" className="underline-offset-8 hover:underline decoration-[#CF9A29] decoration-2">
						cider house
					</a>
					<a href="" className="underline-offset-8 hover:underline decoration-[#CF9A29] decoration-2">
						attraction
					</a>
					<a href="/Home">
						<img src="./images/jonamac-logo.svg" alt="" className="pb-4" />
					</a>
					<a href="" className="underline-offset-8 hover:underline decoration-[#CF9A29] decoration-2">
						store & bakery
					</a>
					<a href="" className="underline-offset-8 hover:underline decoration-[#CF9A29] decoration-2">
						events
					</a>
					<a href="" className="underline-offset-8 hover:underline decoration-[#CF9A29] decoration-2">
						visit us
					</a>
				</div>

				<img src="./images/ticket-icon.svg" alt="" className="hidden xl:block absolute right-10 cursor-pointer" />
			</div>

			{/* menu mobile */}
			{isMenuOpen && (
				<div className="fixed top-0 left-0 w-full h-full bg-[#FDF1DE] text-[#B42E02]  z-50   xl:hidden">
					<button onClick={toggleMenu} className="absolute top-10 left-10 text-3xl text-[#B42E02] focus:outline-none">
						&times;
					</button>

					<img
						src="./images/mobile-logo.png"
						alt=""
						className="xl:hidden !h-max size-72 absolute top-0 left-1/2 transform -translate-x-1/2 mt-5"
					/>

					<nav className="flex flex-col text-left space-y-6 text-2xl uppercase px-10 mt-32">
						<a href="" onClick={toggleMenu}>
							Orchard
						</a>
						<a href="" onClick={toggleMenu}>
							Cider House
						</a>
						<a href="" onClick={toggleMenu}>
							Attraction
						</a>
						<a href="" onClick={toggleMenu}>
							Store & Bakery
						</a>
						<a href="" onClick={toggleMenu}>
							Events
						</a>
						<a href="" onClick={toggleMenu}>
							Visit Us
						</a>
					</nav>
				</div>
			)}
		</div>
	)
}

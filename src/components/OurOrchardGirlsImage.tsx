export default function OurOrchardGirlsImage() {
	return (
		<div className="bg-[url('public/images/girlsoncampfire.jpg')] w-full h-full  flex flex-row justify-center bg-cover bg-no-repeat bg-center py-36 px-12   ">
			<div className=" py-12 px-36 bg-[#CF9A29] rounded-[12%] flex flex-col items-center container max-w-[600px] text-center text-nowrap">
				<img src="public/images/compfire.webp" alt="campfire image" className=" scale-75 mb-6 min-w-14" />
				<h2 className="mb-16 font-bold text-3xl :text-5xl  text-[#FDF1DE]">Campfire Spots</h2>

				<a
					href=""
					className=" text-[#CF9A29] font-bold tracking-widest bg-[#FDF1DE]  px-6 md:px-12 py-6 rounded-full flex flex-row gap-x-12 hover:bg-[#CF9A29] hover:text-[#FDF1DE] border-2 border-[#FDF1DE] duration-300">
					RESERVE A SPOT ka
				</a>
			</div>
		</div>
	)
}

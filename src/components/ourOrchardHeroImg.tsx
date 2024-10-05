export default function OurOrchardHeroImage() {
	return (
		<div className="md:flex md:flex-row">
			<div className="hidden bg-[#732200] text-[#FDF1DE] lg:basis-1/3 2xl:basis-1/2 !p-8 container lg:end-0.5  lg:grid lg:grid-cols-1 lg:justify-items-end">
				{' '}
				<h2 className="text-left text-wrap text-6xl font-bold w-[20vh]  mt-28 lg:mr-[8vh] xl:mr-[17vh]">OUR ORCHARD</h2>
				<p className="mt-14 font-bold text-wrap w-[20vh] lg:mr-[8vh] xl:mr-[17vh] text-2xl">
					THE JONAMAC LEGACY FOUR GENERATIONS & GROWING
				</p>
				<div className="mt-20">
					<a
						href=""
						className="bg-[#B42E02] py-4 px-8 w-max uppercase font-bold text-xl rounded-full lg:mr-[8vh] xl:mr-[17vh]">
						All attraction
					</a>
				</div>
			</div>
			<div className="relative bg-[url('images/ourOrchardHeroImg.jpg')] w-full h-[70vh] bg-no-repeat bg-cover bg-center shadow-[inset_20vh_-90px_350px_40px_#46464699] p-4 lg:basis-2/3">
				<div className="absolute text-[#FDF1DE] lg:hidden">
					<h2 className="text-left text-wrap text-6xl font-bold max-w-[10vh]  mt-28">OUR ORCHARD</h2>
					<p className="mt-14 font-bold text-wrap max-w-80 text-2xl">THE JONAMAC LEGACY FOUR GENERATIONS & GROWING</p>
					<div className="mt-28">
						<a href="" className="bg-[#B42E02] py-4 px-8 w-max uppercase font-bold text-xl rounded-full">
							All attraction
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

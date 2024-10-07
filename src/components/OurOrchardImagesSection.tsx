interface Item {
	year: number
	imageSrc: string
	text: string
}

const items: Item[] = [
	{
		year: 2024,
		imageSrc: '/images/OurOrchardImg1.jpg',
		text: 'Stan & Katie Johnson started Johnsons Orchard (10 acres) by planting the first apple trees here and opening a small roadside stand.',
	},
	{
		year: 2023,
		imageSrc: '/images/OurOrchardImg2.jpg',
		text: 'Gerald (Jerry) & Mary Lynn McArtor purchased the farm from the Johnsons and decided to change the name to “Jonamac Orchard” to honor both families. The McArtos purchased an additional 5 acres, so the farm was now 15 acres. Jerry also decided to start making donuts, caramel apples, and grow pumpkins to sell along with the apples. ',
	},
	{
		year: 2022,
		imageSrc: '/images/OurOrchardImg3.jpg',
		text: 'The McArtor’s purchased more land (25 acres) and planted more trees. Kevin (Jerry and Mary Lynns son) married Denice. Also this year, Jerry & Mary Lynns daughter Amy (and her Husband Dan) welcomed the 3rd generation of the family, Jenna! Born in September. ',
	},
	{
		year: 2021,
		imageSrc: '/images/OurOrchardImg3.jpg',
		text: '',
	},
	{
		year: 2021,
		imageSrc: '/images/OurOrchardImg2.jpg',
		text: 'Lorem sadasasdd assadsdsadasasdda ssadsdsadasasddass   purchased more land (25 acres) and planted more trees. Kevin (Jerry and Mary Lynns son) married Denice. Also this year, Jerry & Mary Lynns daughter Amy (and her Husband Dan) welcomed the 3rd generation of the family, Jenna! Born in September. adsdsadasasddassadsdsadasasdda ssadsd',
	},
]

export default function OurOrchardImagesSection() {
	return (
		<div className="flex flex-col gap-4 bg-[#FDF1DE] items-center px-8">
			{items.map((item, index) => (
				<div
					key={index}
					className={`flex flex-col-reverse justify-center items-center gap-x-24  ${
						index % 2 === 1 ? 'lg:flex-row' : 'lg:flex-row-reverse'
					}`}>
					<div className="basis-1/2 max-w-screen-lg ">
						<img src={item.imageSrc} alt={`Image for year ${item.year}`} className=" w-full h-[400px]  object-cover" />
						<div className="bg-[#CF9A29] text-center  ">
							<p className="text-wrap p-6 text-xl font-bold text-[#F5E3C1]">{item.text}</p>
						</div>
					</div>
					<div
						key={index}
						className={`text-lg font-bold basis-1/2 flex flex-col self-center lg:self-start  ${
							index % 2 === 1 ? '' : 'lg:flex-row-reverse'
						} `}>
						<h2 className="text-[#CF9A29] text-6xl py-12 ">{item.year}</h2>
					</div>
				</div>
			))}
		</div>
	)
}

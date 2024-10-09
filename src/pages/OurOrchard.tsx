import OurOrchardHeroImage from '../components/ourOrchardHeroImg'
import NavBar from '../components/NavBar'
import OurOrchardHeroParagraph from '../components/ourOrchardParagraph'
import OurOrchardSectionTitle from '../components/OurOrchardSectionTitle'
import OurOrchardImagesSection from '../components/OurOrchardImagesSection'
import OurOrchardGirlsImage from '../components/OurOrchardGirlsImage'
export default function OurOrchard() {
	return (
		<>
			<NavBar />
			<OurOrchardHeroImage />
			<OurOrchardHeroParagraph />
			<OurOrchardSectionTitle />
			<OurOrchardImagesSection />
			<OurOrchardGirlsImage />
		</>
	)
}


import { PiCouchFill } from "react-icons/pi"
import { MdLuggage } from "react-icons/md"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaMap } from "react-icons/fa"
import { RiClapperboardFill } from 'react-icons/ri'
import { GiSpeedBoat, GiMicrophone, GiRing } from 'react-icons/gi'

const servicesData = [
	{
		id: 1,
		icon: <FaMap />,
		eKey: 'itenaries',
		title: "Tailor-Made Itineraries",
		text: "Our expert team will work closely with you to design personalized itineraries that cater to your specific preferences and travel goals. Whether you're seeking a cultutral immersion. adventure-packed exploration, or a relaxing beach retreat, we have the perfect itinerary to fulfill your desires."
	},
	{
		id: 2,
		icon: <PiCouchFill />,
		eKey: 'accomadations',
		title: 'Accommodation Arrangements',
		text: "With our extensive network of partner hotels, resorts, and private villas, we can guarantee comfortable and luxurious accommodations that suit all budgets. From botique hotels in bustling city center to seerene	seaside retreats, we have options to satisfy every traveler's taste."
	},
	{
		id: 3,
		icon: <MdLuggage />,
		eKey: 'transportation',
		title: "Transportation Logistics",
		text: "Leave the hassle of transportation arrangements to us. We offer reliable and convenient transfer services, including airport pick-ups and drop-off, private chaufers, and interciry transfers. Travel in style and comfort while we take care of logistics."
	},
	{
		id: 4,
		icon: <BsFillPersonLinesFill />,
		eKey: 'interpreters',
		title: "Experienced Tour Guides and Interpreters",
		text: "Our team of knowledgeable and multilingual tour guides will enhance your travel experience by providing insightful information about Greece's rich history, culture and landscape. They will ensure you don't miss on any hidden gems and make a truly memorable journey."
	},
	{
		id: 5,
		icon: <GiRing />,
		eKey: 'weddings',
		title: "Weddings",
		text: "Our team at The Greek Life Inc. ensures that your wedding in Greeceis nothing short of magical.Withpicturesque venues, stunning décor,	personalized themes, and impeccable attention to detail, we creat anunforgettable experiencefor you andyour loved ones.From assiSting withlegal requirements to cooréinating theperfect ceremony, our weddingplanners handle every aspect withexpertise and creativity.Say 'I do' amidst the breathtaking beauty ofGreece and let us make your dreamwedding a reality."
	},
	{
		id: 6,
		icon: <RiClapperboardFill />,
		eKey: 'movie',
		title: "Movie Shoots",
		text: "Lights, camera, action! The Greek LifeInc.provides exceptional services formovie shoots in GregæUithbreathtaking landscapeSfh toricsites, and world- class prodü6tionfacilities, Greece offers a éiverserange shooting locations.ur teamtakes Care locationscouting, casting, crew management, and logistics, ensuring a seamless production experience.rom independent films to commercial shoots, we have the expertise to bring your vision to life.Lights, camera, and let Greece be the backdrop for your next cinematic masterpiece."
	},
	{
		id: 7,
		icon: <GiSpeedBoat />,
		eKey: 'waterSports',
		title: "Yatch Rentals & Water Sports",
		text: "Escape to the azure waters of Greece with our yacht rental and water sports services.Whether you desire a luxurious yacht for a private getaway or a thrilling water sports adventure, we have a wide selectiqn of yachts and equipment to suitybu preferences.Sail along the stunnin coastlines, snorkel in crystal- clear waters, or engage in adrenaline - pumping activities like jet skiing and parasailing, Our experienced crew ensures your safety and comfort, while you indulge in the ultimate aquatic experience amidst the beauty Of Greece."
	},
	{
		id: 8,
		icon: <GiMicrophone />,
		eKey: 'fineDining',
		title: "Fine Dining & Entertainment Bookings",
		text: "Indulge your senses with floe fineswdining and entertainment options inGreece 9m Michelin-starred restaurants to authentic local eateries,	our team curates a gastronomic journey tailored to your tastes.Savor delectable Mediterranean cuisine,	paired with exquisite wines, in	stunning locations overlooking the Aegean Sea.Additiohåfly, we arrangeentertainment shows featuring traditional reek music, dance performanpes, and live bands to enhance our Greek Immerse yourself in the vibrant cultural scene and enjoy unforgettable evenings of fine dining and entertainment."
	}

]

export default servicesData;
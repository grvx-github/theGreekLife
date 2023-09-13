
import { PiCouchFill } from "react-icons/pi"
import { MdLuggage } from "react-icons/md"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaMap } from "react-icons/fa"
import { RiClapperboardFill } from 'react-icons/ri'
import { GiSpeedBoat, GiMicrophone, GiRing } from 'react-icons/gi'
import { BiCalendarStar } from 'react-icons/bi'

const servicesData = [
	{
		id: 1,
		icon: <FaMap />,
		eKey: 'itenaries',
		title: "Tailor-Made Itineraries",
		text: "Our expert team will work closely with you to design personalized itineraries that cater to your specific preferences and travel goals. Whether you're seeking cultural immersion. adventure-packed exploration, or a relaxing beach retreat, we have the perfect itinerary to fulfill your desires."
	},
	{
		id: 2,
		icon: <PiCouchFill />,
		eKey: 'accomadations',
		title: 'Accommodation Arrangements',
		text: "With our extensive network of partner hotels, resorts, and private villas, we can guarantee comfortable and luxurious accommodations that suit all budgets. From botique hotels in bustling city centres to serene seaside retreats, we have options to satisfy every traveler's taste."
	},
	{
		id: 3,
		icon: <MdLuggage />,
		eKey: 'transportation',
		title: "Transportation Logistics",
		text: "Leave the hassle of transportation arrangements to us. We offer reliable and convenient transfer services, including airport pick-ups and drop-offs, private chauffeurs, and intercity transfers. Travel in style and comfort while we take care of logistics."
	},
	{
		id: 4,
		icon: <BsFillPersonLinesFill />,
		eKey: 'interpreters',
		title: "Experienced Tour Guides and Translators",
		text: "Our team of knowledgeable and multilingual tour guides will enhance your travel experience by providing insightful information about Greece's rich history, culture and landscape. They will ensure you don't miss out on hidden gems and make for a truly memorable journey."
	},
	{
		id: 5,
		icon: <GiRing />,
		eKey: 'weddings',
		title: "Weddings",
		text: "Our team at The Greek Life Inc. will ensure that your wedding in Greeceis nothing short of magical. With picturesque venues, stunning décor,	personalized themes, and an impeccable attention to detail, we create an unforgettable experience for you and your loved ones. From assisting with legal requirements to coordinating the perfect ceremony, our wedding planners handle every aspect with expertise and creativity.Say 'I do' amidst the breathtaking beauty of Greece, and let us make your dream wedding a reality."
	},
	{
		id: 6,
		icon: <RiClapperboardFill />,
		eKey: 'movie',
		title: "Movie Shoots",
		text: "Lights, camera, action! The Greek LifeInc. provides exceptional services for movie shoots in Gree with breathtaking landscapes, historic sites, and world-class production facilities, Greece offers a diverse range of shooting locations. Our teamtakes Care location scouting, casting, crew management, and logistics, ensuring a seamless production experience. From independent films to commercial shoots, we have the expertise to bring your vision to life. Let Greece be the backdrop for your next cinematic masterpiece."
	},
	{
		id: 7,
		icon: <GiSpeedBoat />,
		eKey: 'waterSports',
		title: "Yacht Rentals & Water Sports",
		text: "Escape to the azure waters of Greece with our yacht rentals and water sports services. Whether you desire a luxurious yacht for a private getaway or a thrilling water sports adventure, we have a wide selection of yachts and equipment to suit your preferences. Sail along the stunning coastlines, snorkel in crystal-clear waters, or engage in adrenaline-pumping activities like jet skiing and parasailing. Our experienced crew ensures your safety and comfort, while you indulge in the ultimate aquatic experience amidst the beauty Of Greece."
	},
	{
		id: 8,
		icon: <BiCalendarStar />,
		eKey: 'corporateEvents',
		title: "Corporate Events",
		text: "Make a lasting impression with corporate events organized by The Greek Life Inc. Whether it's a conference, product launch, team-building retreat, or a gala dinner, our professional event planners ensure every detail is meticulously executed. From venue selection to audiovisual arrangements, we create an atmosphere that reflects your brand and captivates your guests. Our comprehensive services also include transportation, accommodation, and entertainment arrangements, ensuring a seamless and successful corporate event in the breathtaking landscapes of Greece."
	}

]

export default servicesData;
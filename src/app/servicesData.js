
import { PiCouchFill } from "react-icons/pi"
import { MdLuggage } from "react-icons/md"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaMap } from "react-icons/fa"

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
	}

]

export default servicesData;
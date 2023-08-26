
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
		text: "Our expert team will work closely with you to design personalized itineraries that cater to your specific preferences and travel goals. Whether you're "
	},
	{
		id: 2,
		icon: <PiCouchFill />,
		eKey: 'accomadations',
		title: 'Accommodation Arrangements',
		text: "With our extensive network of partner hotels, resorts, and private villas, we can guarantee comfortable and luxurious accommodations that suit all "
	},
	{
		id: 3,
		icon: <MdLuggage />,
		eKey: 'transportation',
		title: "Transportation Logistics",
		text: "Leave the hassle of transportation arrangements to us. We offer reliable and convenient transfer services, including airport pick-ups and drop"
	},
	{
		id: 4,
		icon: <BsFillPersonLinesFill />,
		eKey: 'interpreters',
		title: "Experienced Tour Guides and Interpreters",
		text: "Our team of knowledgeable and multilingual tour guides will enhance your travel experience by providing insightful information about Greece's "
	}

]

export default servicesData;
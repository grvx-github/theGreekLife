import React from 'react'
import { Button } from 'react-bootstrap'
import { BsArrowDown } from "react-icons/bs"
import { useState } from 'react'


const ShowMoreBtn = () => {

	const [clicked, setClicked] = useState(false)

	function handleClick() {
			setClicked(!clicked)
	}

	return (
		<Button onClick={handleClick} className={clicked? "lBtn clicked" : "lBtn"}>{clicked ? 'show more' : 'show less'}  < BsArrowDown /> </Button>
	)
}

export default ShowMoreBtn
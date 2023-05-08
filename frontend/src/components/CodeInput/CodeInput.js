import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowSize } from "../../Hook/windowSize";
import {
	faSquareCaretUp,
	faSquareCaretDown,
} from "@fortawesome/free-solid-svg-icons";
const CodeInput = ({ testInput, setTestInput, setToggled }) => {
	const [toggleInputBar, setToggleInputBar] = useState(true);
	const {width} = useWindowSize();
	useEffect(() => {
		if(width<768){
			setToggleInputBar(false);
		}else{
			setToggleInputBar(true);
		}
	}, [width])
	
	return (
		<div
			className={`border border-secondary d-flex flex-column justify-content-end w-50 w-md-100 bg-light h-64 ${toggleInputBar ? "h-md-16" : "h-md-33"
			}`}>
			<button
				className="d-flex m-0 align-items-center bg-secondary pt-2 pe-2 rounded text-base justify-content-center w-16"
				onClick={() => {
					setToggled(!toggleInputBar);
					setToggleInputBar(!toggleInputBar);
				}}>
				stdin{" "}
				<FontAwesomeIcon
					icon={toggleInputBar ? faSquareCaretUp : faSquareCaretDown}
					size="xs"
					className="ms-1"
				/>
			</button>
			<textarea
				name=""
				id=""
				className={`p-2 border-0 bg-white ${
					toggleInputBar ? "d-none" : ""
				}`}
				cols="30"
				rows="15"
				placeholder=""
				value={testInput}
				onChange={(e) => setTestInput(e.target.value)}></textarea>
		</div>
	);
};

export default CodeInput;

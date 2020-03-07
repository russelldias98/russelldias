import React from "react";

export default function H1(props) {
	return (
		<h1
			{...props}
			style={{
				fontFamily: "Inter",
				fontStyle: "normal",
				fontWeight: "900",
				fontSize: "46px",
				lineHeight: "64px",
				color: "white",
				whiteSpace: "pre",
				margin: 0,
				marginBottom: "40px"
			}}
		>
			{props.text}
		</h1>
	);
}

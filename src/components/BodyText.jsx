import React from "react";

export default function BodyText({ text }) {
	return (
		<p
			style={{
				fontFamily: "Inter",
				fontWeight: "300",
				fontSize: "18px",
				lineHeight: "32px",
				color: "white",
				whiteSpace: "pre",
				margin: 0,
				marginBottom: "40px"
			}}
		>
			{text}
		</p>
	);
}

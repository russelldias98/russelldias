import React from "react";
import { Button, Col } from "antd";

export default function ButtonCustom(props) {
	return (
		<Button
			{...props}
			style={{
				width: "163px",
				height: "60px",
				fontFamily: "Inter",
				fontStyle: "normal",
				fontWeight: "bold",
				fontSize: "18px",
				lineHeight: "34px",
				textAlign: "center",
				color: "black"
			}}
		>
			{props.text}
		</Button>
	);
}

import React from "react";
import Link from "next/link";
import { Typography } from "antd";
import "../../styles.less";

const { Text } = Typography;

export default function Header() {
	return (
		<div className='headerContainer'>
			<Link href='/'>
				<div
					style={{
						color: "white",
						fontWeight: 600,
						cursor: "pointer",
						fontSize: "26px"
					}}
				>
					RD
				</div>
			</Link>
		</div>
	);
}

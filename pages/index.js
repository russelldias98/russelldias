import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Form, Select, InputNumber, DatePicker, Switch, Slider } from "antd";
import "../styles.less";
import Header from "../src/components/Header";
import H1 from "../src/components/H1";
import BodyText from "../src/components/BodyText";
import ButtonCustom from "../src/components/ButtonCustom";

export default function index() {
	const [client, SetClient] = useState(false);

	useEffect(() => {
		SetClient(true);
	}, []);

	return (
		<>
			<Head>
				<title>Russell Dias</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<div className='container'>
				<Header />
				<div className='contentContainer'>
					<H1 text={`I'm Russell Dias\nA UI/UX Designer and\na Frontend Engineer`} />
					<BodyText text={`My work ranges from creating Landing Page\ndesigns all the way to product design\nand engineering it.`} />
					<ButtonCustom onClick={() => client && window.open("https://drive.google.com/drive/folders/13ZYw0i-Y7z11Cxnt6UoeGvr9sFllLrWz", "_blank")} text='View Portfolio' />
				</div>
				<div className='footerContainer'>© 2020. Russell Dias. All rights reserved</div>
			</div>
		</>
	);
}

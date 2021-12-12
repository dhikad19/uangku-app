import React from 'react';
import { Container, Heading, Row, Text, Section } from '../../globalStyles';
import { PhoneColumn } from './PhoneSectionStyle';

const Phone = () => {
	const data = [
		{
			img: './images/phone1.jpg',
			title: 'Murah Dan Mudah',
			description: 'Mengirim uang, transfer dan mengganti tidak pernah semudah ini',
		},
		{
			img: './images/phone2.jpg',
			title: 'Mengirim Dari Manapun',
			description: 'Tersebar lebih dari 200 negara dan mendapat jangkauan dari seluruh dunia',
		},
		{
			img: './images/phone3.jpg',
			title: 'Konversi Uang Dengan 54 Mata Uang',
			description:
				'Mencakup lebih dari 50 mata uang dari seluruh dunia dan dapat diakses dimanapun',
		},
	];

	return (
		<Section white id="mobile" padding="60px 0">
			<Container>
				<Row align="center" justify="center" wrap="wrap">
					<Heading mb="1rem" inverse>
						Tersedia di Android/IOS
					</Heading>
					<Row justify="center" wrap="wrap">
						{data.map((el, index) => (
							<PhoneColumn align="center" key={index}>
								<img width="80%" src={el.img} alt="" />
								<Text as="h5" align="center" inverse bold fontSize="1.3rem">
									{el.title}
								</Text>
								<Text
									align="center"
									width="70%"
									inverse
									mb="auto"
									fontSize="0.9rem"
								>
									{el.description}
								</Text>
							</PhoneColumn>
						))}
					</Row>
				</Row>
			</Container>
		</Section>
	);
};

export default Phone;

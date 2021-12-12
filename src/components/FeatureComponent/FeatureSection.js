import React from 'react';
import { Container, Heading, Row, Section, Text } from '../../globalStyles';
import { BsShieldLockFill, BsFillLightningFill } from 'react-icons/bs';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { IoIosOptions } from 'react-icons/io';
import { HiCubeTransparent } from 'react-icons/hi';
import { Feature } from './FeatureSectionStyles';
const FeatureSection = () => {
	const Icon = (IconComponent) => {
		return <IconComponent size={70} style={{ fill: 'rgb(29, 29, 29)' }}></IconComponent>;
	};

	const features = [
		{
			icon: Icon(BsShieldLockFill),
			title: 'Terlindungi',
			description:
				"Sistem kami sudah di desain untuk menjangkau transaksi yang aman dan rahasia. Rahasia kostumer kami sangatlah penting bagi kami",
		},
		{
			icon: Icon(BiSupport),
			title: '24/7 Pelayanan',
			description:
				'Admin kami tersedia dalam 34 jam/ 7 hari. Dengan pelayanan nonstop, hubungi kami melalui telepon atau email',
		},
		{
			icon: Icon(BsFillLightningFill),
			title: 'Cepat',
			description:
				'Kami terkoneksi oleh dengan 100 bank di seluruh dunia untuk mencakup seluruh kustomer kami di seluruh dunia',
		},
		{
			icon: Icon(BiDollar),
			title: 'Biaya Rendah',
			description:
				'Kami menawarkan anda diskon setiap minggunya, dengan penawaran yang sangat menguntungkan bagi anda',
		},
		{
			icon: Icon(IoIosOptions),
			title: 'Mudah',
			description:
				'Designer kami sangat berpengalaman dalam UI/UX sehingga aplikasi ini sangat mudah digunakan oleh siapa saja',
		},
		{
			icon: Icon(HiCubeTransparent),
			title: 'Transparansi',
			description:
				'Kita menerapkan transparansi bagi kustomer kami yang sudah berlangganan, catatan akan langsung terlihat pada opsi',
		},
	];

	return (
		<Section id="services" padding="60px 0">
			<Container>
				<Row wrap="wrap" justify="center" gap="1.4rem">
					<Heading mb="1rem" inverse>
						Fitur Menakjubkan
					</Heading>
					{features.map((el, index) => (
						<Feature key={index} md={3} sm={10}>
							{el.icon}

							<Text inverse weight="700" size="1.3rem">
								{el.title}
							</Text>
							<Text mb="auto" size="1rem">
								{el.description}
							</Text>
						</Feature>
					))}
				</Row>
			</Container>
		</Section>
	);
};

export default FeatureSection;

import React, { useState, useEffect } from 'react';
import {
	RightColumn,
	ConversionList,
	Features,
	GetStarted,
	Title,
	Video,
	LeftColumn,
	HeroSection,
	Text
} from './HeroStyles';
import CurrencyInput from './CurrencyInput';
import { Button, Container, Row } from '../../globalStyles';
import { AiOutlineRise } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { motion } from 'framer-motion';
import rates from '../../data/rates.json';
import { Link } from 'react-router-dom'

const Hero = () => {
	const [sellCur, setSellCur] = useState('IDR');
	const [buyCur, setBuyCur] = useState('USD');
	const [rate, setRate] = useState(1);

	const [sellAmount, setSellAmount] = useState(9999);
	const [buyAmount, setBuyAmount] = useState(9999);

	const roundNumber = (number, decimal) => {
		if (decimal) {
			return (
				Math.round((number + Number.EPSILON) * Math.pow(10, decimal)) /
				Math.pow(10, decimal)
			);
		}
		return Math.round((number + Number.EPSILON) * 100) / 100;
	};

	useEffect(() => {
		const curRate = rates.conversion_rates[buyCur] / rates.conversion_rates[sellCur];
		setBuyAmount(roundNumber((sellAmount - sellAmount * 0.0066) * curRate));

		setRate(roundNumber(curRate, 5));
	}, [buyCur, sellCur, sellAmount, rate]);

	return (
		<HeroSection id="hero">
			<Container>
				<Row justify="center">
					<LeftColumn width="50%">
						<Title bold textColor>
						<span>Uangku</span> <br/>
                            Penukaran Uang Terpercaya
						</Title>
						<Text fontSize="0.9" space>
						Transfer uang jadi lebih mudah dengan <span>Uangku</span>.
                            dipadukan dengan layanan yang cepat dan dengan potongan yang rendah,
                            menjadikan <span>Uangku</span> menjadi aplikasi penukaran uang terbaik.
						</Text>
						<Video
							width="70%"
							src="/videos/Hero.mp4"
							type="video/mp4"
							autoPlay
							muted
							loop
						></Video>
						<Features>
							<div>
								<img className="lock" src="./images/Lock.svg" alt="21" />
								<Text bold>Teraman dan Terpercaya</Text>
								<a href="localhost:3000">Cari tau disini!</a>
							</div>
							<div>
								<img className="reviews" src="./images/Reviews.svg" alt="21" />
								<Text bold>Jutaan pelanggan dari seluruh dunia</Text>
								<a href="localhost:3000">Lihat pendapat mereka!</a>
							</div>
						</Features>
					</LeftColumn>

					<RightColumn align="end" md={5} sm={10}>
						<div>
							<Row>
								<CurrencyInput
									sell={true}
									setValue={setSellAmount}
									value={sellAmount}
									currency={sellCur}
									setCurrency={setSellCur}
								/>
							</Row>

							<ConversionList>
								<li>
									<span>
										{roundNumber(sellAmount * 0.0016)} {sellCur}
									</span>
									<span>Bank Debit (ACH)</span>
								</li>
								<li>
									<span>
										{roundNumber(sellAmount * 0.005)} {sellCur}
									</span>
									<span>Fee</span>
								</li>
								<li className="total">
									<span>
										{roundNumber(sellAmount * 0.0066)} {sellCur}
									</span>
									<span>Total</span>
									<div>-</div>
								</li>
								<li>
									<span>
										{sellAmount - roundNumber(sellAmount * 0.0066)} {sellCur}
									</span>
									<span>convert</span>
									<div>=</div>
								</li>
								<li>
									<span className="rate">
										{rate}
										<motion.span
											initial={{ opacity: '0' }}
											transition={{
												yoyo: Infinity,
												duration: 2,
											}}
											animate={{ opacity: 1 }}
										>
											<IconContext.Provider
												value={{ size: '1.7rem', color: 'black' }}
											>
												<AiOutlineRise />
											</IconContext.Provider>
										</motion.span>
									</span>
									<span>Guaranteed rate (24 hrs)</span>
									<div>x</div>
								</li>
							</ConversionList>
							<Row>
								<CurrencyInput
									currency={buyCur}
									setValue={setBuyAmount}
									value={buyAmount}
									setCurrency={setBuyCur}
								/>
							</Row>
							<Link to='pricing'>
							<GetStarted>
								<Button>
									Bergabung Sekarang!
								</Button>
							</GetStarted>
							</Link>
						</div>
					</RightColumn>
				</Row>
			</Container>
		</HeroSection>
	);
};

export default Hero;

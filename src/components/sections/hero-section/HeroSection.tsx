'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
	return (
		<section className="mx-auto sm:py-16 lg:py-16 xl:gap-16 xl:px-16">
			<div className="grid grid-cols-1 sm:grid-cols-12">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-8 place-self-center justify-self-start text-center sm:text-left"
				>
					<h1 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl lg:leading-normal">
						<span className="bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-text text-white">
							Hello, I&apos;m{' '}
						</span>
						<br></br>
						<TypeAnimation
							sequence={[
								'Icediver',
								1000,
								'Web Developer',
								1000,
								'Mobile Developer',
								1000,
								'UI/UX Designer',
								1000,
							]}
							wrapper="span"
							speed={10}
							repeat={Infinity}
						/>
					</h1>
					<p className="mb-6 text-base text-[#ADB7BE] sm:text-lg lg:text-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
						voluptuous.
					</p>
					<div>
						<Link
							href="/#contact"
							className="mr-4 inline-block w-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 px-6 py-3 text-white hover:bg-slate-200 sm:w-fit"
						>
							Hire Me
						</Link>
						<Link
							href="/"
							className="mt-3 inline-block w-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 px-1 py-1 text-white hover:bg-slate-800 sm:w-fit"
						>
							<span className="block rounded-full bg-[#121212] px-5 py-2 hover:bg-slate-800">
								Download CV
							</span>
						</Link>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-4 mt-4 place-self-center lg:mt-0"
				>
					<div className="relative h-[150px] w-[150px] overflow-hidden rounded-full bg-[radial-gradient(circle,_#7c3aed,_var(--main)_60%)] lg:-mr-40 lg:h-[400px] lg:w-[400px]">
						<Image
							src="/images/hero-image.png"
							alt="hero image"
							className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full"
							width={300}
							height={300}
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;

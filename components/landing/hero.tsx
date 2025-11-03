"use client";

import Link from "next/link";
import { useId } from "react";
import { Builder } from "../builder";
import { Spotlight } from "./spotlight";

export default function Hero() {
	return (
		<section className="relative w-full flex md:items-center md:justify-center bg-white/96 dark:bg-black/[0.96] antialiased min-h-[40rem] md:min-h-[50rem] lg:min-h-[40rem]">
			{/* Spotlight Effect */}
			<Spotlight />

			{/* Background Grid */}
			<div className="absolute inset-0 left-5 right-5 lg:left-16 lg:right-14 xl:left-16 xl:right-14">
				<div className="absolute inset-0 bg-grid text-muted/50 dark:text-white/[0.02]" />
				<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
			</div>

			{/* Content */}
			<div className="px-4 py-8 md:w-10/12 mx-auto relative z-10">
				<div className="mx-auto grid lg:max-w-8xl xl:max-w-full grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-2 lg:grid-cols-2 lg:px-8 lg:py-4 xl:gap-x-16 xl:px-0">
					<div className="relative z-10 text-left lg:mt-0">
						<div className="relative space-y-4">
							<div className="space-y-2">
								<div className="flex flex-col gap-2">
									<div className="flex items-end gap-1 mt-2">
										<div className="flex items-center gap-1">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="0.8em"
												height="0.8em"
												viewBox="0 0 24 24"
											>
												<path
													fill="currentColor"
													d="M13 4V2c4.66.5 8.33 4.19 8.85 8.85c.6 5.49-3.35 10.43-8.85 11.03v-2c3.64-.45 6.5-3.32 6.96-6.96A7.994 7.994 0 0 0 13 4m-7.33.2A9.8 9.8 0 0 1 11 2v2.06c-1.43.2-2.78.78-3.9 1.68zM2.05 11a9.8 9.8 0 0 1 2.21-5.33L5.69 7.1A8 8 0 0 0 4.05 11zm2.22 7.33A10.04 10.04 0 0 1 2.06 13h2c.18 1.42.75 2.77 1.63 3.9zm1.4 1.41l1.39-1.37h.04c1.13.88 2.48 1.45 3.9 1.63v2c-1.96-.21-3.82-1-5.33-2.26M12 17l1.56-3.42L17 12l-3.44-1.56L12 7l-1.57 3.44L7 12l3.43 1.58z"
												></path>
											</svg>
											<span className="text-xs text-opacity-75">
												AWS Roadmap
											</span>
										</div>
									</div>
								</div>

								<p className="text-zinc-800 dark:text-zinc-300 tracking-tight text-2xl md:text-3xl text-pretty">
									Step by step guide to learning AWS in 2025.
								</p>
							</div>

							<div className="mt-4 flex w-fit flex-col gap-4 font-sans md:flex-row md:justify-center lg:justify-start items-center">
								<Link
									href="/docs"
									className="hover:shadow-sm dark:border-stone-100 dark:hover:shadow-sm border-2 border-black bg-white px-4 py-1.5 text-sm uppercase text-black shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] transition duration-200 md:px-8 dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
								>
									Get Started
								</Link>
								{/* <Builder /> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export function HeroBackground(props: React.ComponentPropsWithoutRef<"svg">) {
	const id = useId();
	return (
		<svg
			aria-hidden="true"
			viewBox="0 0 668 1069"
			width={668}
			height={1069}
			fill="none"
			{...props}
		>
			<defs>
				<clipPath id={`${id}-clip-path`}>
					<path
						fill="#fff"
						transform="rotate(-180 334 534.4)"
						d="M0 0h668v1068.8H0z"
					/>
				</clipPath>
			</defs>
			<g opacity=".4" clipPath={`url(#${id}-clip-path)`} strokeWidth={4}>
				<path
					opacity=".3"
					d="M584.5 770.4v-474M484.5 770.4v-474M384.5 770.4v-474M283.5 769.4v-474M183.5 768.4v-474M83.5 767.4v-474"
					stroke="#334155"
				/>
				<path
					d="M83.5 221.275v6.587a50.1 50.1 0 0 0 22.309 41.686l55.581 37.054a50.102 50.102 0 0 1 22.309 41.686v6.587M83.5 716.012v6.588a50.099 50.099 0 0 0 22.309 41.685l55.581 37.054a50.102 50.102 0 0 1 22.309 41.686v6.587M183.7 584.5v6.587a50.1 50.1 0 0 0 22.31 41.686l55.581 37.054a50.097 50.097 0 0 1 22.309 41.685v6.588M384.101 277.637v6.588a50.1 50.1 0 0 0 22.309 41.685l55.581 37.054a50.1 50.1 0 0 1 22.31 41.686v6.587M384.1 770.288v6.587a50.1 50.1 0 0 1-22.309 41.686l-55.581 37.054A50.099 50.099 0 0 0 283.9 897.3v6.588"
					stroke="#334155"
				/>
				<path
					d="M384.1 770.288v6.587a50.1 50.1 0 0 1-22.309 41.686l-55.581 37.054A50.099 50.099 0 0 0 283.9 897.3v6.588M484.3 594.937v6.587a50.1 50.1 0 0 1-22.31 41.686l-55.581 37.054A50.1 50.1 0 0 0 384.1 721.95v6.587M484.3 872.575v6.587a50.1 50.1 0 0 1-22.31 41.686l-55.581 37.054a50.098 50.098 0 0 0-22.309 41.686v6.582M584.501 663.824v39.988a50.099 50.099 0 0 1-22.31 41.685l-55.581 37.054a50.102 50.102 0 0 0-22.309 41.686v6.587M283.899 945.637v6.588a50.1 50.1 0 0 1-22.309 41.685l-55.581 37.05a50.12 50.12 0 0 0-22.31 41.69v6.59M384.1 277.637c0 19.946 12.763 37.655 31.686 43.962l137.028 45.676c18.923 6.308 31.686 24.016 31.686 43.962M183.7 463.425v30.69c0 21.564 13.799 40.709 34.257 47.529l134.457 44.819c18.922 6.307 31.686 24.016 31.686 43.962M83.5 102.288c0 19.515 13.554 36.412 32.604 40.645l235.391 52.309c19.05 4.234 32.605 21.13 32.605 40.646M83.5 463.425v-58.45M183.699 542.75V396.625M283.9 1068.8V945.637M83.5 363.225v-141.95M83.5 179.524v-77.237M83.5 60.537V0M384.1 630.425V277.637M484.301 830.824V594.937M584.5 1068.8V663.825M484.301 555.275V452.988M584.5 622.075V452.988M384.1 728.537v-56.362M384.1 1068.8v-20.88M384.1 1006.17V770.287M283.9 903.888V759.85M183.699 1066.71V891.362M83.5 1068.8V716.012M83.5 674.263V505.175"
					stroke="#334155"
				/>
				<circle
					cx="83.5"
					cy="384.1"
					r="10.438"
					transform="rotate(-180 83.5 384.1)"
					fill="#1E293B"
					stroke="#334155"
				/>
				<circle
					cx="83.5"
					cy="200.399"
					r="10.438"
					transform="rotate(-180 83.5 200.399)"
					stroke="#334155"
				/>
				<circle
					cx="83.5"
					cy="81.412"
					r="10.438"
					transform="rotate(-180 83.5 81.412)"
					stroke="#334155"
				/>
				<circle
					cx="183.699"
					cy="375.75"
					r="10.438"
					transform="rotate(-180 183.699 375.75)"
					fill="#1E293B"
					stroke="#334155"
				/>
				<circle
					cx="183.699"
					cy="563.625"
					r="10.438"
					transform="rotate(-180 183.699 563.625)"
					fill="#1E293B"
					stroke="#334155"
				/>
				<circle
					cx="384.1"
					cy="651.3"
					r="10.438"
					transform="rotate(-180 384.1 651.3)"
					fill="#1E293B"
					stroke="#334155"
				/>
				<circle
					cx="484.301"
					cy="574.062"
					r="10.438"
					transform="rotate(-180 484.301 574.062)"
					fill="#0EA5E9"
					fillOpacity=".42"
					stroke="#0EA5E9"
				/>
				<circle
					cx="384.1"
					cy="749.412"
					r="10.438"
					transform="rotate(-180 384.1 749.412)"
					fill="#1E293B"
					stroke="#334155"
				/>
				<circle
					cx="384.1"
					cy="1027.05"
					r="10.438"
					transform="rotate(-180 384.1 1027.05)"
					stroke="#334155"
				/>
				<circle
					cx="283.9"
					cy="924.763"
					r="10.438"
					transform="rotate(-180 283.9 924.763)"
					stroke="#334155"
				/>
				<circle
					cx="183.699"
					cy="870.487"
					r="10.438"
					transform="rotate(-180 183.699 870.487)"
					stroke="#334155"
				/>
				<circle
					cx="283.9"
					cy="738.975"
					r="10.438"
					transform="rotate(-180 283.9 738.975)"
					fill="#1E293B"
					stroke="#334155"
				/>
				<circle
					cx="83.5"
					cy="695.138"
					r="10.438"
					transform="rotate(-180 83.5 695.138)"
					fill="#1E293B"
					stroke="#334155"
				/>
				<circle
					cx="83.5"
					cy="484.3"
					r="10.438"
					transform="rotate(-180 83.5 484.3)"
					fill="#0EA5E9"
					fillOpacity=".42"
					stroke="#0EA5E9"
				/>
				<circle
					cx="484.301"
					cy="432.112"
					r="10.438"
					transform="rotate(-180 484.301 432.112)"
					fill="#1E293B"
					stroke="#334155"
				/>
				<circle
					cx="584.5"
					cy="432.112"
					r="10.438"
					transform="rotate(-180 584.5 432.112)"
					fill="#1E293B"
					stroke="#334155"
				/>
				<circle
					cx="584.5"
					cy="642.95"
					r="10.438"
					transform="rotate(-180 584.5 642.95)"
					fill="#1E293B"
					stroke="#334155"
				/>
				<circle
					cx="484.301"
					cy="851.699"
					r="10.438"
					transform="rotate(-180 484.301 851.699)"
					stroke="#334155"
				/>
				<circle
					cx="384.1"
					cy="256.763"
					r="10.438"
					transform="rotate(-180 384.1 256.763)"
					stroke="#334155"
				/>
			</g>
		</svg>
	);
}

import React from 'react'
import business_svg from "../assets/svg/Business_SVG.svg"

function Landing() {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 h-screen">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between ">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Discover 
				<span className="dark:text-violet-400"> Local </span> Talent
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">The Person who goes to the gym regardless of how they feel
				<br className="hidden md:inline lg:hidden"/> will always beat the person who goes to the gym when they feel like going to the gym
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a href="/" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Hire From Us</a>
				<a href="/signup" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Apply For Jobs</a>
			</div>
		</div>
		<div className=" invisible lg:visible flex justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 items-stretch ">
			<img src={business_svg} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
  )
}

export default Landing
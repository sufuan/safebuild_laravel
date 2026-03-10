import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import React, { useEffect } from 'react';

import HeroSlider from '@/Components/HeroSlider';
import AboutUs from '@/Components/AboutUs';
import OurServices from '@/Components/OurServices';
import WhyChooseUs from '@/Components/WhyChooseUs';
import OurProjects from '@/Components/OurProjects';
import Testimonial from '@/Components/Testimonial';
import Team from '@/Components/Team';
import Newsletter from '@/Components/Newsletter';
import LatestNews from '@/Components/LatestNews';
import BrandLogos from '@/Components/BrandLogos';

export default function Welcome({ auth, laravelVersion, phpVersion }) {

	useEffect(() => {
		const loadScript = (src) => {
			return new Promise((resolve, reject) => {
				const script = document.createElement('script');
				script.src = src;
				script.async = false;
				script.onload = resolve;
				script.onerror = reject;
				document.body.appendChild(script);
			});
		};

		const loadAllScripts = async () => {
			try {
				await loadScript('/assets/slider.js');
				await loadScript('/assets/counters.js');
				await loadScript('/assets/projects.js');
				await loadScript('/assets/testimonials.js');
			} catch (error) {
				console.error("Failed to load a script", error);
			}
		};

		loadAllScripts();

		return () => {
			const scripts = ['/assets/slider.js', '/assets/counters.js', '/assets/projects.js', '/assets/testimonials.js'];
			scripts.forEach(src => {
				const els = document.querySelectorAll(`script[src="${src}"]`);
				els.forEach(el => el.remove());
			});
		};
	}, []);

	return (
		<>
			<Head title="Welcome to SafeBuild Canada" />
			<div className="boxed_wrapper">
				<Navbar />

				<HeroSlider />
				<AboutUs />
				<OurServices />
				<WhyChooseUs />
				<OurProjects />
				<Testimonial />
				<Team />
				<Newsletter />
				<LatestNews />
				<BrandLogos />

				<Footer />
			</div>
		</>
	);
}

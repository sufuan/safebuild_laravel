import SEOHead from '@/Components/SEOHead';
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

export default function Welcome({
	auth, laravelVersion, phpVersion,
	heroSlides, services, projects, testimonials, teamMembers, brandLogos, blogPosts
}) {

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

	const homepageSchema = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		'@id': 'https://safebuild.ca/#webpage',
		name: 'SafeBuild Canada – Expert Construction & Renovation Victoria BC',
		description: "Victoria BC's trusted general contractor. Expert renovation, remodeling, architectural design, excavation, custom carpentry & property services. Licensed, insured & BBB accredited.",
		url: 'https://safebuild.ca',
		isPartOf: { '@id': 'https://safebuild.ca/#website' },
		about: { '@id': 'https://safebuild.ca/#organization' },
		breadcrumb: {
			'@type': 'BreadcrumbList',
			itemListElement: [
				{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safebuild.ca' }
			]
		}
	};

	return (
		<>
			<SEOHead
				title="Expert Construction & Renovation Victoria BC"
				description="SafeBuild Canada – Victoria BC's #1 trusted general contractor. Renovation, remodeling, architectural design, excavation, custom carpentry & property services. Licensed, insured & BBB accredited. Call +1 (250) 886-0059."
				canonical="https://safebuild.ca"
				schema={homepageSchema}
			/>
			<div className="boxed_wrapper">
				<Navbar />

				<HeroSlider slides={heroSlides} />
				<AboutUs />
				<OurServices services={services} />
				<WhyChooseUs />
				<OurProjects projects={projects} />
				<Testimonial testimonials={testimonials} />
				<Team teamMembers={teamMembers} />
				<Newsletter />
				<LatestNews blogPosts={blogPosts} />
				<BrandLogos brandLogos={brandLogos} />

				<Footer />
			</div>
		</>
	);
}

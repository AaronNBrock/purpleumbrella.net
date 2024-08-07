import type { IShortLink, ISocialMediaLink } from '$lib/types';

import Facebook from '~icons/fa6-brands/facebook-f';
import Github from '~icons/fa6-brands/github';
import Linkedin from '~icons/fa6-brands/linkedin-in';
import Medium from '~icons/fa6-brands/medium';
import Twitter from '~icons/fa6-brands/twitter';
import Instagram from '~icons/fa6-brands/instagram';

export const siteTitle = 'Purple Umbrella ☂️';
export const siteDescription = 'How to make Google Cloud simpler.';
export const siteURL = 'purpleumbrella.com';
export const siteAuthor = '@AaronNBrock';

export const email = 'aaron@purpleumbrella.net';

// Controls how many blogs are shown per page on the main blog index pages
export const blogsPerPage = 10;

export const navItems = [
	{
		title: 'Home',
		route: '/#home'
	},
	{
		title: 'About',
		route: '/#about'
	},
	{
		title: 'Reviews',
		route: '/#reviews'
	},
	{
		title: 'Services',
		route: '/#services'
	},
	{
		title: 'Pricing',
		route: '/#pricing'
	}
];

export const siteMap = [
	{
		title: 'Home',
		route: '/'
	},
	{
		title: 'Blog',
		route: '/blog'
	},
	{
		title: 'Contact',
		route: '/contact'
	},
	{
		title: 'Short Links',
		route: '/link'
	}
];

export const socialMediaLinks: ISocialMediaLink[] = [
	{
		url: 'https://github.com/AaronNBrock',
		icon: Github
	},
	{
		url: 'https://linkedin.com/in/AaronNBrock',
		icon: Linkedin
	},
	{
		url: 'https://facebook.com/AaronNBrock',
		icon: Facebook
	},
	{
		url: 'https://twitter.com/AaronNBrock',
		icon: Twitter
	},
	{
		url: 'https://medium.com/@AaronNBrock',
		icon: Medium
	},
	{
		url: 'https://instagram.com/AutomateAaron',
		icon: Instagram
	}
];

export const shortLinks: IShortLink[] = [
	{
		slug: 'docker-slidedeck',
		url: 'https://docs.google.com/presentation/d/1wywdYRcQy4L_zoU6RKTUgoxs9l7VVerjKESQAzwzIqY/edit?usp=sharing'
	},
	{
		slug: 'terraform-slidedeck',
		url: 'https://docs.google.com/presentation/d/1ptP4sr_cC5qeZEuUA6fwJYF9eaLM2O9qaRtFE8bKwsg/edit?usp=sharing'
	},
	{
		slug: 'git-slidedeck',
		url: 'https://docs.google.com/presentation/d/1Q_zAEgMn9pkFs1pKL_BJ5Ru4jb61sDPX6CjRFVd7yr0/edit?usp=sharing'
	},
	{
		slug: 'git-cheatsheet',
		url: 'https://education.github.com/git-cheat-sheet-education.pdf'
	},
	{
		slug: 'hello-docker-github',
		url: 'https://github.com/AaronNBrock/hello-docker/'
	}
];

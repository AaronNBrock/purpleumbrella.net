<script lang="ts">
	import Img from '@zerodevx/svelte-img';
	// @ts-expect-error: svelte-img import
	import AboutImage from '$lib/assets/images/about.jpg?as=run&width=480;720';

	import BreathingBlob from '../lib/assets/svg/BreathingBlob.svelte';
	import Figure from '../lib/assets/figures/Figure.svelte';
</script>

<section id="about" class="section overflow-hidden">
	<div class="container">
		<!-- heading -->
		<div
			class="prose-condensed prose prose-lg mx-auto mb-8 max-w-lg text-center lg:prose-xl xl:prose-2xl"
		>
			<span>About About</span>
			<h2>About About About</h2>
			<p>About About About About About</p>
		</div>

		<!-- content -->
		<div class="relative items-center justify-center md:flex">
			<!-- image -->
			<div class="relative md:w-1/2 lg:w-2/5">
				<Img src={AboutImage} alt="Me... thinking." class="mask-left" />

				<Figure class="absolute top-0 -z-10 -ml-12 -mt-12 h-36 w-36 animate-move-x" />
			</div>

			<!-- text -->
			<div
				class="prose relative z-10 mx-4 -mt-48 max-w-none rounded-xl bg-accent p-6 text-accent-content lg:prose-lg xl:prose-xl prose-headings:text-accent-content md:mx-0 md:-ml-12 md:-mt-0 md:w-1/2 md:p-8 lg:p-12"
			>
				<h3>Who are we?</h3>
				<p>
					We're a group of professional Google Cloud Engineers, with extensive experience enabling
					startups and small businesses. Through designing cloud native architectures, conducting
					workshops, and more we've helped hundreds of organizations to maximize their Cloud
					investment. We'd love to help yours too!
				</p>

				<div class="flex flex-wrap gap-4">
					<a href="/contact#schedule" class="btn btn-primary">Schedule a Free Consultation</a>
					<a href="/contact#contact" class="btn btn-outline text-accent-content"> Contact Us </a>
				</div>
			</div>

			<BreathingBlob
				class="absolute -right-12 -top-12 hidden h-80 w-80 rotate-90 text-base-300 md:block"
			/>
		</div>
	</div>
</section>

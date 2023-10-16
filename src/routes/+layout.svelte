<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	export let data;
</script>

<div class="container">
	<Header />
	<main>
		<slot />
	</main>
	<Footer artists={data.artists} />
</div>

<style>
	.container{
		margin: var(--margin-gutter);
	}
	main{
		max-width: var(--page-width);
		margin: 0 auto;
	}
</style>

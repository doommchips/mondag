<script>
	import Intro from '../components/Intro.svelte';
	import Artists from '../components/Artists.svelte';
	import ExhibUp from '../components/ExhibUp.svelte';

	export let data;
</script>

<svelte:head>
	<meta name="keywords" content="artist, collective, kunstenaars, collectief, art, kunst, space, together, practice, grow, coincide, intertwine, Amsterdam, Netherlands, Dutch, exhibition, tentoonstelling">
	<meta name="description" content="M O N D A G is Amsterdam based international artist collective founded on the principle of regular repetition. The artists meet every Monday to share and develop their art practice. Twice a year they present their latest work in an exhibition. Bringing themselves and their individual art works together in the same space at the same time at regular intervals, they watch their individual art practices grow, coincide, and intertwine." />
	<title>M O N D A G</title>
</svelte:head>

<section>

	<Intro />
	<Artists artists={data.artists} />
	<ExhibUp exhibs={data.exhibitions} />

</section>

<style>

</style>
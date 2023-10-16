<script lang="ts">
	import ArtistIntro from '../../../components/ArtistIntro.svelte';
	import ArtistBio from '../../../components/ArtistBio.svelte';
	import ArtistVids from '../../../components/ArtistVids.svelte';
	import ArtistImgs from '../../../components/ArtistImgs.svelte';
	import ArtistSC from '../../../components/ArtistSC.svelte';

	export let data;
</script>

<svelte:head>
	<meta name="keywords" content="artist, collective, kunstenaars, collectief, art, kunst, space, together, practice, grow, coincide, intertwine, Amsterdam, Netherlands, Dutch, exhibition, tentoonstelling">
	<meta name="description" content="" />
	<title>{data.title} &mdash; M O N D A G</title>
</svelte:head>

<section>

	<ArtistIntro title={data.title} image={data.coverImage} />
	<ArtistBio statement={data.statement} bio={data.bio} links={data.links} artistName={data.title} />
	<ArtistVids video_01={data.video_01} video_02={data.video_02} />
	<ArtistImgs img_01={data.image_01}
				img_02={data.image_02}
				img_03={data.image_03}
				img_04={data.image_04}
				img_05={data.image_05}
				img_06={data.image_06}
				artistName={data.title}
	/>
	<ArtistSC soundcloud={data.soundcloud} />
	
</section>

<style>

</style>
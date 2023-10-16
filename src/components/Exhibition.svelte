<script>
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	// import type { Exhibition } from '$lib/utils/sanity';

	export let exhibition;
</script>

<div class="card">
	{#if exhibition.mainImage}
		<img
			class=""
			src={urlFor(exhibition.mainImage).url()}
			alt="Flyer image for {exhibition.title}"
		/>
	{/if}

	<p>{exhibition.title}</p>
</div>

<style>

</style>
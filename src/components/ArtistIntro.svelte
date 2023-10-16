<script>
    import Image from "./Image.svelte";

    export let title;
    export let image;
</script>

<section>
    <h3>Artist</h3>
	<h2>{title}</h2>
	{#if image}
		<Image image={image} artist={title} />
	{/if}
</section>

<style>
    section{
        margin: var(--margin-xxl) 0 var(--margin-xl) 0;
    }
    h2{
        margin: 0 0 var(--margin-lg) 0;
    }
</style>
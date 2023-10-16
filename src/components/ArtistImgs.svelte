<script>
	import Image from './Image.svelte';

    export let img_01;
    export let img_02;
    export let img_03;
    export let img_04;
    export let img_05;
    export let img_06;
    export let artistName;

    // i need to update this array whenever a variable above changes
    let images = Array;
    $: images = [img_01, img_02, img_03, img_04, img_05, img_06];
</script>

{#each images as image, i}
    {#if image}
        <Image image={image} artist={artistName} loading="lazy" />
    {/if}
{/each}

<style>

</style>
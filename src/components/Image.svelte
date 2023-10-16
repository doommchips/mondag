<script>
    import { urlFor } from '$lib/utils/image';

    export let image;
    export let artist;
    export let altTitle;
    export let loading = 'eager';
</script>

{#if image.title}
    <div class="img-container">
        <img
            src={urlFor(image).url()} 
            alt="{image.title} by {artist}" 
            loading="{loading}"
        />
    </div>
    <p class="work-title">{image.title}</p>
{:else if artist}
    <div class="img-container">
        <img
            src={urlFor(image).url()} 
            alt="Artwork by {artist}" 
            loading="{loading}"
        />
    </div>
{:else if altTitle}
    <div class="img-container">
        <img
            src={urlFor(image).url()} 
            alt="{altTitle}" 
            loading="{loading}"
        />
    </div>
{:else}
    <div class="img-container">
        <img
            src={urlFor(image).url()} 
            alt="by M O N D A G" 
            loading="{loading}"
        />
    </div>
{/if}

<style>
    .img-container{
        margin: var(--margin-lg) calc(-1 * var(--margin-md)) 0 calc(-1 * var(--margin-md));
        text-align: center;
    }
    img{
        /* max-height: 800px; */
        max-width: 100%;
        width: 100%;
    }
    .work-title{
        text-align: right;
    }
</style>
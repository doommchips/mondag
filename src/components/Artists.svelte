<script>
    export let artists;
</script>

<section>
    <ul>
        {#each artists as artist, i}
            {#if artist.current}
                <li><a href="/artist/{artist.slug.current}" title="Open {artist.title}'s artist page">{artist.title}</a>{#if (artists.length - 1) > i },&nbsp;{/if}</li>
            {/if}
        {/each}
    </ul>
</section>

<style>
    ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
        text-transform: lowercase;
    }
    li{
        display: inline;
    }
</style>
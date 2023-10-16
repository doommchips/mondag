<script>
    export let soundcloud;
</script>

<!-- sound cloud embed -->
{#if soundcloud}
    <div class="sc-container">
        <iframe width="100%" height="280" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/{soundcloud.code}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" title="Soundcloud embed"></iframe>
    </div>
{/if}

<style>
    .sc-container{
        margin: var(--margin-lg) calc(-1 * var(--margin-md)) 0 calc(-1 * var(--margin-md));
        text-align: center;
    }
</style>
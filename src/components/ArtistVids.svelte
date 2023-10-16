<script>
    export let video_01;
    export let video_02;
</script>

<!-- video 01 -->
{#if video_01}
    <div class="vid-container"><div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/{video_01.code}?h=808a2f23e7&loop=1&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="A Vimeo video embed showing art work"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script></div>
    {#if video_01.title}
        <p class="work-title">{video_01.title}</p>
    {/if}
{/if}

<!-- video 02 -->
{#if video_02}
    <div class="vid-container"><div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/{video_02.code}?h=808a2f23e7&loop=1&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="A Vimeo video embed showing art work"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script></div>
    {#if video_02.title}
        <p class="work-title">{video_02.title}</p>
    {/if}
{/if}

<style>
    .vid-container{
        margin: var(--margin-lg) calc(-1 * var(--margin-md)) 0 calc(-1 * var(--margin-md));
    }
    .work-title{
        text-align: right;
    }
</style>
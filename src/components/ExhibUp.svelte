<script>
    import { formatDate } from '$lib/utils';
    import { formatDateDay } from '$lib/utils';
    import Image from './Image.svelte';

    export let exhibs;
</script>

<section>
    {#each exhibs as exhibition}
        {#if exhibition.title == "Tentoonstelling #2"}
            <h2>Upcoming exhibition</h2>
            <div class="offset">
                <div class="offset-container">
                    <h3>{exhibition.title}</h3>
                    <p class="date-loc">
                        {exhibition.location}<br />
                        <!-- checks if exhibition takes place over one day, if so only shows a single date, else shows range -->
                        {#if formatDateDay(exhibition.startDate) == formatDateDay(exhibition.closeDate)}
                            {formatDate(exhibition.closeDate)}
                        {:else}
                            {formatDateDay(exhibition.startDate)} &mdash; {formatDate(exhibition.closeDate)}
                        {/if}
                    </p>
                </div>
            </div>
            <Image image={exhibition.mainImage} altTitle="Upcoming exhibition {exhibition.title} by M O N D A G, {formatDateDay(exhibition.startDate)} &mdash; {formatDate(exhibition.closeDate)}" />
        {/if}
    {/each}
</section>

<style>
    section{
        margin-top: var(--margin-xl);
    }
    .date-loc{
        text-transform: lowercase;
    }
</style>
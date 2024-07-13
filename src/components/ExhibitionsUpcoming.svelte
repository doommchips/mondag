<script>
    import { formatDate } from '$lib/utils';
    import { formatDateNum } from '$lib/utils';
    import { formatDateDay } from '$lib/utils';
    import Image from './Image.svelte';

    export let exhibitions;
    let today = new Date();

    function isExhibitionComing(today, exhibitionDate){
        // Convert dates to integers for comparison
        today = parseInt(today.split('/').reverse().join(''));
        exhibitionDate = parseInt(exhibitionDate.split('/').reverse().join(''));

        return today <= exhibitionDate;
    }
</script>
{#each exhibitions as exhibition}
    {#if isExhibitionComing(formatDateNum(today), formatDateNum(exhibition.closeDate))}
        <section>
            <h2>Upcoming event</h2>
            
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
        </section>
    {/if}
{/each}

<style>
    section{
        margin-top: var(--margin-xl);
    }
    .date-loc{
        text-transform: lowercase;
    }
</style>
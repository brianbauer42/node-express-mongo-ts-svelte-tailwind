<script>
    import {onMount} from 'svelte';
    // import ListItem from 'ListItem.svelte'

    let samples = [];

    async function refresh() {
    }

    onMount(refresh);

</script>



<table>
    <thead>
    <tr>
        <th>Tube ID</th>
        <th>Primary Sample ID</th>
        <th>Secondary Sample ID</th>
        <th>Status</th>
        <th>Report</th>
        <th>Date Tested</th>
        <th></th>
    </tr>
    </thead>
    <tbody>
<!--    {#each sample as samples}-->
<!--        <ListItem {...samples}/>-->
<!--    {/each}-->
    </tbody>
</table>
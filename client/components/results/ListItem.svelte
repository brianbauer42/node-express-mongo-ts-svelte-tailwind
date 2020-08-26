<script>
    export let sample_id1;
    export let sample_id2;
    export let status;
    export let report;
    export let date_tested;
    export let speciman_type;

</script>



<tr>
    <td>{name}</td>
    <td>{sample_id1}</td>
    <td>{sample_id2}</td>
    <td>{speciman_type}</td>
    <td>{date_tested}</td>
    <td>{report}</td>
    <td>{status}</td>
    <td>
        {#if status === 5}
            <a class="button" href="#/download/{id}">Print Results</a>
        {/if}
    </td>
</tr>
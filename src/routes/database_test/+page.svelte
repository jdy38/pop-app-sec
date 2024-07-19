<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>All Chapters</title>
</svelte:head>

<section>
	<h1>All Chapters</h1>

	{#if data.chapters && data.chapters.length}
		<table>
			<thead>
				<tr>
					<th scope="col">Chapter ID</th>
					<th scope="col">Chapter Name</th>
				</tr>
			</thead>

			<tbody>
				{#each data.chapters as chapter (chapter.chapterID)}
					<tr>
						<td>
							<a href="/books/{chapter.chapterID}">{chapter.chapterID}</a>
						</td>
						<td>{chapter.chapterName}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
</section>
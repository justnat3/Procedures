<script>
	import ListItem from "./ListItem.svelte";

	const url = "";
	let items;

	let _list_temp = [{
		id: 1, 
		title: "Discord Server Setup", 
		description: "yessir!"
	},
	{
		id: 2, 
		title: "Computer Setups", 
		description: "this is the way that we set up our machines"
	}]

	let selected;

</script>

{#each _list_temp as item}
        <ListItem description="{item.description}" title="{item.title}"/>
{/each}

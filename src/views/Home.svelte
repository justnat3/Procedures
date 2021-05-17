<script>
	import mongoose from 'mongoose';

	import { Router, Route, Link} from "svelte-routing";
	import ListItem from "./ListItem.svelte";
	import ProcedureDetails from "./ProcedureDetails.svelte";
	
	function hdlclick(item) {console.log(item)}
	const url = "";
	//const mongo = 'mongodb://
	let items;
	let _list_temp = [{title: "Discord Server Setup", description: "yessir!"},
	 {title: "Computer Setups", description: "yessir"}]
	let selected;
</script>
<ion-content>
	<Router url="{url}">
		{#each _list_temp as item, i}
				<div on:click={() => hdlclick(_list_temp[i])}
				<ListItem this={_list_temp[i]} title="{item.title}"/>
			<Link to="procedure">
			</Link>
		{/each}
		<Route path="procedure">
			<ProcedureDetails title="{selected.title}" 
				description="{selected.description}"/>
		</Route>
	</Router>
</ion-content>

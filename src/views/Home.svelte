<script>
	import mongoose from 'mongoose';

	import { Router, Route, Link} from "svelte-routing";
	import ListItem from "./ListItem.svelte";
	import ProcedureDetails from "./ProcedureDetails.svelte";

	const url = "";
	//const mongo = 'mongodb://
	let items;
	let _list_temp = [{id: 1, title: "Discord Server Setup", description: "yessir!"},
	 {id: 2, title: "Computer Setups", description: "yessir"}]
	let selected;
</script>
<ion-content>
    {#each _list_temp as item}
            <ListItem description="{item.description}" title="{item.title}"/>
    {/each}
</ion-content>

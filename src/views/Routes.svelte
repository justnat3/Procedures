<script>
    // Components 
	import NewProcedureView from "./NewProcedureView.svelte";
	import ProcedureDetails from "./ProcedureDetails.svelte";
	import Home from "./Home.svelte";
    import Header from "./Header.svelte";
    // Modules 
	import { Router, Route} from "svelte-routing";

	export let url = "";    

</script>

<svelte:head>
	<title>Procedures</title>
</svelte:head>

<ion-content>
    <Router url={url}>
        <Header />

        <Route path="/" component="{Home}"/>
        <Route path="new-procedure" component="{NewProcedureView}"/>
        <Route path="details/:title/:description" let:params>
            <ProcedureDetails
                description="{params.description}"
                title="{params.title}"
                />
        </Route>
    </Router>
</ion-content>

<style>
    ion-content {
        --ion-background-color: #2b3856;
    }
    
</style>

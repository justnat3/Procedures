<script>
    // Components 
	import NewProcedureView from "./views/NewProcedureView.svelte";
	import ProcedureDetails from "./views/ProcedureDetails.svelte";
	import Home from "./views/Home.svelte";

    // Modules 
	import { Router, Route, Link} from "svelte-routing";
    import { setContext } from 'svelte';

    // native storage service, service.js
    export let storage_service;
	export let url = "";
    
    setContext('storage_service', storage_service);

</script>

<svelte:head>
	<title>Procedures</title>
</svelte:head>

<ion-content>
    <Router url={url}>
        <ion-header>
                <ion-toolbar>
                    <Link to="new-procedure">
                        <ion-button
                            size="small" color="dark" replace>
                            +
                        </ion-button>
                    </Link>

                    <Link to="/">
                        <ion-title>Procedures</ion-title>
                    </Link>
                </ion-toolbar>
        </ion-header>

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

ion-header {
    --ion-background-color: #d1d0ce;
}

</style>

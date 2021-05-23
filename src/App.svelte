<script>
	import NewProcedureView from "./views/NewProcedureView.svelte";
	import ProcedureDetails from "./views/ProcedureDetails.svelte";
	import Home from "./views/Home.svelte";
	import { Router, Route, Link} from "svelte-routing";

	export let url = "";
</script>

<svelte:head>
	<title>Procedures</title>
</svelte:head>

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

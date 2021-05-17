<script>
	export let title;
	export let description;
	console.log(title);
	console.log(description)
</script>

<h1> I'm here!</h1>
<ion-content>
	<ion-card>
		<ion-card-header>
			<ion-card-title>{title}</ion-card-title>
		</ion-card-header>
		<ion-card-content>
			{description}
		</ion-card-content>
	</ion-card>
</ion-content>

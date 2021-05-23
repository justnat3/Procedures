<script>
    import { Link, Route } from 'svelte-routing';

	// visable
    export let title;
    export let description;
</script>

<ion-item>
    <ion-icon slot="end" name="clipboard-outline"/>
<Link to="details/{title}/{description}">
    <div class="ion-padding">
        <ion-icon name="close-circle-outline"/>
    </div>
</Link>
  <ion-label color="dark">
    <h2>{title}</h2>
  </ion-label>
</ion-item>

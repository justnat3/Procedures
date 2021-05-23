<script>
    import { Link, Route } from 'svelte-routing';

	// visable
	export let title;
    export let description;
    // not visable
    export let id;

    const strip_space = (title) => {
        var title = title.replace(/ /g, "-").toLowerCase();
        return title
    }

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

<script>
    import { Link } from 'svelte-routing';
    import { StorageService } from '../services.js';
	// visable
    console.log(StorageService)
    export let title;
    export let description;
</script>
<div class="">

    <ion-item>

        <Link slot="end" to="details/{title}/{description}">
        <ion-icon name="copy-outline"/>
    </Link>

    <ion-icon slot="end" name="close-outline"/>
      <ion-label color="dark">
        <h2>{title}</h2>
      </ion-label>
    </ion-item>
</div>

<style>

ion-item {
    --ion-background-color: white;
}

</style>

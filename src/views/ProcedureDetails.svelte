<script>
    import Instruction from './Instruction.svelte';
    import { Storage } from '@ionic/storage';
    import { getContext } from 'svelte';

    // TODO:
        // make a model to change the label name
        // add a foreach button id in the object

	export let title;
	export let description;

    // Native storage Setup
    const storage_service = getContext('storage_service');
    const promise = storage_service.getData();

    function set_test_steps() {
        storage_service.set_data('boot to pxe', true);
    }

    set_test_steps();

</script>

<ion-card>
    <ion-card-header>
        <ion-card-title>{title}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
        {description}
    </ion-card-content>

    <ion-card-header>
        <ion-card-title>
            Instructions 
        </ion-card-title>
    </ion-card-header>

    <ion-card-content>
        <ion-list lines="none">
            {#each steps as field}
                <Instruction title={field.title} state={field.state}/>
            {/each}
        </ion-list>
    </ion-card-content>
</ion-card>

<style>
ion-card {
    --ion-background-color: white;
    margin: 8px 8px 0 8px;
}
</style>

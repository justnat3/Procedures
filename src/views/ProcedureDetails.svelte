<script>
    import Instruction from './Instruction.svelte';
    import { Storage } from '@ionic/storage';
    import { getContext } from 'svelte';

	export let title;
	export let description;

    // Native storage Setup
    let storage_service = getContext('storage_service');
    console.log(getContext('storage_service'))

    const sub = storage_service.subscribe(val => {
        storage_service = val;
    })

    function set_test_steps() {
        let steps = [];
        storage_service.set_data('boot to pxe', false);
        steps.push(storage_service.get_data('boot to pxe'));
        return steps
    }

    let items = set_test_steps();

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
            {#each items as field}
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

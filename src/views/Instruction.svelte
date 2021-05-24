<script>
    export let state;
    export let title;
    $: state
</script>

<ion-item>
    <ion-checkbox 
                  on:click={() => {state = !state; console.log(state)}}
                  checked="{state}" 
                  slot="start"
                />
    <ion-label class="ion-padding" text-wrap>{title}</ion-label>
        <ion-icon style="z-index: 99; margin: 10px;" 
                  size="small" 
                  name="pricetags-outline"
            />
</ion-item>

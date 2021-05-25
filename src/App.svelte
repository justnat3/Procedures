<script>
    
    import { writable } from 'svelte/store';
    import { setContext } from 'svelte';
    import Routes from './views/Routes.svelte'
    // native storage service, service.js
    export let storage_service;

    
    storage_service.set_data("ree", true);
    
    storage_service = writable(storage_service);
    setContext('storage_service', storage_service);
    
</script>





<Routes />
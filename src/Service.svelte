<script>
    import { init_storage } from 'services.js';
    import App from './App.svelte';
    const storage_service = init_storage();
</script>

{#await promise then storage_service}
    <App {storage_service} />
{/await}

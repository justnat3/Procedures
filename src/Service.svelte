<script>
    import { StorageService } from 'services.js';
    import App from './App.svelte';
    const storage_service = new StorageService();
</script>

{#await promise then storage_service}
    <App {storage_service} />
{/await}

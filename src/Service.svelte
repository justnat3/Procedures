<script>
    import { StorageService } from './services.js';
    import App from './App.svelte';
    let storage_service;

    async function await_storage_service() {
        storage_service = await new StorageService();
    }

    const promise = await_storage_service();
</script>

{#await promise then storage}
    <App {storage_service} />
{:catch err}
    <h1>ERROR STORAGE NOT FOUND</h1>
{/await}

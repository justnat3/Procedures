<script>
    import {Link} from 'svelte-routing'
</script>
<ion-header>
    <ion-toolbar>
        <Link to="new-procedure">
            <ion-button
                size="small" color="dark" replace>
                +
            </ion-button>
        </Link>
        <Link to="/">
            <ion-title>Procedures</ion-title>
        </Link>
    </ion-toolbar>
</ion-header>
<style>
    ion-header {
        --ion-background-color: #d1d0ce;
    }
</style>
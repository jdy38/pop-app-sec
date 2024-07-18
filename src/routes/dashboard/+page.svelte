<script>
    import { AppBar } from '@skeletonlabs/skeleton';
    import logo from '$lib/assets/logo.webp';
    import Navbar from './Navbar.svelte';
	import Sidebar from './Sidebar.svelte';
    import Main from './Main.svelte';
    
    let open = false;
</script>

<Main/>

<style>
    .div-1 {
        background-color: #C33521;
    }

    .circle-placeholder {
        width: 40px; 
        height: 40px;
        border-radius: 50%; 
        background-color: #ccc; 
        margin-right: 10px; 
        display: inline-block; 
    }
</style>


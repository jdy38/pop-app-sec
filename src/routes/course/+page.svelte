<script>
    import { AppBar, Accordion, AccordionItem } from '@skeletonlabs/skeleton';
    import logo from '$lib/assets/logo.webp';
    import Navbar from '../dashboard/Navbar.svelte';
	import Sidebar from '../dashboard/Sidebar.svelte';
    import Main from '../dashboard/Main.svelte';
    
    let open = false;
</script>

<div class="div-1">
    <AppBar>
        <svelte:fragment slot="lead">
            <div class="logo-container">
                <img src={logo} alt="Logo" style="height: 70px; width: auto;" />
            </div>
        </svelte:fragment>
        <svelte:fragment slot="trail">
            <p class="font-sans text-white">Hi, Jed!</p>

            <div class="circle-placeholder"></div>

            <p class="font-sans text-yellow-500 underline">Logout</p>
        </svelte:fragment>
    </AppBar>
</div>
<Navbar bind:sidebar={open}/>
<div class="layout">
    <div class="side">
        <Sidebar bind:open/>
    </div>
    <div class="content">
        <div class="cards-container">
            <div class="card bg-gray-200">
                <h1 class="font-sans text-yellow-500 font-bold">Course Title</h1>
            </div>
            <div class="card bg-gray-200">
                <h1 class="font-sans text-yellow-500 font-bold">Topic 1.1</h1><br>
                <p class=" text-justify leading-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis iaculis lacus. Aliquam nec massa iaculis, tincidunt elit vitae, dapibus nunc. Vivamus id lacus ut nisi sodales consequat. Nam mollis tortor libero, vitae laoreet tortor viverra vel. In varius, orci sit amet egestas viverra, augue elit scelerisque ligula, vel lobortis sem nibh non ex. Integer ac nisl vitae erat varius pharetra pellentesque eget massa. Pellentesque convallis gravida iaculis. Vivamus nulla nibh, posuere quis faucibus ac, rhoncus ut magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque in arcu non semper. Phasellus pellentesque, elit ac hendrerit porttitor, leo ex molestie diam, sit amet pulvinar tortor turpis vel nisl. Mauris eleifend blandit egestas.
                </p>
            </div>
            <div class="card bg-gray-200">
                <h1 class="font-sans text-yellow-500 font-bold">Code Snippets</h1>
                <pre>
                    <code>
                        {`const example = () => {
            console.log('Code snippet goes here.');
        };`}
                    </code>
                </pre>
            </div>
            <div class="card bg-gray-200">
                <h1 class="font-sans text-yellow-500 font-bold">Additional References</h1><br>
            </div>
            <div class="card bg-gray-200">
                <h1 class="font-sans text-yellow-500 font-bold">FAQ</h1><br>

                <Accordion>
                    <AccordionItem>
                        <svelte:fragment slot="lead">
                            <div class="circle">
                                1 <!-- Number inside the circle -->
                            </div></svelte:fragment>
                        <svelte:fragment slot="summary">Question 1</svelte:fragment>
                        <svelte:fragment slot="content">Answer 1</svelte:fragment>
                    </AccordionItem>
                    <AccordionItem>
                        <svelte:fragment slot="lead">
                            <div class="circle">
                                2 <!-- Number inside the circle -->
                            </div></svelte:fragment>
                        <svelte:fragment slot="summary">Question 2</svelte:fragment>
                        <svelte:fragment slot="content">Answer 2</svelte:fragment>
                    </AccordionItem>
                    <AccordionItem>
                        <svelte:fragment slot="lead">
                            <div class="circle">
                                3 <!-- Number inside the circle -->
                            </div></svelte:fragment>
                        <svelte:fragment slot="summary">Question 3</svelte:fragment>
                        <svelte:fragment slot="content">Answer 3</svelte:fragment>
                    </AccordionItem>
                </Accordion>

            </div>
        </div>
    </div>
</div>



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

    .cards-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
    }

    .card {
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .layout {
        display: grid;
        grid-template-columns: 60px auto;
        height: 100vh;
    }

    h1 {
        text-transform: uppercase; /* Transform text to uppercase */
        font-size: 32px; /* Adjust font size as needed */
    }

    .content {
        overflow-y: auto; /* Enable vertical scrolling */
        padding: 20px;
        height:calc(100vh - 140px);
    }

    .circle {
        width: 3vw;
        height: 3vw;
        border-radius: 50%;
        background-color: goldenrod; /* Circle background color */
        display: flex;
        justify-content: center;
        align-items: center;
        color: white; /* Text color */
        font-size: 20px; /* Font size of the number */
        font-weight: bold; /* Bold text */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
</style>

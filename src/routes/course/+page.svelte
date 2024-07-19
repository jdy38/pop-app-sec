<script>
    import { AppBar, Accordion, AccordionItem } from '@skeletonlabs/skeleton';
    import logo from '$lib/assets/logo.webp';
    // import Navbar from '../dashboard/Navbar.svelte';
	// import Sidebar from '../dashboard/Sidebar.svelte';
    // import Main from '../dashboard/Main.svelte';
    
    let open = false;
</script>

<div class="grid size-full">
    <div class="content">
        <div class="cards-container">
            <div class="card bg-gray-100">
                <h1 class="font-sans text-yellow-500 font-bold">Course Title</h1>
                <div class ="tags-container">
                    <div class="tag">tag 1</div>
                    <div class="tag">tag 2</div>
                    <div class="tag">tag 3</div>
                
                </div>
            </div>
            <div class="card bg-gray-100">
                <h1 class="font-sans text-yellow-500 font-bold">Topic 1.1</h1><br>
                <p class=" text-justify leading-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis iaculis lacus. Aliquam nec massa iaculis, tincidunt elit vitae, dapibus nunc. Vivamus id lacus ut nisi sodales consequat. Nam mollis tortor libero, vitae laoreet tortor viverra vel. In varius, orci sit amet egestas viverra, augue elit scelerisque ligula, vel lobortis sem nibh non ex. Integer ac nisl vitae erat varius pharetra pellentesque eget massa. Pellentesque convallis gravida iaculis. Vivamus nulla nibh, posuere quis faucibus ac, rhoncus ut magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque in arcu non semper. Phasellus pellentesque, elit ac hendrerit porttitor, leo ex molestie diam, sit amet pulvinar tortor turpis vel nisl. Mauris eleifend blandit egestas.
                </p>
            </div>
            <div class="card bg-gray-100">
                <h1 class="font-sans text-yellow-500 font-bold">Code Snippets</h1>
                <pre>
                    <code>
                        {`const example = () => {
                            console.log('Code snippet goes here.');
                        };`}
                    </code>
                </pre>
            </div>
            <div class="card bg-gray-100">
                <h1 class="font-sans text-yellow-500 font-bold">Additional References</h1><br>
                <div class="video">
                    <iframe width="640" height="360" src="https://www.youtube.com/embed/tgbNymZ7vqY" title="video" >
                    </iframe>
                </div>
            </div>
            <div class="card bg-gray-100">
                <h1 class="font-sans text-yellow-500 font-bold">FAQ</h1><br>

                <Accordion>
                    <AccordionItem>
                        <svelte:fragment slot="summary">
                            <div class="summary">
                                <div class="circle">1 <!-- Number inside the circle --></div>
                                <p class="text">Question 1</p>
                            </div>
                            <div class="divider"></div>
                        </svelte:fragment>
                        <svelte:fragment slot="content"><p class="answer">Answer 1</p><div class="divider"></div></svelte:fragment>
                    </AccordionItem>
                    <AccordionItem>
                        <svelte:fragment slot="summary">
                            <div class="summary">
                                <div class="circle">2 <!-- Number inside the circle --></div>
                                <p class="text">Question 2</p>
                            </div>
                            <div class="divider"></div>
                        </svelte:fragment>
                        <svelte:fragment slot="content"><p class="answer">Answer 2</p><div class="divider"></div></svelte:fragment>
                    </AccordionItem>
                    <AccordionItem>
                        <svelte:fragment slot="summary">
                            <div class="summary">
                                <div class="circle">3 <!-- Number inside the circle --></div>
                                <p class="text">Question 3</p>
                            </div>
                            <div class="divider"></div>
                        </svelte:fragment>
                        <svelte:fragment slot="content"><p class="answer">Answer 3</p><div class="divider"></div></svelte:fragment>
                    </AccordionItem>
                </Accordion>

            </div>
        </div>
    </div>
</div>



<style>
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

    .tags-container {
        display: flex;
        flex-direction: row;
        padding: 1em;
    }

    .tag {
        padding-left: 0.8em;
        padding-right: 0.8em;
        border-radius: 40%;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        color:black;
        background-color: white;
        margin: 0.2em;
    }

    .video {
        display: flex;
        justify-content: center;
        padding: 1.5em;
    }

    .text {
        font-family: lato;
        align-self: center;
    }

    .answer {
        font-family: lato;
        background-color: white;
        padding: 1.5em;
        margin-top: -15px;
        margin-bottom: -15px;
    }

    .divider {
        height: 2.5px;
        background-color: #ccc; /* Adjust color as needed */
        margin-top: 8px; /* Adjust spacing as needed */
    }

    .summary {
        display: grid;
        grid-template-columns: 6.5% 93.5%;
        padding: 1em;
    }
</style>

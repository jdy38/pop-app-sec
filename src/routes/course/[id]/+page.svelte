<script lang="ts">
    import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
    import { onMount } from 'svelte';
    
    export let data;

    // Function to format the requirementID
    const formatRequirementID = (id: number): string => {
        // Convert ID to string
        const idStr = id.toString();

        // Get the last three digits
        const lastThreeDigits = idStr.slice(-3);

        // Format the digits as "x.y.z"
        return lastThreeDigits.split('').join('.').replace(/^(\d)\.(\d)\.(\d)$/, '$1.$2.$3');
    };

    // Use the function to get the formatted ID
    const formattedID = formatRequirementID(data.requirement.requirementID);

    let formattedVulnerability = '';
    let formattedHowToCode = '';

    onMount(() => {
        formattedVulnerability = insertLineBreaks(data.requirement.vulnerability|| '');
        formattedHowToCode = insertLineBreaks(data.requirement.how_to_code|| '');
    });

    function insertLineBreaks(text: string): string {
        if (!text) return '';
        // Insert <br> before each bullet point
        return text.replace(/(•)/g, '<br>$1');
    }
</script>

<div class="grid size-full">
    <div class="content">
        <div class="cards-container">
            <div class="card bg-gray-100">
                <h1 class="font-sans text-yellow-500 font-bold">{data.chapter.chapterID}: {data.chapter.chapterName}</h1>
                <div class ="tags-container">
                    <div class="tag">tag 1</div>
                    <div class="tag">tag 2</div>
                    <div class="tag">tag 3</div>
                
                </div>
            </div>
            <div class="card bg-gray-100">
                <h1 class="font-sans text-yellow-500 font-bold">Requirement {formattedID}</h1><br>
                <p class=" text-justify leading-7">
                    <strong>{data.requirement.content}</strong><br><br>
                    {#if data.requirement.vulnerability}
                        <strong>Vulnerability</strong><br>
                        {@html formattedVulnerability}<br><br>
                     {/if}
            
                    {#if data.requirement.how_to_code}
                        <strong>How to Code</strong><br>
                        {@html formattedHowToCode}<br>
                    {/if}
                </p>
            </div>
            <div class="card bg-gray-100">
                <h1 class="font-sans text-yellow-500 font-bold">Code Snippets</h1><br>
                <div class="divider"></div>
                <ul>
                    {#each data.examples as example (example.exampleID)}
                        <li>
                            {#if example.example_code && example.example_code.trim() !== ""}
                                <br><h2 class='font-sans text-yellow-500 font-bold'>{example.exampleName}</h2>
                                <code>
                                    {example.example_code}
                                </code>
                                <div class="divider"></div>
                            {:else}
                                <p>No code snippet available.</p>
                            {/if}
                        </li>
                    {/each}
                </ul>
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
        overflow: hidden;
    }

    h1 {
        text-transform: uppercase; /* Transform text to uppercase */
        font-size: 32px; /* Adjust font size as needed */
    }

    .content {
        overflow-y: auto; /* Enable vertical scrolling */
        padding: 20px;
        height:calc(100vh - 100px);
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

    code {
        display: block; /* Make code block-level */
        white-space: pre-wrap; /* Preserve whitespace and wrap text */
        word-wrap: break-word; /* Break long words onto the next line */
        max-width: 100%; /* Limit width to container */
        overflow: hidden; /* Hide overflow content */
        padding: 0.5em;
        margin: 3em;
    }
</style>

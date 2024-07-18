<script lang="ts">
    import { AppBar } from '@skeletonlabs/skeleton';
    import logo from '$lib/assets/logo.webp';
    import avatar from '$lib/assets/avatar1.jpg';
    import moduleImage from '$lib/assets/sample_module_pic.jpg';
    import { ProgressBar } from '@skeletonlabs/skeleton';

    let barWidth = 60;
    // let y;
</script>

<div class="relative">
    <div class="absolute top-0" id="header-container">
        <AppBar>
            <svelte:fragment slot="lead">
                <div class="logo-container">
                    <img src={logo} alt="Logo" style="height: 70px; width: auto;"/>
                </div>
            </svelte:fragment>
            <svelte:fragment slot="trail">
                <p class="font-sans text-white">Hi, Jed!</p>
                <div class="circle-placeholder">
                    <img src={avatar} alt="Avatar" class= "rounded-full"/>
                </div>
                <p class="font-sans text-yellow-500 underline">Logout</p>
            </svelte:fragment>
        </AppBar>
    </div>

    <div id="outer" class="flex-auto absolute top-[102px] w-full overflow-y-scroll">
        <div class="flex-auto h-[100px] border-2 border-black m-[10px]">
            Insert search and filter bar here
        </div>

        <div class="h-[20px]"></div> 

        <div class = "flex-auto grid grid-cols-3 m-[10px] content-start justify-evenly gap-x-[20px] gap-y-[30px]">
            <div id="module-box" class="space-y-[10px]">
                <div class="bg-gradient-to-t from-yellow-600 via-transparent via-30% relative h-[300px]">
                    <img src={moduleImage} class="w-full h-full object-cover absolute mix-blend-overlay drop-shadow-xl border-black border-[1.5px]"/>
                    <h1 class="absolute pb-2 inset-x-0 bottom-0 text-white text-2xl font-sans font-bold text-center drop-shadow-xl">Module 1</h1>
                </div>
                
                <p class="text-center">Estimated hrs: 1 - 1.5 | Topics: 7</p>

                <div id="progress-container" class="flex-auto pb-4">
                    <div class="grid grid-cols-10 gap-x-[10px]">
                        <div class="col-span-1">
                            <p class="text-xs text-right"> 60%</p>
                        </div>
                        <div class="col-span-9 relative border-2 w-full border-green-400 rounded-full place-self-center h-[10px]">
                            <div class="col-span-9 absolute bottom-0 top-0 left-0 w-3/5 bg-green-400 rounded-full place-self-center h-[10px]"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="module-box" class="space-y-[10px]">
                <div class="bg-gradient-to-t from-yellow-600 via-transparent via-30% relative h-[300px]">
                    <img src={moduleImage} class="w-full h-full object-cover absolute mix-blend-overlay drop-shadow-xl border-black border-[1.5px]"/>
                    <h1 class="absolute pb-2 inset-x-0 bottom-0 text-white text-2xl font-sans font-bold text-center drop-shadow-xl">Module 1</h1>
                </div>
                
                <p class="text-center">Estimated hrs: 1 - 1.5 | Topics: 7</p>

                <div id="progress-container" class="flex-auto pb-4">
                    <div class="grid grid-cols-10 gap-x-[10px]">
                        <div class="col-span-1">
                            <p class="text-xs text-right"> 60%</p>
                        </div>
                        <div class="col-span-9 relative border-2 w-full border-green-400 rounded-full place-self-center h-[10px]">
                            <div class="col-span-9 absolute bottom-0 top-0 left-0 w-3/5 bg-green-400 rounded-full place-self-center h-[10px]"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="module-box" class="space-y-[10px]">
                <div class="bg-gradient-to-t from-yellow-600 via-transparent via-30% relative h-[300px]">
                    <img src={moduleImage} class="w-full h-full object-cover absolute mix-blend-overlay drop-shadow-xl border-black border-[1.5px]"/>
                    <h1 class="absolute pb-2 inset-x-0 bottom-0 text-white text-2xl font-sans font-bold text-center drop-shadow-xl">Module 1</h1>
                </div>
                
                <p class="text-center">Estimated hrs: 1 - 1.5 | Topics: 7</p>

                <div id="progress-container" class="flex-auto pb-4">
                    <div class="grid grid-cols-10 gap-x-[10px]">
                        <div class="col-span-1">
                            <p class="text-xs text-right"> 60%</p>
                        </div>
                        <div class="col-span-9 relative border-2 w-full border-green-400 rounded-full place-self-center h-[10px]">
                            <div class="col-span-9 absolute bottom-0 top-0 left-0 w-3/5 bg-green-400 rounded-full place-self-center h-[10px]"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="module-box" class="space-y-[10px]">
                <div class="bg-gradient-to-t from-yellow-600 via-transparent via-30% relative h-[300px]">
                    <img src={moduleImage} class="w-full h-full object-cover absolute mix-blend-overlay drop-shadow-xl border-black border-[1.5px]"/>
                    <h1 class="absolute pb-2 inset-x-0 bottom-0 text-white text-2xl font-sans font-bold text-center drop-shadow-xl">Module 1</h1>
                </div>
                
                <p class="text-center">Estimated hrs: 1 - 1.5 | Topics: 7</p>

                <div id="progress-container" class="flex-auto pb-4">
                    <div class="grid grid-cols-10 gap-x-[10px]">
                        <div class="col-span-1">
                            <p class="text-xs text-right"> 60%</p>
                        </div>
                        <div class="col-span-9 relative border-2 w-full border-green-400 rounded-full place-self-center h-[10px]">
                            <div class="col-span-9 absolute bottom-0 top-0 left-0 w-3/5 bg-green-400 rounded-full place-self-center h-[10px]"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="module-box" class="space-y-[10px]">
                <div class="bg-gradient-to-t from-yellow-600 via-transparent via-30% relative h-[300px]">
                    <img src={moduleImage} class="w-full h-full object-cover absolute mix-blend-overlay drop-shadow-xl border-black border-[1.5px]"/>
                    <h1 class="absolute pb-2 inset-x-0 bottom-0 text-white text-2xl font-sans font-bold text-center drop-shadow-xl">Module 1</h1>
                </div>
                
                <p class="text-center">Estimated hrs: 1 - 1.5 | Topics: 7</p>

                <div id="progress-container" class="flex-auto pb-4">
                    <div class="grid grid-cols-10 gap-x-[10px]">
                        <div class="col-span-1">
                            <p class="text-xs text-right"> 60%</p>
                        </div>
                        <div class="col-span-9 relative border-2 w-full border-green-400 rounded-full place-self-center h-[10px]">
                            <div class="col-span-9 absolute bottom-0 top-0 left-0 w-3/5 bg-green-400 rounded-full place-self-center h-[10px]"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="module-box" class="space-y-[10px]">
                <div class="bg-gradient-to-t from-yellow-600 via-transparent via-30% relative h-[300px]">
                    <img src={moduleImage} class="w-full h-full object-cover absolute mix-blend-overlay drop-shadow-xl border-black border-[1.5px]"/>
                    <h1 class="absolute pb-2 inset-x-0 bottom-0 text-white text-2xl font-sans font-bold text-center drop-shadow-xl">Module 1</h1>
                </div>
                
                <p class="text-center">Estimated hrs: 1 - 1.5 | Topics: 7</p>

                <div id="progress-container" class="flex-auto pb-4">
                    <div class="grid grid-cols-10 gap-x-[10px]">
                        <div class="col-span-1">
                            <p class="text-xs text-right"> 60%</p>
                        </div>
                        <div class="col-span-9 relative border-2 w-full border-green-400 rounded-full place-self-center h-[10px]">
                            <div class="col-span-9 absolute bottom-0 top-0 left-0 w-3/5 bg-green-400 rounded-full place-self-center h-[10px]"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="module-box" class="space-y-[10px]">
                <div class="bg-gradient-to-t from-yellow-600 via-transparent via-30% relative h-[300px]">
                    <img src={moduleImage} class="w-full h-full object-cover absolute mix-blend-overlay drop-shadow-xl border-black border-[1.5px]"/>
                    <h1 class="absolute pb-2 inset-x-0 bottom-0 text-white text-2xl font-sans font-bold text-center drop-shadow-xl">Module 1</h1>
                </div>
                
                <p class="text-center">Estimated hrs: 1 - 1.5 | Topics: 7</p>

                <div id="progress-container" class="flex-auto pb-4">
                    <div class="grid grid-cols-10 gap-x-[10px]">
                        <div class="col-span-1">
                            <p class="text-xs text-right"> 60%</p>
                        </div>
                        <div class="col-span-9 relative border-2 w-full border-green-400 rounded-full place-self-center h-[10px]">
                            <div class="col-span-9 absolute bottom-0 top-0 left-0 w-3/5 bg-green-400 rounded-full place-self-center h-[10px]"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="module-box" class="space-y-[10px]">
                <div class="bg-gradient-to-t from-yellow-600 via-transparent via-30% relative h-[300px]">
                    <img src={moduleImage} class="w-full h-full object-cover absolute mix-blend-overlay drop-shadow-xl border-black border-[1.5px]"/>
                    <h1 class="absolute pb-2 inset-x-0 bottom-0 text-white text-2xl font-sans font-bold text-center drop-shadow-xl">Module 1</h1>
                </div>
                
                <p class="text-center">Estimated hrs: 1 - 1.5 | Topics: 7</p>

                <div id="progress-container" class="flex-auto pb-4">
                    <div class="grid grid-cols-10 gap-x-[10px]">
                        <div class="col-span-1">
                            <p class="text-xs text-right"> 60%</p>
                        </div>
                        <div class="col-span-9 relative border-2 w-full border-green-400 rounded-full place-self-center h-[10px]">
                            <div class="col-span-9 absolute bottom-0 top-0 left-0 w-3/5 bg-green-400 rounded-full place-self-center h-[10px]"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="module-box" class="space-y-[10px]">
                <div class="bg-gradient-to-t from-yellow-600 via-transparent via-30% relative h-[300px]">
                    <img src={moduleImage} class="w-full h-full object-cover absolute mix-blend-overlay drop-shadow-xl border-black border-[1.5px]"/>
                    <h1 class="absolute pb-2 inset-x-0 bottom-0 text-white text-2xl font-sans font-bold text-center drop-shadow-xl">Module 1</h1>
                </div>
                
                <p class="text-center">Estimated hrs: 1 - 1.5 | Topics: 7</p>

                <div id="progress-container" class="flex-auto pb-4">
                    <div class="grid grid-cols-10 gap-x-[10px]">
                        <div class="col-span-1">
                            <p class="text-xs text-right"> 60%</p>
                        </div>
                        <div class="col-span-9 relative border-2 w-full border-green-400 rounded-full place-self-center h-[10px]">
                            <div class="col-span-9 absolute bottom-0 top-0 left-0 w-3/5 bg-green-400 rounded-full place-self-center h-[10px]"></div>
                        </div>
                    </div>
                </div>
            </div>

            
            


            
            <!-- <div class="border-black border-2 h-[200px]">Insert Module 2 here</div>
            <div class="border-black border-2 h-[200px]">Insert Module 3 here</div>
            <div class="border-black border-2 h-[200px]">Insert Module 4 here</div>
            <div class="border-black border-2 h-[200px]">Insert Module 5 here</div>
            <div class="border-black border-2 h-[200px]">Insert Module 6 here</div>
            <div class="border-black border-2 h-[200px]">Insert Module 7 here</div>
            <div class="border-black border-2 h-[200px]">Insert Module 8 here</div>
            <div class="border-black border-2 h-[200px]">Insert Module 9 here</div>
            <div class="border-black border-2 h-[200px]">Insert Module 10 here</div>
            <div class="border-black border-2 h-[200px]">Insert Module 11 here</div>
            <div class="border-black border-2 h-[200px]">Insert Module 12 here</div>
            <div class="border-black border-2 h-[200px]">Insert Module 13 here</div>
            <div class="border-black border-2 h-[200px]">Insert Module 14 here</div>
            <div class="border-black border-2 h-[200px]">Insert Module 15 here</div> -->
        </div>
    </div>

    <!-- To fix: overflow scrolling -->
    <!-- <div class="flex absolute top-32" id="body-container">

        <div class="grid grid-cols-3 gap-x-5 gap-y-44 m-20 w-full h-full place-content-center" id="module-outer-container"> -->
            <!-- To add: Filter and search bar -->
            <!-- <div class="col-span-3">
                <div id="search-container">"Filter and search insert here"</div>
            </div>


            <div class= "module-container space-y-2">
                <div class="gradient-container"></div>
                <img id="moduleImage" src={moduleImage} alt="Module Image" class="bg-cover bg-center drop-shadow-md"/>
                <h1>Module 1</h1>
                <p class="text-center">Estimated hrs: 1 - 1.5 | Topics: 7</p> -->

                <!-- To fix: Progress bar subtitle is not aligned properly. -->
                <!-- <div id="progressContainer" class="flex">
                    <div id="myProgress" class="rounded-full">
                        <div id="myBar" style="width: {barWidth}%" class="rounded-full">
                            <p class="text-xs text-center text-white">61%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div> -->
</div>

<style>
    #header-container {
        background-color: #C33521;
        width: 100%;

    }

    #search-container {
        width: 100%;
        border-color: black;
        border-width: 2px;
    }

    /* #module-outer-container {
        border-color: black;
        border-width: 2px;
    }  */


    .circle-placeholder {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #ccc;
        margin-right: 10px;
        display: inline-block;
    }

    .module-container {
        height:300px;
        width:300px;
        position: relative;
    }

    .gradient-container {
        /* background-color: #E9BB40; */
        height: 100%;
        width: 100%;
        background-image: linear-gradient(to top, black, transparent);

        position: absolute;
        top: 0;
        left: 0;
    }

    #moduleImage {
        margin: auto; 
        height: 100%; 
        width: 100%;
        object-fit: cover;
    }

    #myProgress {
        /* width: 300px; */
        background-color: white;
        border-color: #34A853;
        border-width: 2px;
        margin: auto;
        margin-top: 0px;
    }

    #myBar {
        width: 0px;
        height: 10px;
        background-color: #34A853;

    }

    /* .box {
        width: 400px;
        height: 400px;
        background-color: gray;
        margin: auto;
    } */

</style>

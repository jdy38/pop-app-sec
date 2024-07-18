<script lang="ts">
    import { AppBar } from '@skeletonlabs/skeleton';
    import logo from '$lib/assets/logo.webp';
    import avatar from '$lib/assets/avatar1.jpg';
    import moduleImage from '$lib/assets/sample_module_pic.jpg';
    import { ProgressBar } from '@skeletonlabs/skeleton';

    let barWidth = 60;
    // let y;
</script>

<div class="outer">
    <div class="header-container">
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

    <div class="flex">
        <!-- Put side bar here with 1/3 width -->

        <!-- To add: Filter and search bar -->

        <div class="grid grid-cols-3 gap-x-5 gap-y-44 m-20 w-full place-content-center">
            <div class= "module-container space-y-2">
                <div class="gradient-container"></div>
                <img id="moduleImage" src={moduleImage} alt="Module Image" class="bg-cover bg-center drop-shadow-md"/>
                <p class="text-center">Estimated hrs: 1 - 1.5 | Topics: 7</p>

                <!-- To fix: Progress bar subtitle is not aligned properly. -->
                <div id="progressContainer" class="flex">
                    <div id="myProgress" class="rounded-full">
                        <div id="myBar" style="width: {barWidth}%" class="rounded-full">
                            <p class="text-xs text-center text-white">61%</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class= "module-container space-y-2">
                <div class="gradient-container"></div>
                <img id="moduleImage" src={moduleImage} alt="Module Image" class="bg-cover bg-center drop-shadow-md"/>
                <p class="text-center">Estimated hrs: 1 - 1.5 | Topics: 7</p>

                <!-- To fix: Progress bar subtitle is not aligned properly. -->
                <div id="progressContainer" class="flex">
                    <div id="myProgress" class="rounded-full">
                        <div id="myBar" style="width: {barWidth}%" class="rounded-full">
                            <p class="text-xs text-center text-white">61%</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class= "module-container space-y-2">
                <div class="gradient-container"></div>
                <img id="moduleImage" src={moduleImage} alt="Module Image" class="bg-cover bg-center drop-shadow-md"/>
                <p class="text-center">Estimated hrs: 1 - 1.5 | Topics: 7</p>

                <!-- To fix: Progress bar subtitle is not aligned properly. -->
                <div id="progressContainer" class="flex">
                    <div id="myProgress" class="rounded-full">
                        <div id="myBar" style="width: {barWidth}%" class="rounded-full">
                            <p class="text-xs text-center text-white">61%</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class= "module-container space-y-2">
                <div class="gradient-container"></div>
                <img id="moduleImage" src={moduleImage} alt="Module Image" class="bg-cover bg-center drop-shadow-md"/>
                <p class="text-center">Estimated hrs: 1 - 1.5 | Topics: 7</p>

                <!-- To fix: Progress bar subtitle is not aligned properly. -->
                <div id="progressContainer" class="flex">
                    <div id="myProgress" class="rounded-full">
                        <div id="myBar" style="width: {barWidth}%" class="rounded-full">
                            <p class="text-xs text-center text-white">61%</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class= "module-container space-y-2">
                <div class="gradient-container"></div>
                <img id="moduleImage" src={moduleImage} alt="Module Image" class="bg-cover bg-center drop-shadow-md"/>
                <p class="text-center">Estimated hrs: 1 - 1.5 | Topics: 7</p>

                <!-- To fix: Progress bar subtitle is not aligned properly. -->
                <div id="progressContainer" class="flex">
                    <div id="myProgress" class="rounded-full">
                        <div id="myBar" style="width: {barWidth}%" class="rounded-full">
                            <p class="text-xs text-center text-white">61%</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class= "module-container space-y-2">
                <div class="gradient-container"></div>
                <img id="moduleImage" src={moduleImage} alt="Module Image" class="bg-cover bg-center drop-shadow-md"/>
                <p class="text-center">Estimated hrs: 1 - 1.5 | Topics: 7</p>

                <!-- To fix: Progress bar subtitle is not aligned properly. -->
                <div id="progressContainer" class="flex">
                    <div id="myProgress" class="rounded-full">
                        <div id="myBar" style="width: {barWidth}%" class="rounded-full">
                            <p class="text-xs text-center text-white">61%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .header-container {
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
        /* display: block; */
    }

    #myProgress {
        width: 300px;
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

<template>
    <header class="w-fullh-[50px] shadow-md">
        <div class="flex justify-between py-5 align-middle">
            <div class="flex ml-6">
                <Icon name="stash:burger-classic-duotone" class="w-6 h-6 text-gray-900 dark:text-gray-300"/>
            </div>
            <div class="hidden gap-10 mr-6 md:flex">
                <span class="font-mono text-gray-900 hover:-translate-y-1 dark:text-gray-300">Education</span>
                <span class="font-mono text-gray-900 hover:-translate-y-1 dark:text-gray-300">Skills</span>
                <span class="font-mono text-gray-900 hover:-translate-y-1 dark:text-gray-300">Experience</span>
                <span class="font-mono text-gray-900 hover:-translate-y-1 dark:text-gray-300">Contact</span>
                <span class="font-mono text-gray-900 hover:-translate-y-1 dark:text-gray-300">About me</span>
            </div>
        </div>
    </header>

    <main class="gap-4 px-4 mt-4 ">
        <div class="relative h-[850px] w-full bg-gray-900 rounded-xl">
            <img src="/public/images/photo-1519681393784-d120267933ba.jpg" class="absolute inset-0 object-cover w-full h-full shadow-md opacity-50 rounded-xl grayscale"/>
            <span class="absolute inset-0 flex items-center justify-center text-5xl font-bold text-white md:text-7xl">
                <span class="text-center">Hello, I'm Meas Vathanakvisal</span> 
            </span>
        </div>

        <!-- About Me -->
        <div class="mt-24 md:px-64">
            <h1 class="pb-4 font-mono text-xl text-center">About Me</h1>
            <UDivider orientation="horizontal"/>
        </div>

        <div class="flex flex-col gap-4 mt-10 md:flex-row md:px-64">
            <div class="flex items-center justify-center md:w-[600px]">
                <img src="/public/images/Nezu_Full_Body.webp" alt="Photo" class="w-48 h-56 sm:items-center grayscale"/>
            </div>
            
            <div class="flex flex-col w-full px-10 ">
                <div class="w-full ">
                    <h3 class="font-mono">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</h3>
                </div>
                <div class="w-full ">
                    <p class="opacity-50">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspi unde omnis iste natus error sit voluptatem accusantium doloremque lauda ntium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam vo luptatem quia voluptas sit aspernatur aut odit aut fugit,</p>
                </div>
                <UDivider orientation="horizontal" class="px-10 py-4"/>

                <div>
                    <div class="hidden text-center md:grid md:grid-cols-3 ">
                        <span class="font-mono">Email</span>
                        <span class="font-mono">Phone Number</span>
                        <span class="font-mono">Telegram</span>
                        <span class="font-mono opacity-50 ">measvathanakvisal@gmail.com</span>
                        <span class="font-mono opacity-50 ">+855969799974</span>
                        <span class="font-mono opacity-50 ">096 979 997 4</span>
                    </div>
                    <div class="grid grid-cols-1 gap-2 text-center md:grid-cols-3 md:hidden">
                        <span class="font-mono">Email</span>
                        <span class="font-mono opacity-50 ">measvathanakvisal@gmail.com</span>
                        <span class="font-mono">Phone Number</span>
                        <span class="font-mono opacity-50 ">+855969799974</span>
                        <span class="font-mono">Telegram</span>
                        <span class="font-mono opacity-50 ">096 979 997 4</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- About Me End -->

        <!-- Education And Experience -->
        <div class="mt-24 md:px-64">
            <h1 class="pb-4 font-mono text-xl text-center">Education & Experience</h1>
            <UDivider orientation="horizontal"/>
        </div>

        <div class="mt-10 md:px-64">
            <div class="grid items-center justify-center grid-cols-1 gap-32 md:grid-cols-2">
                <!-- Left Stepper -->
                <div class="flex items-center flex-col justify-center font-[sans-serif] w-max">
                    <h1 class="pb-4 font-mono text-lg text-center">Education</h1>
                    <div class="relative flex flex-col items-center">
                        <div class="absolute top-0 ml-4 left-full w-max">
                            <p class="text-[10px] font-mono text-gray-400">2008-2014</p>
                            <h6 class="font-mono text-sm text-gray-800">Primary School</h6>
                            <p class="text-[10px] font-mono text-gray-400">Private School of Vattanac Vichea</p>
                        </div>
                        <div class="w-7 h-7 shrink-0 mx-[-1px] border-2 border-gray-500 flex items-center justify-center rounded-full">
                            <span class="w-3 h-3 bg-gray-500 rounded-full"></span>
                        </div>
                        <div class="w-0.5 h-28 bg-gray-500"></div>
                    </div>
                    <div class="relative flex flex-col items-center">
                        <div class="absolute top-0 ml-4 left-full w-max">
                            <p class="text-[10px] font-mono text-gray-400">2014-2020</p>
                            <h6 class="font-mono text-sm text-gray-800">High School</h6>
                            <p class="text-[10px] font-mono text-gray-400">Udom Vichea High School</p>
                        </div>
                        <div class="w-7 h-7 shrink-0 mx-[-1px] border-2 border-gray-500 flex items-center justify-center rounded-full">
                            <span class="w-3 h-3 bg-gray-500 rounded-full"></span>
                        </div>
                        <div class="w-0.5 h-28 bg-gray-500"></div>
                    </div>
                    <div class="relative flex flex-col items-center">
                        <div class="absolute top-0 ml-4 left-full w-max">
                            <p class="text-[10px] font-mono text-gray-400">2020-2023</p>
                            <h6 class="font-mono text-sm text-gray-800">Bachelor Degree of MIS</h6>
                            <p class="text-[10px] font-mono text-gray-400">SETEC Institute</p>
                        </div>
                        <div class="w-7 h-7 shrink-0 mx-[-1px] border-2 border-gray-500 flex items-center justify-center rounded-full">
                            <span class="w-3 h-3 bg-gray-500 rounded-full"></span>
                        </div>
                        <div class="w-0.5 h-28 bg-gray-500"></div>
                    </div>
                    <div class="relative flex flex-col items-center">
                        <div class="absolute top-0 ml-4 left-full w-max">
                            <p class="text-[10px] font-mono text-gray-400">2020-2023</p>
                            <h6 class="font-mono text-sm text-gray-800">Software Development</h6>
                            <p class="text-[10px] font-mono text-gray-400">Step IT Academy</p>
                        </div>
                        <div class="w-7 h-7 shrink-0 mx-[-1px] border-2 border-gray-500 flex items-center justify-center rounded-full">
                            <span class="w-3 h-3 bg-gray-500 rounded-full"></span>
                        </div>
                    </div>
                </div>
                <!-- Left Stepper End -->

                <!-- Right Stepper -->
                <div class="flex items-center flex-col justify-center font-[sans-serif] w-max">
                    <h1 class="pb-4 font-mono text-lg text-center">Experience</h1>
                    <div class="relative flex flex-col items-center">
                        <div class="absolute top-0 ml-4 left-full w-max">
                            <p class="text-[10px] font-bold text-gray-400">STEP 3</p>
                            <h6 class="text-sm font-bold text-gray-800">Subscription plan</h6>
                        </div>
                        <div class="w-7 h-7 shrink-0 mx-[-1px] border-2 border-gray-500 flex items-center justify-center rounded-full">
                            <span class="w-3 h-3 bg-gray-500 rounded-full"></span>
                        </div>
                        <div class="w-0.5 h-28 bg-gray-500"></div>
                    </div>
                    <div class="relative flex flex-col items-center">
                        <div class="absolute top-0 ml-4 left-full w-max">
                            <p class="text-[10px] font-bold text-gray-400">STEP 3</p>
                            <h6 class="text-sm font-bold text-gray-800">Subscription plan</h6>
                        </div>
                        <div class="w-7 h-7 shrink-0 mx-[-1px] border-2 border-gray-500 flex items-center justify-center rounded-full">
                            <span class="w-3 h-3 bg-gray-500 rounded-full"></span>
                        </div>
                        <div class="w-0.5 h-28 bg-gray-500"></div>
                    </div>
                    <div class="relative flex flex-col items-center">
                        <div class="absolute top-0 ml-4 left-full w-max">
                            <p class="text-[10px] font-bold text-gray-400">STEP 3</p>
                            <h6 class="text-sm font-bold text-gray-800">Subscription plan</h6>
                        </div>
                        <div class="w-7 h-7 shrink-0 mx-[-1px] border-2 border-gray-500 flex items-center justify-center rounded-full">
                            <span class="w-3 h-3 bg-gray-500 rounded-full"></span>
                        </div>
                        <div class="w-0.5 h-28 bg-gray-500"></div>
                    </div>
                    <div class="relative flex flex-col items-center">
                        <div class="absolute top-0 ml-4 left-full w-max">
                            <p class="text-[10px] font-bold text-gray-400">STEP 4</p>
                            <h6 class="text-sm text-gray-400">Payment details</h6>
                        </div>
                        <div class="w-7 h-7 shrink-0 mx-[-1px] border-2 border-gray-500 flex items-center justify-center rounded-full">
                            <span class="w-3 h-3 bg-gray-500 rounded-full"></span>
                        </div>
                    </div>
                </div>
                <!-- Right Stepper End -->
            </div>
        </div>
        <!-- Experience End -->

        <!-- Skill -->
        <div class="mt-24 md:px-64">
            <h1 class="pb-4 font-mono text-xl text-center">Skills</h1>
            <UDivider orientation="horizontal"/>
        </div>

        <div class="grid grid-cols-1 gap-8 mt-10 md:px-64 md:grid-cols-2">
            <div class="grid">
                    <span class="font-mono">HTML</span>
                    <div class="bg-gray-200 rounded-full w-full h-2.5">
                        <div class="h-full bg-gray-500 rounded-full w-96"></div>
                    </div>
            </div>
            <div class="grid">
                    <span class="font-mono">CSS</span>
                    <div class="bg-gray-200 rounded-full w-full h-2.5">
                        <div class="h-full bg-gray-500 rounded-full w-96"></div>
                    </div>
            </div>
            <div class="grid">
                    <span class="font-mono">Javascript</span>
                    <div class="bg-gray-200 rounded-full w-full h-2.5">
                        <div class="w-56 h-full bg-gray-500 rounded-full"></div>
                    </div>
            </div>
            <div class="grid">
                    <span class="font-mono">Typescript</span>
                    <div class="bg-gray-200 rounded-full w-full h-2.5">
                        <div class="w-64 h-full bg-gray-500 rounded-full"></div>
                    </div>
            </div>
            <div class="grid">
                    <span class="font-mono">Java</span>
                    <div class="bg-gray-200 rounded-full w-full h-2.5">
                        <div class="h-full bg-gray-500 rounded-full w-72"></div>
                    </div>
            </div>
            <div class="grid">
                    <span class="font-mono">Spring Boot</span>
                    <div class="bg-gray-200 rounded-full w-full h-2.5">
                        <div class="h-full bg-gray-500 rounded-full w-80"></div>
                    </div>
            </div>
            <div class="grid">
                    <span class="font-mono">React JS</span>
                    <div class="bg-gray-200 rounded-full w-full h-2.5">
                        <div class="w-56 h-full bg-gray-500 rounded-full"></div>
                    </div>
            </div>
            <div class="grid">
                    <span class="font-mono">Nuxt JS</span>
                    <div class="bg-gray-200 rounded-full w-full h-2.5">
                        <div class="h-full bg-gray-500 rounded-full w-80"></div>
                </div>
            </div>
        </div>
        <!-- Skill End -->
        
    </main>

    <footer class="px-16 py-6 mt-10 font-sans tracking-wide text-gray-300 ">
        <div class="flex flex-wrap items-center justify-between gap-4 text-center max-lg:flex-col">
            <p class="text-[15px] leading-loose">© measvathanakvisal. All rights reserved.</p>
        </div>
    </footer>
</template>

<script setup>
</script>
<template>
    <header class="w-fullh-[50px] shadow-md">
        <div class="flex justify-between py-5 align-middle">
            <div class="flex ml-6">
                <Icon name="stash:burger-classic-duotone" class="w-6 h-6 text-gray-900 dark:text-gray-300"/>
            </div>
            <div class="flex gap-10 mr-6">
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
            <img src="/public/images/photo-1519681393784-d120267933ba.avif" class="absolute inset-0 object-cover w-full h-full shadow-md opacity-50 rounded-xl grayscale"/>
            <span class="absolute inset-0 flex items-center justify-center font-bold text-white text-7xl">
                Hello, I'm Meas Vathanakvisal
            </span>
        </div>

        <!-- About Me -->
        <div class="px-64 mt-24">
            <h1 class="pb-4 font-mono text-xl text-center">About Me</h1>
            <UDivider orientation="horizontal"/>
        </div>

        <div class="flex justify-start gap-4 px-64 mt-10">
            <div class="flex w-[600px]">
                <img src="/public/images/Nezu_Full_Body.webp" alt="Photo" class="w-48 h-56 grayscale"/>
            </div>
            
            <div class="flex flex-col w-full px-10 ">
                <div class="w-full ">
                    <h3 class="font-mono">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</h3>
                </div>
                <div class="w-full ">
                    <p class="opacity-50">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspi unde omnis iste natus error sit voluptatem accusantium doloremque lauda ntium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam vo luptatem quia voluptas sit aspernatur aut odit aut fugit,</p>
                </div>
                <UDivider orientation="horizontal" class="px-10 py-4"/>

                <div class="grid grid-cols-3 gap-4 text-center opacity-50">
                    <!-- Labels -->
                    <span class="font-mono">Email</span>
                    <span class="font-mono">Phone Number</span>
                    <span class="font-mono">Telegram</span>

                    <!-- Values -->
                    <span class="font-mono ">measvathanakvisal@gmail.com</span>
                    <span class="font-mono ">+855969799974</span>
                    <span class="font-mono ">096 979 997 4</span>
                </div>
            </div>
        </div>
        <!-- About Me End -->

        <!-- Education -->
        <div class="px-64 mt-24">
            <h1 class="pb-4 font-mono text-xl text-center">Education</h1>
            <UDivider orientation="horizontal"/>
        </div>

        <div class="flex justify-center gap-4 mt-10 ">
            <div class="flex justify-center">
                <div>
                    <div class="flex items-center">
                        <div class="w-7 h-7 shrink-0 mx-[-1px] bg-gray-300 flex items-center justify-center rounded-full">
                            <span class="w-3 h-3 bg-white rounded-full"></span>
                        </div>
                        <div class="w-72 h-[3px] bg-gray-500"></div>
                    </div>
                    <div class="mt-2">
                        <h6 class="font-mono text-sm font-bold text-gray-500">2008-2014</h6>
                        <p class="font-mono text-sm text-gray-500">Primary School</p>
                        <p class="font-mono text-xs text-gray-500">Private School Vattnac Vichea</p>
                    </div>
                </div>
                <div>
                    <div class="flex items-center">
                        <div class="w-7 h-7 shrink-0 mx-[-1px] bg-gray-300 flex items-center justify-center rounded-full">
                            <span class="w-3 h-3 bg-white rounded-full"></span>
                        </div>
                        <div class="w-72 h-[3px] bg-gray-500"></div>
                    </div>
                    <div class="mt-2">
                        <h6 class="font-mono text-sm font-bold text-gray-500">2014-2020</h6>
                        <p class="font-mono text-sm text-gray-500">High School</p>
                        <p class="font-mono text-xs text-gray-500">Udom Vichea High School</p>
                    </div>
                </div>
                <div>
                    <div class="flex items-center">
                        <div class="w-7 h-7 shrink-0 mx-[-1px] bg-gray-300 flex items-center justify-center rounded-full">
                            <span class="w-3 h-3 bg-white rounded-full"></span>
                        </div>
                        <div class="w-72 h-[3px] bg-gray-500"></div>
                    </div>
                    <div class="mt-2">
                        <h6 class="font-mono text-sm font-bold text-gray-500">2020-2023</h6>
                        <p class="font-mono text-sm text-gray-500">Bachelor Degree of MIS</p>
                        <p class="font-mono text-xs text-gray-500">SETEC Institute</p>
                    </div>
                </div>
                <div>
                    <div class="flex items-center">
                        <div class="w-7 h-7 shrink-0 mx-[-1px] bg-gray-900 flex items-center justify-center rounded-full">
                            <span class="w-3 h-3 bg-white rounded-full"></span>
                        </div>
                    </div>
                    <div class="mt-2">
                        <h6 class="font-mono text-sm font-bold text-gray-500">2024-Today</h6>
                        <p class="font-mono text-sm text-gray-500">Software Development Course</p>
                        <p class="font-mono text-xs text-gray-500">Step IT Academy Cambodia</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Education End -->

        <!-- Skill -->
        <div class="px-64 mt-24">
            <h1 class="pb-4 font-mono text-xl text-center">Skills</h1>
            <UDivider orientation="horizontal"/>
        </div>

        <div class="grid grid-cols-2 gap-8 px-64 mt-10">
            <div class="grid">
                <div class="">
                    <span class="font-mono">HTML</span>
                    <div class="bg-gray-200 rounded-full w-full h-2.5">
                        <div class="h-full bg-gray-500 rounded-full w-96"></div>
                    </div>
                </div>
            </div>
            <div class="grid">
                <div class="">
                    <span class="font-mono">CSS</span>
                    <div class="bg-gray-200 rounded-full w-full h-2.5">
                        <div class="h-full bg-gray-500 rounded-full w-96"></div>
                    </div>
                </div>
            </div>
            <div class="grid">
                <div class="">
                    <span class="font-mono">Javascript</span>
                    <div class="bg-gray-200 rounded-full w-full h-2.5">
                        <div class="w-56 h-full bg-gray-500 rounded-full"></div>
                    </div>
                </div>
            </div>
            <div class="grid">
                <div class="">
                    <span class="font-mono">Typescript</span>
                    <div class="bg-gray-200 rounded-full w-full h-2.5">
                        <div class="w-64 h-full bg-gray-500 rounded-full"></div>
                    </div>
                </div>
            </div>
            <div class="grid">
                <div class="">
                    <span class="font-mono">Java</span>
                    <div class="bg-gray-200 rounded-full w-full h-2.5">
                        <div class="h-full bg-gray-500 rounded-full w-72"></div>
                    </div>
                </div>
            </div>
            <div class="grid">
                <div class="">
                    <span class="font-mono">Spring Boot</span>
                    <div class="bg-gray-200 rounded-full w-full h-2.5">
                        <div class="h-full bg-gray-500 rounded-full w-80"></div>
                    </div>
                </div>
            </div>
            <div class="grid">
                <div class="">
                    <span class="font-mono">React JS</span>
                    <div class="bg-gray-200 rounded-full w-full h-2.5">
                        <div class="w-56 h-full bg-gray-500 rounded-full"></div>
                    </div>
                </div>
            </div>
            <div class="grid">
                <div class="">
                    <span class="font-mono">Nuxt JS</span>
                    <div class="bg-gray-200 rounded-full w-full h-2.5">
                        <div class="h-full bg-gray-500 rounded-full w-80"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Skill End -->

        <!-- Experience -->
        <div class="px-64 mt-24">
            <h1 class="pb-4 font-mono text-xl text-center">Experience</h1>
            <UDivider orientation="horizontal"/>
        </div>

        <div class="grid grid-cols-2 gap-8 px-64 mt-10 mb-64">
            <div class="grid">
                <div class="">
                    <span class="font-mono">HTML</span>
                    <div class="bg-gray-200 rounded-full w-full h-2.5">
                        <div class="h-full bg-gray-500 rounded-full w-96"></div>
                    </div>
                </div>
            </div>
            <div class="grid">
                <div class="">
                    <span class="font-mono">CSS</span>
                    <div class="bg-gray-200 rounded-full w-full h-2.5">
                        <div class="h-full bg-gray-500 rounded-full w-96"></div>
                    </div>
                </div>
            </div>
            <div class="grid">
                <div class="">
                    <span class="font-mono">Javascript</span>
                    <div class="bg-gray-200 rounded-full w-full h-2.5">
                        <div class="w-56 h-full bg-gray-500 rounded-full"></div>
                    </div>
                </div>
            </div>
            <div class="grid">
                <div class="">
                    <span class="font-mono">Typescript</span>
                    <div class="bg-gray-200 rounded-full w-full h-2.5">
                        <div class="w-64 h-full bg-gray-500 rounded-full"></div>
                    </div>
                </div>
            </div>
            <div class="grid">
                <div class="">
                    <span class="font-mono">Java</span>
                    <div class="bg-gray-200 rounded-full w-full h-2.5">
                        <div class="h-full bg-gray-500 rounded-full w-72"></div>
                    </div>
                </div>
            </div>
            <div class="grid">
                <div class="">
                    <span class="font-mono">Spring Boot</span>
                    <div class="bg-gray-200 rounded-full w-full h-2.5">
                        <div class="h-full bg-gray-500 rounded-full w-80"></div>
                    </div>
                </div>
            </div>
            <div class="grid">
                <div class="">
                    <span class="font-mono">React JS</span>
                    <div class="bg-gray-200 rounded-full w-full h-2.5">
                        <div class="w-56 h-full bg-gray-500 rounded-full"></div>
                    </div>
                </div>
            </div>
            <div class="grid">
                <div class="">
                    <span class="font-mono">Nuxt JS</span>
                    <div class="bg-gray-200 rounded-full w-full h-2.5">
                        <div class="h-full bg-gray-500 rounded-full w-80"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Experience End -->
        
    </main>

    <footer class="px-16 py-6 font-sans tracking-wide text-gray-300 ">
      <div class="flex flex-wrap items-center justify-between gap-4 text-center max-lg:flex-col">
        <p class="text-[15px] leading-loose">© measvathanakvisal. All rights reserved.</p>

        <ul class="flex flex-wrap space-x-6 gap-y-2 max-lg:justify-center">
          <li><a href="#" class="text-[15px] ">Terms of Service</a></li>
          <li><a href="#" class="text-[15px] ">Privacy Policy</a></li>
          <li><a href="#" class="text-[15px] ">Contact</a></li>
        </ul>
      </div>
    </footer>
</template>

<script setup>
</script>
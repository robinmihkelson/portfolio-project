<template>
    <section class="relative bg-center h-screen w-full bg-cover"
        style="background-image: url('/src/assets/smokey.png');">
        <div class="flex justify-center">
            <div
                class="backdrop-blur-md w-full sm:w-[650px] h-[75px] flex justify-center gap-6 mt-4 border-2 border-[#66FCF1]">
                <router-link to="/frontpage" href class="text-[#C5C6C7] text-sm sm:text-base mt-6">robin.</router-link>
                <router-link to="/services" href class="text-[#C5C6C7] text-sm sm:text-base mt-6">SERVICES</router-link>
                <router-link to="/about" href class="text-[#C5C6C7] text-sm sm:text-base mt-6">ABOUT</router-link>
                <button class="text-[#C5C6C7] text-sm sm:text-base">PAGES</button>
                <router-link to="/services"
                    class="w-24 h-14 bg-[#66FCF1] mt-2 hover:bg-orange-300 text-xs sm:text-base flex items-center justify-center px-4">
                    LET'S TALK
                </router-link>


            </div>
        </div>
    </section>
</template>
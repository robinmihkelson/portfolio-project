<script setup>

</script>

<template>
  <section class="relative bg-center h-screen w-full bg-cover" style="background-image: url('/src/assets/smokey.png');">
    <div class="flex justify-center">
      <div class="backdrop-blur-md w-full sm:w-[650px] h-[75px] flex justify-center gap-6 mt-4 border-2 border-[#66FCF1]">
        <router-link to="/frontpage" href class="text-[#C5C6C7] text-sm sm:text-base mt-6">robin.</router-link >
        <router-link to="/services" href class="text-[#C5C6C7] text-sm sm:text-base mt-6">SERVICES</router-link >
        <router-link to="/about" href class="text-[#C5C6C7] text-sm sm:text-base mt-6">ABOUT</router-link >
        <button class="text-[#C5C6C7] text-sm sm:text-base">PAGES</button><script setup>

</script>

<style>
@keyframes fadeRight {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.element {
  animation: fadeRight 1s ease-in forwards; /* 1s = 1000ms, ease-in, and animation runs once */
}
</style>

<template>
  <section class="relative bg-center h-screen w-full bg-cover" style="background-image: url('/src/assets/smokey.png');">
    <div class="flex justify-center">
      <div class="backdrop-blur-md w-full sm:w-[650px] h-[75px] flex justify-center gap-6 mt-4 border-2 border-[#66FCF1]">
        <router-link to="/frontpage" href class="text-[#C5C6C7] text-sm sm:text-base mt-6">robin.</router-link >
        <router-link to="/services" href class="text-[#C5C6C7] text-sm sm:text-base mt-6">SERVICES</router-link >
        <router-link to="/about" href class="text-[#C5C6C7] text-sm sm:text-base mt-6">ABOUT</router-link >
        <button class="text-[#C5C6C7] text-sm sm:text-base">PAGES</button>
        <router-link to="/services" href class="w-24 h-14 bg-[#66FCF1] mt-2 hover:bg-orange-300 text-xs sm:text-base flex justify-center">LET'S TALK</router-link >
      </div>
    </div>

    <div class="element default text-center mt-32 sm:mt-72">
      <h1 class="text-[#66FCF1] font-serif text-[48px] sm:text-[100px]">Web Designer</h1>
      <h1 class="text-[#66FCF1] italic font-serif text-[48px] sm:text-[100px]">& Developer</h1>
    </div>
  </section>

  <div class="bg-[#0B0C10] h-[5450px] w-full">
    <div class="flex justify-center flex-wrap pt-24 gap-12 sm:gap-28">
      <img class="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px]" src="/src/assets/js.png" alt="">
      <img class="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px]" src="/src/assets/python.png" alt="">
      <img class="h-[80px] w-[140px] sm:h-[100px] sm:w-[170px]" src="/src/assets/php.png" alt="">
      <img class="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px]" src="/src/assets/tailwind-logo.png" alt="">
    </div>

    <div class="flex flex-wrap justify-center gap-8 mt-32 sm:gap-8">
      <div
        class="bg-[#1F2833] w-full sm:w-[400px] h-64 bg-opacity-45 transition-transform transform hover:scale-105 hover:translate-y-1">
        <p class="text-[#66FCF1] mt-8 mx-8 text-opacity-65">01</p>
        <p class="text-[#66FCF1] mt-4 mx-8 font-serif text-opacity-65 text-2xl">WEB DESIGN</p>
        <p class="text-[#C5C6C7] mt-1 mx-8 font-serif text-opacity-65">Visually stunning web designs that captivate your
          audience.</p>
        <div class="flex">
          <button class="h-[30px] w-[30px] rounded-2xl border-[#C5C6C7] border-opacity-15 border-[1px] mt-3 mx-8">
            <img class="mx-[5px]" src="/src/assets/ph_arrow-up-right-light.png" alt="">
          </button>
          <p class="text-[#66FCF1] mt-4 -mx-5 font-serif text-opacity-65">ABOUT WEBDESIGN</p>
        </div>
      </div>

      <div
        class="bg-[#1F2833] w-full sm:w-[400px] h-64 bg-opacity-45 transition-transform transform hover:scale-105 hover:translate-y-1">
        <p class="text-[#66FCF1] mt-8 mx-8 text-opacity-65">02</p>
        <p class="text-[#66FCF1] mt-4 mx-8 font-serif text-opacity-65 text-2xl">DEVELOPMENT</p>
        <p class="text-[#C5C6C7] mt-1 mx-8 font-serif text-opacity-65">Get custom web development solutions that are
          tailored to your needs.</p>
        <div class="flex">
          <button class="h-[30px] w-[30px] rounded-2xl border-[#C5C6C7] border-opacity-15 border-[1px] mt-3 mx-8">
            <img class="mx-[5px]" src="/src/assets/ph_arrow-up-right-light.png" alt="">
          </button>
          <p class="text-[#66FCF1] mt-4 -mx-5 font-serif text-opacity-65">ABOUT WEBFLOW</p>
        </div>
      </div>

      <div
        class="bg-[#1F2833] w-full sm:w-[400px] h-64 bg-opacity-45 transition-transform transform hover:scale-105 hover:translate-y-1">
        <p class="text-[#66FCF1] mt-8 mx-8 text-opacity-65">03</p>
        <p class="text-[#66FCF1] mt-4 mx-8 font-serif text-opacity-65 text-2xl">CONTENT & SEO</p>
        <p class="text-[#C5C6C7] mt-1 mx-8 font-serif text-opacity-65">Proven SEO strategies to enhance your online
          performance.</p>
        <div class="flex">
          <button class="h-[30px] w-[30px] rounded-2xl border-[#C5C6C7] border-opacity-15 border-[1px] mt-3 mx-8">
            <img class="mx-[5px]" src="/src/assets/ph_arrow-up-right-light.png" alt="">
          </button>
          <p class="text-[#66FCF1] mt-4 -mx-5 font-serif text-opacity-65">ABOUT SEO</p>
        </div>
      </div>
    </div>

    <div class="flex justify-between flex-wrap mt-20 mx-6 sm:mx-36">
      <p class="text-[#66FCF1] text-4xl font-serif">Selected <span class="italic">Work</span></p>
      <div class="flex items-center gap-2">
        <button class="h-[30px] w-[30px] rounded-2xl border-[#C5C6C7] border-opacity-35 border-[1px] ml-4">
          <img class="mx-[5px]" src="/src/assets/ph_arrow-up-right-light.png" alt="">
        </button>
        <p class="text-[#66FCF1] font-serif text-opacity-65 ml-2 mt-1">SEE ALL</p>
      </div>
    </div>

    <div class="fadeup flex flex-wrap justify-center gap-6 mt-10">
      <section class="h-[430px] w-full sm:w-[610px] border-2 border-gray-800 bg-cover bg-center"
        style="background-image: url('/src/assets/IMG1.png');"></section>
      <section class="h-[430px] w-full sm:w-[610px] border-2 border-gray-800 bg-cover bg-center"
        style="background-image: url('/src/assets/IMG2.png');"></section>
    </div>

    <div class="element flex flex-wrap justify-center gap-6 mt-6">
      <section class="h-[430px] w-full sm:w-[610px] border-2 border-gray-800 bg-cover bg-center"
        style="background-image: url('/src/assets/IMG3.png');"></section>
      <section class="h-[430px] w-full sm:w-[610px] border-2 border-gray-800 bg-cover bg-center"
        style="background-image: url('/src/assets/IMG4.png');"></section>
    </div>
    <div class="text-center">
      <h1 class="text-[#C5C6C7] mt-24 text-[15px] text-opacity-65">THE PROCESS</h1>
      <p class="text-[48px] sm:text-[100px] text-[#66FCF1] mt-6 font-serif">Your Website</p>
      <p class="text-[48px] sm:text-[100px] text-[#66FCF1] italic font-serif -mt-6">in 5 steps</p>
      <h1 class="text-[#C5C6C7] text-opacity-65 text-[15px] mt-6">Our process ensures that we create a website</h1>
      <h1 class="text-[#C5C6C7] text-opacity-65 text-[15px]">tailored to your business needs.</h1>
    </div>

    <div class="flex justify-center">
      <button class="h-[30px] w-[30px] rounded-2xl border-[#C5C6C7] border-opacity-15 border-[1px] mt-12 mx-8">
        <img class="mx-[5px]" src="/src/assets/ph_arrow-down-light.png" alt="">
      </button>
    </div>

    <div class="flex flex-wrap justify-center gap-8 mt-12 sm:mt-24">

      <div
        class="bg-[#1F2833] w-[550px] h-[380px] bg-opacity-45 mx-4 sm:mx-24 mt-8 sm:mt-24 border-2 border-[#66FCF1] border-opacity-15 section-hover p-6">
        <p class="text-[#C5C6C7] text-opacity-45">DO WE MATCH?</p>
        <p class="text-2xl text-[#66FCF1] mt-4">DISCOVERY CALL</p>
        <p class="text-[#C5C6C7] text-opacity-45 mt-4">Before we start, we determine if and how I can help you. What are
          your requirements for your new website? Why do you need a new website? What goals do you have, and what
          problems can we solve with a new website?</p>
        <ul class="list-disc mt-4 text-[#66FCF1] mx-[18px]">
          <li>We get to know each other better</li>
          <li class="mt-4">Determine how I can best assist you</li>
          <li class="mt-4">Understand the goals you have for your website</li>
        </ul>
      </div>

      <div
        class="bg-[#1F2833] w-[550px] h-[380px] bg-opacity-45 mx-4 sm:mx-24 mt-8 sm:mt-[400px] border-2 border-[#66FCF1] border-opacity-15 section-hover p-6">
        <p class="text-[#C5C6C7] text-opacity-45">LOREM IPSUM</p>
        <p class="text-2xl text-[#66FCF1] mt-4">CONCEPT & STRATEGY</p>
        <p class="text-[#C5C6C7] text-opacity-45 mt-4">Together, we develop a strategy that successfully combines your
          goals with the needs of your target audience. Based on this concept, I create the first wireframes and an
          interactive prototype. This provides us with a very good impression of the website and the user interface.</p>
        <ul class="list-disc mt-4 text-[#66FCF1] mx-[18px]">
          <li>UX Design</li>
          <li class="mt-4">Wireframes</li>
          <li class="mt-4">Interactive Prototype</li>
        </ul>
      </div>
    </div>

    <div class="flex flex-wrap justify-center gap-8 mt-12 sm:mt-24">

      <div
        class="bg-[#1F2833] w-[550px] h-[380px] bg-opacity-45 mx-4 sm:mx-24 mt-8 sm:mt-[-12px] border-2 border-[#66FCF1] border-opacity-15 section-hover p-6">
        <p class="text-[#C5C6C7] text-opacity-45">SOME MAGIC</p>
        <p class="text-2xl text-[#66FCF1] mt-4">WEB DESIGN</p>
        <p class="text-[#C5C6C7] text-opacity-45 mt-4">Now comes the magic. Based on the previously developed concept, I
          create a high-end screen design perfectly tailored to your brand. A web design that sets you apart from your
          competition, fits your target audience ideally, and provides an excellent user experience.</p>
        <ul class="list-disc mt-4 text-[#66FCF1] mx-[18px]">
          <li>We get to know each other better</li>
          <li class="mt-4">Interactive prototype of the design</li>
        </ul>
      </div>

      <div
        class="bg-[#1F2833] w-[550px] h-[380px] bg-opacity-45 mx-4 sm:mx-24 mt-8 sm:mt-[270px] border-2 border-[#66FCF1] border-opacity-15 section-hover p-6">
        <p class="text-[#C5C6C7] text-opacity-45">LOREM IPSUM</p>
        <p class="text-2xl text-[#66FCF1] mt-4">CONCEPT & STRATEGY</p>
        <p class="text-[#C5C6C7] text-opacity-45 mt-4">Together, we develop a strategy that successfully combines your
          goals with the needs of your target audience. Based on this concept, I create the first wireframes and an
          interactive prototype. This provides us with a very good impression of the website and the user interface.</p>
        <ul class="list-disc mt-4 text-[#66FCF1] mx-[18px]">
          <li>UX Design</li>
          <li class="mt-4">Wireframes</li>
          <li class="mt-4">Interactive Prototype</li>
        </ul>
      </div>
    </div>

    <div>
      <section class="py-16 px-8 mt-24">
        <div class="text-center mb-12">
          <h2 class="text-[100px] font-serif mb-4 text-[#66FCF1]">What my</h2>
          <h2 class="italic text-[100px] font-serif mb-4 text-[#66FCF1]">clients say</h2>
          <p class="text-gray-400 mb-4">See what my clients have to say about working with me and the</p>
          <p class="text-gray-400 mb-6">results I helped them achieve.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-[#1F2833] bg-opacity-45 p-6 rounded-lg shadow-lg opacity-0 transition-opacity duration-500"
            data-animate>
            <div class="flex items-center gap-4 mb-4">
              <img src="https://via.placeholder.com/50" alt="Logo 1" class="w-12 h-12">
              <div>
                <p class="text-[#66FCF1] font-semibold">John Smith</p>
                <p class="text-gray-400 text-sm">ABC Company</p>
              </div>
            </div>
            <p class="text-[#66FCF1] text-lg font-medium mb-2">Amazing Results with Robin's Premium Web Design Services.
            </p>
            <p class="text-gray-400 text-sm">
              Arik is a top-notch web designer who created a stunning website for my business. I highly recommend his
              services.
            </p>
          </div>

          <div class="bg-[#1F2833] bg-opacity-45 p-6 rounded-lg shadow-lg opacity-0 transition-opacity duration-500"
            data-animate>
            <div class="flex items-center gap-4 mb-4">
              <img src="https://via.placeholder.com/50" alt="Logo 2" class="w-12 h-12">
              <div>
                <p class="text-[#66FCF1] font-semibold">David Kim</p>
                <p class="text-gray-400 text-sm">Design Inc</p>
              </div>
            </div>
            <p class="text-[#66FCF1] text-lg font-medium mb-2">Expert Webflow and SEO Services: Excellent Work, Great
              Results.</p>
            <p class="text-gray-400 text-sm">
              Working with Arik on my website redesign was a fantastic experience. I couldn't be happier with the
              result.
            </p>
          </div>

          <div class="bg-[#1F2833] bg-opacity-45 p-6 rounded-lg shadow-lg opacity-0 transition-opacity duration-500"
            data-animate>
            <div class="flex items-center gap-4 mb-4">
              <img src="https://via.placeholder.com/50" alt="Logo 3" class="w-12 h-12">
              <div>
                <p class="text-[#66FCF1] font-semibold">Karen Lee</p>
                <p class="text-gray-400 text-sm">Redwood Technologies</p>
              </div>
            </div>
            <p class="text-[#66FCF1] text-lg font-medium mb-2">Professional, Collaborative Web Design Experience with
              Arik.</p>
            <p class="text-gray-400 text-sm">
              I was blown away by his expertise and professionalism. Highly recommend Arik for all your web development
              needs.
            </p>
          </div>
        </div>
      </section>
      <div>
        <div class="bg-[#0B0C10] w-full h-[1200px]">
          <div class="flex flex-col items-center justify-center min-h-screen text-center px-4">
            <p class="uppercase text-sm tracking-widest text-gray-400 mb-4">Project in Mind?</p>
            <h1 class="text-4xl md:text-6xl font-serif text-[#66FCF1] leading-tight">
              Let’s make your <span class="italic">Website shine</span>
            </h1>
            <p class="mt-4 text-gray-400 text-base max-w-lg">
              Premium web design, webflow, and SEO services to help your business stand out.
            </p>
            <a href="#"
              class="mt-6 bg-[#66FCF1] text-black py-3 px-6 rounded-lg font-medium text-sm transition-transform transform hover:scale-105 hover:translate-y-1 hover:bg-[#206e69]">
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>


  <footer class="w-full py-10 bg-[#0B0C10] text-gray-400">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left px-4">

      <div>
        <p class="text-xl font-bold text-[#66FCF1]">arik.</p>
        <div class="flex justify-center md:justify-start space-x-4 mt-4">
          <a href="#" class="hover:text-[#206e69] transform hover:scale-110 transition">Instagram</a>
          <a href="#" class="hover:text-[#206e69] transform hover:scale-110 transition">Twitter</a>
          <a href="#" class="hover:text-[#206e69] transform hover:scale-110 transition">Dribbble</a>
          <a href="#" class="hover:text-[#206e69] transform hover:scale-110 transition">Behance</a>
        </div>
      </div>

      <div>
        <h3 class="font-semibold text-[#66FCF1] mb-4">Pages</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-v transform hover:translate-x-2 transition">Home</a></li>
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">Services</a>
          </li>
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">About</a></li>
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">Contact</a>
          </li>
        </ul>
        <a href="#"
          class="mt-4 inline-block text-[#66FCF1] hover:text-[#206e69] transform hover:translate-x-2 transition">
          More Templates &rarr;
        </a>
      </div>

      <div>
        <h3 class="font-semibold text-[#66FCF1] mb-4">CMS</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">Work</a></li>
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">Work Single</a>
          </li>
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">Blog</a></li>
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">Blog Post</a>
          </li>
        </ul>
      </div>


      <div>
        <h3 class="font-semibold text-[#66FCF1] mb-4">Utility Pages</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">404 Error
              Page</a></li>
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">Password
              Protected</a></li>
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">Styleguide</a>
          </li>
          <li><a href="#" class="hover:text-[#206e69]transform hover:translate-x-2 transition">Licensing</a>
          </li>
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">Changelog</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="mt-10 text-center text-sm text-gray-500">
      &copy; 2022 Made by Pavel Cola. Powered by Framer.
    </div>
  </footer>
</template>
        <router-link to="/services" href class="w-24 h-14 bg-[#66FCF1] mt-2 hover:bg-orange-300 text-xs sm:text-base flex justify-center">LET'S TALK</router-link >
      </div>
    </div>

    <div class="text-center mt-32 sm:mt-72">
      <h1 class="text-[#66FCF1] font-serif text-[48px] sm:text-[100px]">Web Designer</h1>
      <h1 class="text-[#66FCF1] italic font-serif text-[48px] sm:text-[100px]">& Developer</h1>
    </div>
  </section>

  <div class="bg-[#0B0C10] h-[5450px] w-full">
    <div class="flex justify-center flex-wrap pt-24 gap-12 sm:gap-28">
      <img class="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px]" src="/src/assets/js.png" alt="">
      <img class="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px]" src="/src/assets/python.png" alt="">
      <img class="h-[80px] w-[140px] sm:h-[100px] sm:w-[170px]" src="/src/assets/php.png" alt="">
      <img class="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px]" src="/src/assets/tailwind-logo.png" alt="">
    </div>

    <div class="flex flex-wrap justify-center gap-8 mt-32 sm:gap-8">
      <div
        class="bg-[#1F2833] w-full sm:w-[400px] h-64 bg-opacity-45 transition-transform transform hover:scale-105 hover:translate-y-1">
        <p class="text-[#66FCF1] mt-8 mx-8 text-opacity-65">01</p>
        <p class="text-[#66FCF1] mt-4 mx-8 font-serif text-opacity-65 text-2xl">WEB DESIGN</p>
        <p class="text-[#C5C6C7] mt-1 mx-8 font-serif text-opacity-65">Visually stunning web designs that captivate your
          audience.</p>
        <div class="flex">
          <button class="h-[30px] w-[30px] rounded-2xl border-[#C5C6C7] border-opacity-15 border-[1px] mt-3 mx-8">
            <img class="mx-[5px]" src="/src/assets/ph_arrow-up-right-light.png" alt="">
          </button>
          <p class="text-[#66FCF1] mt-4 -mx-5 font-serif text-opacity-65">ABOUT WEBDESIGN</p>
        </div>
      </div>

      <div
        class="bg-[#1F2833] w-full sm:w-[400px] h-64 bg-opacity-45 transition-transform transform hover:scale-105 hover:translate-y-1">
        <p class="text-[#66FCF1] mt-8 mx-8 text-opacity-65">02</p>
        <p class="text-[#66FCF1] mt-4 mx-8 font-serif text-opacity-65 text-2xl">DEVELOPMENT</p>
        <p class="text-[#C5C6C7] mt-1 mx-8 font-serif text-opacity-65">Get custom web development solutions that are
          tailored to your needs.</p>
        <div class="flex">
          <button class="h-[30px] w-[30px] rounded-2xl border-[#C5C6C7] border-opacity-15 border-[1px] mt-3 mx-8">
            <img class="mx-[5px]" src="/src/assets/ph_arrow-up-right-light.png" alt="">
          </button>
          <p class="text-[#66FCF1] mt-4 -mx-5 font-serif text-opacity-65">ABOUT WEBFLOW</p>
        </div>
      </div>

      <div
        class="bg-[#1F2833] w-full sm:w-[400px] h-64 bg-opacity-45 transition-transform transform hover:scale-105 hover:translate-y-1">
        <p class="text-[#66FCF1] mt-8 mx-8 text-opacity-65">03</p>
        <p class="text-[#66FCF1] mt-4 mx-8 font-serif text-opacity-65 text-2xl">CONTENT & SEO</p>
        <p class="text-[#C5C6C7] mt-1 mx-8 font-serif text-opacity-65">Proven SEO strategies to enhance your online
          performance.</p>
        <div class="flex">
          <button class="h-[30px] w-[30px] rounded-2xl border-[#C5C6C7] border-opacity-15 border-[1px] mt-3 mx-8">
            <img class="mx-[5px]" src="/src/assets/ph_arrow-up-right-light.png" alt="">
          </button>
          <p class="text-[#66FCF1] mt-4 -mx-5 font-serif text-opacity-65">ABOUT SEO</p>
        </div>
      </div>
    </div>

    <div class="flex justify-between flex-wrap mt-20 mx-6 sm:mx-36">
      <p class="text-[#66FCF1] text-4xl font-serif">Selected <span class="italic">Work</span></p>
      <div class="flex items-center gap-2">
        <button class="h-[30px] w-[30px] rounded-2xl border-[#C5C6C7] border-opacity-35 border-[1px] ml-4">
          <img class="mx-[5px]" src="/src/assets/ph_arrow-up-right-light.png" alt="">
        </button>
        <p class="text-[#66FCF1] font-serif text-opacity-65 ml-2 mt-1">SEE ALL</p>
      </div>
    </div>

    <div class="flex flex-wrap justify-center gap-6 mt-10">
      <section class="h-[430px] w-full sm:w-[610px] border-2 border-gray-800 bg-cover bg-center"
        style="background-image: url('/src/assets/IMG1.png');"></section>
      <section class="h-[430px] w-full sm:w-[610px] border-2 border-gray-800 bg-cover bg-center"
        style="background-image: url('/src/assets/IMG2.png');"></section>
    </div>

    <div class="flex flex-wrap justify-center gap-6 mt-6">
      <section class="h-[430px] w-full sm:w-[610px] border-2 border-gray-800 bg-cover bg-center"
        style="background-image: url('/src/assets/IMG3.png');"></section>
      <section class="h-[430px] w-full sm:w-[610px] border-2 border-gray-800 bg-cover bg-center"
        style="background-image: url('/src/assets/IMG4.png');"></section>
    </div>
    <div class="text-center">
      <h1 class="text-[#C5C6C7] mt-24 text-[15px] text-opacity-65">THE PROCESS</h1>
      <p class="text-[48px] sm:text-[100px] text-[#66FCF1] mt-6 font-serif">Your Website</p>
      <p class="text-[48px] sm:text-[100px] text-[#66FCF1] italic font-serif -mt-6">in 5 steps</p>
      <h1 class="text-[#C5C6C7] text-opacity-65 text-[15px] mt-6">Our process ensures that we create a website</h1>
      <h1 class="text-[#C5C6C7] text-opacity-65 text-[15px]">tailored to your business needs.</h1>
    </div>

    <div class="flex justify-center">
      <button class="h-[30px] w-[30px] rounded-2xl border-[#C5C6C7] border-opacity-15 border-[1px] mt-12 mx-8">
        <img class="mx-[5px]" src="/src/assets/ph_arrow-down-light.png" alt="">
      </button>
    </div>

    <div class="flex flex-wrap justify-center gap-8 mt-12 sm:mt-24">

      <div
        class="bg-[#1F2833] w-[550px] h-[380px] bg-opacity-45 mx-4 sm:mx-24 mt-8 sm:mt-24 border-2 border-[#66FCF1] border-opacity-15 section-hover p-6">
        <p class="text-[#C5C6C7] text-opacity-45">DO WE MATCH?</p>
        <p class="text-2xl text-[#66FCF1] mt-4">DISCOVERY CALL</p>
        <p class="text-[#C5C6C7] text-opacity-45 mt-4">Before we start, we determine if and how I can help you. What are
          your requirements for your new website? Why do you need a new website? What goals do you have, and what
          problems can we solve with a new website?</p>
        <ul class="list-disc mt-4 text-[#66FCF1] mx-[18px]">
          <li>We get to know each other better</li>
          <li class="mt-4">Determine how I can best assist you</li>
          <li class="mt-4">Understand the goals you have for your website</li>
        </ul>
      </div>

      <div
        class="bg-[#1F2833] w-[550px] h-[380px] bg-opacity-45 mx-4 sm:mx-24 mt-8 sm:mt-[400px] border-2 border-[#66FCF1] border-opacity-15 section-hover p-6">
        <p class="text-[#C5C6C7] text-opacity-45">LOREM IPSUM</p>
        <p class="text-2xl text-[#66FCF1] mt-4">CONCEPT & STRATEGY</p>
        <p class="text-[#C5C6C7] text-opacity-45 mt-4">Together, we develop a strategy that successfully combines your
          goals with the needs of your target audience. Based on this concept, I create the first wireframes and an
          interactive prototype. This provides us with a very good impression of the website and the user interface.</p>
        <ul class="list-disc mt-4 text-[#66FCF1] mx-[18px]">
          <li>UX Design</li>
          <li class="mt-4">Wireframes</li>
          <li class="mt-4">Interactive Prototype</li>
        </ul>
      </div>
    </div>

    <div class="flex flex-wrap justify-center gap-8 mt-12 sm:mt-24">

      <div
        class="bg-[#1F2833] w-[550px] h-[380px] bg-opacity-45 mx-4 sm:mx-24 mt-8 sm:mt-[-12px] border-2 border-[#66FCF1] border-opacity-15 section-hover p-6">
        <p class="text-[#C5C6C7] text-opacity-45">SOME MAGIC</p>
        <p class="text-2xl text-[#66FCF1] mt-4">WEB DESIGN</p>
        <p class="text-[#C5C6C7] text-opacity-45 mt-4">Now comes the magic. Based on the previously developed concept, I
          create a high-end screen design perfectly tailored to your brand. A web design that sets you apart from your
          competition, fits your target audience ideally, and provides an excellent user experience.</p>
        <ul class="list-disc mt-4 text-[#66FCF1] mx-[18px]">
          <li>We get to know each other better</li>
          <li class="mt-4">Interactive prototype of the design</li>
        </ul>
      </div>

      <div
        class="bg-[#1F2833] w-[550px] h-[380px] bg-opacity-45 mx-4 sm:mx-24 mt-8 sm:mt-[270px] border-2 border-[#66FCF1] border-opacity-15 section-hover p-6">
        <p class="text-[#C5C6C7] text-opacity-45">LOREM IPSUM</p>
        <p class="text-2xl text-[#66FCF1] mt-4">CONCEPT & STRATEGY</p>
        <p class="text-[#C5C6C7] text-opacity-45 mt-4">Together, we develop a strategy that successfully combines your
          goals with the needs of your target audience. Based on this concept, I create the first wireframes and an
          interactive prototype. This provides us with a very good impression of the website and the user interface.</p>
        <ul class="list-disc mt-4 text-[#66FCF1] mx-[18px]">
          <li>UX Design</li>
          <li class="mt-4">Wireframes</li>
          <li class="mt-4">Interactive Prototype</li>
        </ul>
      </div>
    </div>

    <div>
      <section class="py-16 px-8 mt-24">
        <div class="text-center mb-12">
          <h2 class="text-[100px] font-serif mb-4 text-[#66FCF1]">What my</h2>
          <h2 class="italic text-[100px] font-serif mb-4 text-[#66FCF1]">clients say</h2>
          <p class="text-gray-400 mb-4">See what my clients have to say about working with me and the</p>
          <p class="text-gray-400 mb-6">results I helped them achieve.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-[#1F2833] bg-opacity-45 p-6 rounded-lg shadow-lg opacity-0 transition-opacity duration-500"
            data-animate>
            <div class="flex items-center gap-4 mb-4">
              <img src="https://via.placeholder.com/50" alt="Logo 1" class="w-12 h-12">
              <div>
                <p class="text-[#66FCF1] font-semibold">John Smith</p>
                <p class="text-gray-400 text-sm">ABC Company</p>
              </div>
            </div>
            <p class="text-[#66FCF1] text-lg font-medium mb-2">Amazing Results with Robin's Premium Web Design Services.
            </p>
            <p class="text-gray-400 text-sm">
              Arik is a top-notch web designer who created a stunning website for my business. I highly recommend his
              services.
            </p>
          </div>

          <div class="bg-[#1F2833] bg-opacity-45 p-6 rounded-lg shadow-lg opacity-0 transition-opacity duration-500"
            data-animate>
            <div class="flex items-center gap-4 mb-4">
              <img src="https://via.placeholder.com/50" alt="Logo 2" class="w-12 h-12">
              <div>
                <p class="text-[#66FCF1] font-semibold">David Kim</p>
                <p class="text-gray-400 text-sm">Design Inc</p>
              </div>
            </div>
            <p class="text-[#66FCF1] text-lg font-medium mb-2">Expert Webflow and SEO Services: Excellent Work, Great
              Results.</p>
            <p class="text-gray-400 text-sm">
              Working with Arik on my website redesign was a fantastic experience. I couldn't be happier with the
              result.
            </p>
          </div>

          <div class="bg-[#1F2833] bg-opacity-45 p-6 rounded-lg shadow-lg opacity-0 transition-opacity duration-500"
            data-animate>
            <div class="flex items-center gap-4 mb-4">
              <img src="https://via.placeholder.com/50" alt="Logo 3" class="w-12 h-12">
              <div>
                <p class="text-[#66FCF1] font-semibold">Karen Lee</p>
                <p class="text-gray-400 text-sm">Redwood Technologies</p>
              </div>
            </div>
            <p class="text-[#66FCF1] text-lg font-medium mb-2">Professional, Collaborative Web Design Experience with
              Arik.</p>
            <p class="text-gray-400 text-sm">
              I was blown away by his expertise and professionalism. Highly recommend Arik for all your web development
              needs.
            </p>
          </div>
        </div>
      </section>
      <div>
        <div class="bg-[#0B0C10] w-full h-[1200px]">
          <div class="flex flex-col items-center justify-center min-h-screen text-center px-4">
            <p class="uppercase text-sm tracking-widest text-gray-400 mb-4">Project in Mind?</p>
            <h1 class="text-4xl md:text-6xl font-serif text-[#66FCF1] leading-tight">
              Let’s make your <span class="italic">Website shine</span>
            </h1>
            <p class="mt-4 text-gray-400 text-base max-w-lg">
              Premium web design, webflow, and SEO services to help your business stand out.
            </p>
            <a href="#"
              class="mt-6 bg-[#66FCF1] text-black py-3 px-6 rounded-lg font-medium text-sm transition-transform transform hover:scale-105 hover:translate-y-1 hover:bg-[#206e69]">
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>


  <footer class="w-full py-10 bg-[#0B0C10] text-gray-400">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left px-4">

      <div>
        <p class="text-xl font-bold text-[#66FCF1]">arik.</p>
        <div class="flex justify-center md:justify-start space-x-4 mt-4">
          <a href="#" class="hover:text-[#206e69] transform hover:scale-110 transition">Instagram</a>
          <a href="#" class="hover:text-[#206e69] transform hover:scale-110 transition">Twitter</a>
          <a href="#" class="hover:text-[#206e69] transform hover:scale-110 transition">Dribbble</a>
          <a href="#" class="hover:text-[#206e69] transform hover:scale-110 transition">Behance</a>
        </div>
      </div>

      <div>
        <h3 class="font-semibold text-[#66FCF1] mb-4">Pages</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-v transform hover:translate-x-2 transition">Home</a></li>
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">Services</a>
          </li>
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">About</a></li>
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">Contact</a>
          </li>
        </ul>
        <a href="#"
          class="mt-4 inline-block text-[#66FCF1] hover:text-[#206e69] transform hover:translate-x-2 transition">
          More Templates &rarr;
        </a>
      </div>

      <div>
        <h3 class="font-semibold text-[#66FCF1] mb-4">CMS</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">Work</a></li>
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">Work Single</a>
          </li>
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">Blog</a></li>
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">Blog Post</a>
          </li>
        </ul>
      </div>


      <div>
        <h3 class="font-semibold text-[#66FCF1] mb-4">Utility Pages</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">404 Error
              Page</a></li>
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">Password
              Protected</a></li>
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">Styleguide</a>
          </li>
          <li><a href="#" class="hover:text-[#206e69]transform hover:translate-x-2 transition">Licensing</a>
          </li>
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">Changelog</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="mt-10 text-center text-sm text-gray-500">
      &copy; 2022 Made by Pavel Cola. Powered by Framer.
    </div>
  </footer>
</template>

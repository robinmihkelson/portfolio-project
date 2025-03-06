<script setup>

</script>

<template>
  <section class="relative bg-center h-screen w-full bg-cover" style="background-image: url('/src/assets/smokey.png');">
    <div class="flex justify-center">
      <div class="backdrop-blur-md w-full sm:w-[650px] h-[75px] flex justify-center gap-6 mt-4 border-2 border-[#66FCF1]">
        <router-link to="/frontpage" href class="text-[#C5C6C7] text-sm sm:text-base mt-6">robin.</router-link>
        <router-link to="/services" href class="text-[#C5C6C7] text-sm sm:text-base mt-6">SERVICES</router-link>
        <router-link to="/about" href class="text-[#C5C6C7] text-sm sm:text-base mt-6 border-b-2 border-[#66FCF1]">ABOUT</router-link>
        <button class="text-[#C5C6C7] text-sm sm:text-base">PAGES</button>
        <router-link to="/services" href class="w-24 h-14 bg-[#66FCF1] mt-2 hover:bg-[#206e69] transition text-xs sm:text-base flex justify-center items-center">LET'S TALK</router-link>
      </div>
    </div>

    <div class="text-center mt-32 sm:mt-72">
      <h1 class="text-[#66FCF1] font-serif text-[48px] sm:text-[100px]">About Me</h1>
      <h1 class="text-[#66FCF1] italic font-serif text-[36px] sm:text-[60px]">Web Designer & Developer</h1>
    </div>
  </section>

  <div class="bg-[#0B0C10] min-h-screen w-full pb-24">
    <!-- About Introduction -->
    <div class="text-center pt-24 px-6">
      <h1 class="text-[#C5C6C7] text-[15px] text-opacity-65">WHO I AM</h1>
      <p class="text-[48px] sm:text-[80px] text-[#66FCF1] mt-6 font-serif">Robin Mihkelson</p>
      <p class="text-[36px] sm:text-[60px] text-[#66FCF1] italic font-serif -mt-4">Digital Craftsman</p>
      <h1 class="text-[#C5C6C7] text-opacity-65 text-[15px] mt-6 max-w-2xl mx-auto">
        I'm a passionate web designer and developer with over 8 years of experience creating distinctive digital experiences that help businesses thrive online.
      </h1>
    </div>

    <div class="flex flex-wrap justify-center items-center gap-12 mt-16 px-4 sm:px-16">

      <!-- About Text -->
      <div class="w-full sm:w-[450px]">
        <h2 class="text-[#66FCF1] text-3xl font-serif text-center">My Story</h2>
        <p class="text-[#C5C6C7] mt-6 leading-relaxed">
          I started my journey in web development back in 2023, fascinated by the intersection of design and technology. What began as a curiosity quickly evolved into a passion for crafting digital experiences that not only look beautiful but also solve real business problems.
        </p>
        <p class="text-[#C5C6C7] mt-4 leading-relaxed">
          Based in Estonia, I've had the privilege of working with clients ranging from ambitious startups to established enterprises across various industries. My approach combines strategic thinking with technical expertise to deliver websites that stand out in today's competitive digital landscape.
        </p>
        <p class="text-[#C5C6C7] mt-4 leading-relaxed">
          When I'm not coding or designing, you'll find me exploring new design trends, contributing to open-source projects, or hiking the beautiful trails of Saaremaa.
        </p>
        <div class="flex mt-8 justify-center">
          <a href="#" class="py-3 px-8 bg-[#66FCF1] text-black hover:bg-[#206e69] flex justify-center items-center transition-transform transform hover:scale-105 w-48">
            VIEW MY WORK
          </a>
        </div>
      </div>
    </div>

    <!-- Skills Section -->
    <div class="mt-32 px-4">
      <div class="text-center">
        <h1 class="text-[#C5C6C7] text-[15px] text-opacity-65">MY EXPERTISE</h1>
        <p class="text-[48px] sm:text-[80px] text-[#66FCF1] mt-6 font-serif">Skills & Tools</p>
        <h1 class="text-[#C5C6C7] text-opacity-65 text-[15px] mt-6 max-w-2xl mx-auto">
          I've cultivated a diverse skill set that enables me to handle every aspect of the web development process.
        </h1>
      </div>

      <div class="flex flex-wrap justify-center gap-8 mt-16">
        <div class="bg-[#1F2833] w-full sm:w-[350px] h-auto bg-opacity-45 border-2 border-[#66FCF1] border-opacity-15 p-8">
          <p class="text-[#66FCF1] text-opacity-65">01</p>
          <p class="text-[#66FCF1] mt-4 font-serif text-opacity-65 text-2xl">DESIGN</p>
          <ul class="list-disc mt-6 text-[#C5C6C7] mx-[18px]">
            <li>UI/UX Design</li>
            <li class="mt-2">Wireframing & Prototyping</li>
            <li class="mt-2">Responsive Design</li>
            <li class="mt-2">Brand Identity</li>
            <li class="mt-2">Adobe Creative Suite</li>
            <li class="mt-2">Figma</li>
          </ul>
        </div>

        <div class="bg-[#1F2833] w-full sm:w-[350px] h-auto bg-opacity-45 border-2 border-[#66FCF1] border-opacity-15 p-8">
          <p class="text-[#66FCF1] text-opacity-65">02</p>
          <p class="text-[#66FCF1] mt-4 font-serif text-opacity-65 text-2xl">DEVELOPMENT</p>
          <ul class="list-disc mt-6 text-[#C5C6C7] mx-[18px]">
            <li>HTML5 & CSS3</li>
            <li class="mt-2">JavaScript / TypeScript</li>
            <li class="mt-2">Vue.js / React</li>
            <li class="mt-2">Node.js</li>
            <li class="mt-2">PHP / Laravel</li>
            <li class="mt-2">WordPress</li>
          </ul>
        </div>

        <div class="bg-[#1F2833] w-full sm:w-[350px] h-auto bg-opacity-45 border-2 border-[#66FCF1] border-opacity-15 p-8">
          <p class="text-[#66FCF1] text-opacity-65">03</p>
          <p class="text-[#66FCF1] mt-4 font-serif text-opacity-65 text-2xl">ADDITIONAL</p>
          <ul class="list-disc mt-6 text-[#C5C6C7] mx-[18px]">
            <li>SEO Optimization</li>
            <li class="mt-2">Performance Tuning</li>
            <li class="mt-2">Git / Version Control</li>
            <li class="mt-2">Responsive Testing</li>
            <li class="mt-2">Web Analytics</li>
            <li class="mt-2">E-commerce Solutions</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Experience Section -->
    <div class="mt-32 px-4">
      <div class="text-center">
        <h1 class="text-[#C5C6C7] text-[15px] text-opacity-65">MY JOURNEY</h1>
        <p class="text-[48px] sm:text-[80px] text-[#66FCF1] mt-6 font-serif">Experience</p>
        <h1 class="text-[#C5C6C7] text-opacity-65 text-[15px] mt-6 max-w-2xl mx-auto">
          A timeline of my professional career and the skills I've developed along the way.
        </h1>
      </div>

      <div class="mt-16 max-w-4xl mx-auto">
        <!-- Timeline Item 1 -->
        <div class="flex flex-col sm:flex-row">
          <div class="w-full sm:w-1/3 px-4">
            <p class="text-[#66FCF1] font-bold">2023 - Present</p>
            <p class="text-[#C5C6C7] mt-2">Junior Software Developer</p>
          </div>
          <div class="w-full sm:w-2/3 mt-4 sm:mt-0 px-4 pb-12 border-l-2 border-[#66FCF1] border-opacity-15">
            <h3 class="text-[#66FCF1] text-xl">Kuressaare Ametikool</h3>
            <p class="text-[#C5C6C7] mt-4">
              Working directly with clients to create custom web solutions that address their specific business needs. Handling all aspects of the web development process from initial discovery to final deployment.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Testimonials Section -->
    <div class="mt-32 px-4">
      <div class="text-center">
        <h1 class="text-[#C5C6C7] text-[15px] text-opacity-65">CLIENT FEEDBACK</h1>
        <p class="text-[48px] sm:text-[80px] text-[#66FCF1] mt-6 font-serif">Testimonials</p>
        <h1 class="text-[#C5C6C7] text-opacity-65 text-[15px] mt-6 max-w-2xl mx-auto">
          Here's what my clients have to say about working with me.
        </h1>
      </div>

      <div class="flex flex-wrap justify-center gap-8 mt-16">
        <!-- Testimonial 1 -->
        <div class="bg-[#1F2833] w-full sm:w-[400px] h-auto bg-opacity-45 border-2 border-[#66FCF1] border-opacity-15 p-8">
          <div class="flex mb-6">
            <div class="w-16 h-16 rounded-full bg-[#C5C6C7] bg-opacity-20 flex items-center justify-center">
              <p class="text-[#C5C6C7]">JD</p>
            </div>
            <div class="ml-4">
              <p class="text-[#66FCF1]">James Davis</p>
              <p class="text-[#C5C6C7] text-sm">CEO, TechStart</p>
            </div>
          </div>
          <p class="text-[#C5C6C7] italic">
            "Robin transformed our outdated website into a modern, conversion-focused platform that perfectly represents our brand. The attention to detail and technical expertise was impressive."
          </p>
        </div>

        <!-- Testimonial 2 -->
        <div class="bg-[#1F2833] w-full sm:w-[400px] h-auto bg-opacity-45 border-2 border-[#66FCF1] border-opacity-15 p-8">
          <div class="flex mb-6">
            <div class="w-16 h-16 rounded-full bg-[#C5C6C7] bg-opacity-20 flex items-center justify-center">
              <p class="text-[#C5C6C7]">SM</p>
            </div>
            <div class="ml-4">
              <p class="text-[#66FCF1]">Sarah Mitchell</p>
              <p class="text-[#C5C6C7] text-sm">Marketing Director, GrowthLabs</p>
            </div>
          </div>
          <p class="text-[#C5C6C7] italic">
            "Working with Robin was a breeze. They understood our vision immediately and delivered a website that exceeded our expectations. Our online leads have increased by 45% since the launch."
          </p>
        </div>

        <!-- Testimonial 3 -->
        <div class="bg-[#1F2833] w-full sm:w-[400px] h-auto bg-opacity-45 border-2 border-[#66FCF1] border-opacity-15 p-8">
          <div class="flex mb-6">
            <div class="w-16 h-16 rounded-full bg-[#C5C6C7] bg-opacity-20 flex items-center justify-center">
              <p class="text-[#C5C6C7]">AK</p>
            </div>
            <div class="ml-4">
              <p class="text-[#66FCF1]">Alex Kim</p>
              <p class="text-[#C5C6C7] text-sm">Founder, Artisan Collective</p>
            </div>
          </div>
          <p class="text-[#C5C6C7] italic">
            "Robin's creative approach and technical skills helped us create an e-commerce site that not only looks beautiful but also performs exceptionally well. Our conversion rate has doubled since the redesign."
          </p>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="mt-32 px-4">
      <div class="bg-[#1F2833] bg-opacity-45 p-12 max-w-5xl mx-auto text-center border-2 border-[#66FCF1] border-opacity-15">
        <h1 class="text-[#C5C6C7] text-[15px] text-opacity-65">READY TO START?</h1>
        <p class="text-3xl sm:text-5xl text-[#66FCF1] mt-6 font-serif">Let's Build Something Amazing</p>
        <p class="text-[#C5C6C7] text-opacity-65 text-sm sm:text-base mt-6 max-w-2xl mx-auto">
          I'm currently available for new projects. Let's discuss how we can work together to bring your vision to life.
        </p>
        <div class="flex justify-center mt-8">
          <a href="#" class="py-3 px-8 bg-[#66FCF1] text-black hover:bg-[#206e69] flex justify-center items-center transition-transform transform hover:scale-105">
            GET IN TOUCH
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="w-full py-10 bg-[#0B0C10] text-gray-400">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left px-4">
      <div>
        <p class="text-xl font-bold text-[#66FCF1]">robin.</p>
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
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">Services</a></li>
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">About</a></li>
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">Contact</a></li>
        </ul>
        <a href="#" class="mt-4 inline-block text-[#66FCF1] hover:text-[#206e69] transform hover:translate-x-2 transition">
          More Templates &rarr;
        </a>
      </div>

      <div>
        <h3 class="font-semibold text-[#66FCF1] mb-4">CMS</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">Work</a></li>
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">Work Single</a></li>
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">Blog</a></li>
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">Blog Post</a></li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-[#66FCF1] mb-4">Utility Pages</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">404 Error Page</a></li>
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">Password Protected</a></li>
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">Styleguide</a></li>
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">Licensing</a></li>
          <li><a href="#" class="hover:text-[#206e69] transform hover:translate-x-2 transition">Changelog</a></li>
        </ul>
      </div>
    </div>

    <div class="mt-10 text-center text-sm text-gray-500">
      &copy; 2022 Made by Pavel Cola. Powered by Framer.
    </div>
  </footer>
</template>
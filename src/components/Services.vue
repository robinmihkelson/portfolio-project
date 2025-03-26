<script setup>

</script>

<template>
  <section class="relative bg-center h-screen w-full bg-cover" style="background-image: url('/src/assets/smokey.png');">
    <div class="flex justify-center">
      <div class="backdrop-blur-md w-full sm:w-[650px] h-[75px] flex justify-center gap-6 mt-4 border-2 border-[#66FCF1]">
        <router-link to="/" href class="text-[#C5C6C7] text-sm sm:text-base mt-6">robin.</router-link>
        <router-link to="/services" href class="text-[#C5C6C7] text-sm sm:text-base mt-6 border-b-2 border-[#66FCF1]">SERVICES</router-link>
        <router-link to="/about" href class="text-[#C5C6C7] text-sm sm:text-base mt-6">ABOUT</router-link>
        <router-link to="/services" href class="w-24 h-14 bg-[#66FCF1] mt-2 hover:bg-[#206e69] transition text-xs sm:text-base flex justify-center items-center">LET'S TALK</router-link>
      </div>
    </div>

    <div class="text-center mt-32 sm:mt-72">
      <h1 class="text-[#66FCF1] font-serif text-[48px] sm:text-[100px]">My Services</h1>
      <h1 class="text-[#66FCF1] italic font-serif text-[36px] sm:text-[60px]">Tailored for Your Business</h1>
    </div>
  </section>

  <div class="bg-[#0B0C10] min-h-screen w-full pb-24">
    <div class="text-center pt-24 px-6">
      <h1 class="text-[#C5C6C7] text-[15px] text-opacity-65">WHAT I OFFER</h1>
      <p class="text-[48px] sm:text-[80px] text-[#66FCF1] mt-6 font-serif">Premium Services</p>
      <p class="text-[36px] sm:text-[60px] text-[#66FCF1] italic font-serif -mt-4">For Modern Businesses</p>
      <h1 class="text-[#C5C6C7] text-opacity-65 text-[15px] mt-6 max-w-2xl mx-auto">
        I offer comprehensive web solutions that help your business stand out from the competition and connect with your target audience.
      </h1>
    </div>

    <div class="flex flex-wrap justify-center gap-8 mt-16 px-4 sm:px-8">
      <div class="bg-[#1F2833] w-full sm:w-[400px] h-[430px] bg-opacity-45 transition-transform transform hover:scale-105 hover:translate-y-1 p-8">
        <p class="text-[#66FCF1] text-opacity-65">01</p>
        <p class="text-[#66FCF1] mt-4 font-serif text-opacity-65 text-2xl">WEB DESIGN</p>
        <p class="text-[#C5C6C7] mt-3 font-serif text-opacity-65">Visually stunning web designs that captivate your audience and turn visitors into customers.</p>
        <ul class="list-disc mt-6 text-[#C5C6C7] mx-[18px]">
          <li>Custom UI/UX design</li>
          <li class="mt-2">Responsive layouts</li>
          <li class="mt-2">Brand integration</li>
          <li class="mt-2">Conversion-focused design</li>
        </ul>
        <div class="flex mt-6">
          <button class="h-[30px] w-[30px] rounded-2xl border-[#C5C6C7] border-opacity-15 border-[1px]">
            <img class="mx-[5px]" src="/src/assets/ph_arrow-up-right-light.png" alt="">
          </button>
          <p class="text-[#66FCF1] mt-1 ml-3 font-serif text-opacity-65">EXPLORE DESIGN SERVICES</p>
        </div>
      </div>

      <div class="bg-[#1F2833] w-full sm:w-[400px] h-[430px] bg-opacity-45 transition-transform transform hover:scale-105 hover:translate-y-1 p-8">
        <p class="text-[#66FCF1] text-opacity-65">02</p>
        <p class="text-[#66FCF1] mt-4 font-serif text-opacity-65 text-2xl">DEVELOPMENT</p>
        <p class="text-[#C5C6C7] mt-3 font-serif text-opacity-65">Get custom web development solutions that are tailored to your specific business needs.</p>
        <ul class="list-disc mt-6 text-[#C5C6C7] mx-[18px]">
          <li>Clean, efficient code</li>
          <li class="mt-2">Performance optimization</li>
          <li class="mt-2">Custom functionality</li>
          <li class="mt-2">E-commerce solutions</li>
        </ul>
        <div class="flex mt-6">
          <button class="h-[30px] w-[30px] rounded-2xl border-[#C5C6C7] border-opacity-15 border-[1px]">
            <img class="mx-[5px]" src="/src/assets/ph_arrow-up-right-light.png" alt="">
          </button>
          <p class="text-[#66FCF1] mt-1 ml-3 font-serif text-opacity-65">EXPLORE DEVELOPMENT</p>
        </div>
      </div>

      <div class="bg-[#1F2833] w-full sm:w-[400px] h-[430px] bg-opacity-45 transition-transform transform hover:scale-105 hover:translate-y-1 p-8">
        <p class="text-[#66FCF1] text-opacity-65">03</p>
        <p class="text-[#66FCF1] mt-4 font-serif text-opacity-65 text-2xl">CONTENT & SEO</p>
        <p class="text-[#C5C6C7] mt-3 font-serif text-opacity-65">Proven SEO strategies and compelling content to enhance your online performance.</p>
        <ul class="list-disc mt-6 text-[#C5C6C7] mx-[18px]">
          <li>Keyword research</li>
          <li class="mt-2">On-page optimization</li>
          <li class="mt-2">Content strategy</li>
          <li class="mt-2">Performance tracking</li>
        </ul>
        <div class="flex mt-6">
          <button class="h-[30px] w-[30px] rounded-2xl border-[#C5C6C7] border-opacity-15 border-[1px]">
            <img class="mx-[5px]" src="/src/assets/ph_arrow-up-right-light.png" alt="">
          </button>
          <p class="text-[#66FCF1] mt-1 ml-3 font-serif text-opacity-65">EXPLORE SEO SERVICES</p>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap justify-center gap-8 mt-8 px-4 sm:px-8">
      <div class="bg-[#1F2833] w-full sm:w-[400px] h-[430px] bg-opacity-45 transition-transform transform hover:scale-105 hover:translate-y-1 p-8">
        <p class="text-[#66FCF1] text-opacity-65">04</p>
        <p class="text-[#66FCF1] mt-4 font-serif text-opacity-65 text-2xl">MAINTENANCE</p>
        <p class="text-[#C5C6C7] mt-3 font-serif text-opacity-65">Keep your website running smoothly with regular updates and technical support.</p>
        <ul class="list-disc mt-6 text-[#C5C6C7] mx-[18px]">
          <li>Regular updates</li>
          <li class="mt-2">Security monitoring</li>
          <li class="mt-2">Performance optimization</li>
          <li class="mt-2">Technical support</li>
        </ul>
        <div class="flex mt-6">
          <button class="h-[30px] w-[30px] rounded-2xl border-[#C5C6C7] border-opacity-15 border-[1px]">
            <img class="mx-[5px]" src="/src/assets/ph_arrow-up-right-light.png" alt="">
          </button>
          <p class="text-[#66FCF1] mt-1 ml-3 font-serif text-opacity-65">EXPLORE MAINTENANCE</p>
        </div>
      </div>

      <div class="bg-[#1F2833] w-full sm:w-[400px] h-[430px] bg-opacity-45 transition-transform transform hover:scale-105 hover:translate-y-1 p-8">
        <p class="text-[#66FCF1] text-opacity-65">05</p>
        <p class="text-[#66FCF1] mt-4 font-serif text-opacity-65 text-2xl">E-COMMERCE</p>
        <p class="text-[#C5C6C7] mt-3 font-serif text-opacity-65">Build powerful online stores that drive sales and provide seamless shopping experiences.</p>
        <ul class="list-disc mt-6 text-[#C5C6C7] mx-[18px]">
          <li>Custom shopping carts</li>
          <li class="mt-2">Payment integration</li>
          <li class="mt-2">Inventory management</li>
          <li class="mt-2">Mobile optimization</li>
        </ul>
        <div class="flex mt-6">
          <button class="h-[30px] w-[30px] rounded-2xl border-[#C5C6C7] border-opacity-15 border-[1px]">
            <img class="mx-[5px]" src="/src/assets/ph_arrow-up-right-light.png" alt="">
          </button>
          <p class="text-[#66FCF1] mt-1 ml-3 font-serif text-opacity-65">EXPLORE E-COMMERCE</p>
        </div>
      </div>

      <div class="bg-[#1F2833] w-full sm:w-[400px] h-[430px] bg-opacity-45 transition-transform transform hover:scale-105 hover:translate-y-1 p-8">
        <p class="text-[#66FCF1] text-opacity-65">06</p>
        <p class="text-[#66FCF1] mt-4 font-serif text-opacity-65 text-2xl">BRANDING</p>
        <p class="text-[#C5C6C7] mt-3 font-serif text-opacity-65">Develop a consistent brand identity that resonates with your target audience.</p>
        <ul class="list-disc mt-6 text-[#C5C6C7] mx-[18px]">
          <li>Logo design</li>
          <li class="mt-2">Brand guidelines</li>
          <li class="mt-2">Visual identity</li>
          <li class="mt-2">Brand strategy</li>
        </ul>
        <div class="flex mt-6">
          <button class="h-[30px] w-[30px] rounded-2xl border-[#C5C6C7] border-opacity-15 border-[1px]">
            <img class="mx-[5px]" src="/src/assets/ph_arrow-up-right-light.png" alt="">
          </button>
          <p class="text-[#66FCF1] mt-1 ml-3 font-serif text-opacity-65">EXPLORE BRANDING</p>
        </div>
      </div>
    </div>

    <div class="mt-32 px-4">
      <div class="text-center">
        <h1 class="text-[#C5C6C7] text-[15px] text-opacity-65">MY APPROACH</h1>
        <p class="text-[48px] sm:text-[80px] text-[#66FCF1] mt-6 font-serif">How I Work</p>
        <h1 class="text-[#C5C6C7] text-opacity-65 text-[15px] mt-6 max-w-2xl mx-auto">
          My structured approach ensures that every project meets the highest standards of quality and effectiveness.
        </h1>
      </div>

      <div class="flex flex-wrap justify-center gap-8 mt-16">
        <div class="bg-[#1F2833] w-full sm:w-[550px] h-auto bg-opacity-45 border-2 border-[#66FCF1] border-opacity-15 p-8">
          <p class="text-[#C5C6C7] text-opacity-45">STEP 1</p>
          <p class="text-2xl text-[#66FCF1] mt-4">DISCOVERY & PLANNING</p>
          <p class="text-[#C5C6C7] text-opacity-45 mt-4">
            I begin by understanding your business goals, target audience, and project requirements through in-depth consultation and research.
          </p>
          <ul class="list-disc mt-4 text-[#66FCF1] mx-[18px]">
            <li>Initial consultation</li>
            <li class="mt-4">Goal definition</li>
            <li class="mt-4">Competitive analysis</li>
            <li class="mt-4">Project roadmap creation</li>
          </ul>
        </div>

        <div class="bg-[#1F2833] w-full sm:w-[550px] h-auto bg-opacity-45 border-2 border-[#66FCF1] border-opacity-15 p-8">
          <p class="text-[#C5C6C7] text-opacity-45">STEP 2</p>
          <p class="text-2xl text-[#66FCF1] mt-4">DESIGN & PROTOTYPING</p>
          <p class="text-[#C5C6C7] text-opacity-45 mt-4">
            I create wireframes and visual designs that align with your brand identity and project goals, allowing you to visualize the final product.
          </p>
          <ul class="list-disc mt-4 text-[#66FCF1] mx-[18px]">
            <li>Wireframing</li>
            <li class="mt-4">Visual design</li>
            <li class="mt-4">Interactive prototyping</li>
            <li class="mt-4">Client feedback integration</li>
          </ul>
        </div>
      </div>

      <div class="flex flex-wrap justify-center gap-8 mt-8">
        <div class="bg-[#1F2833] w-full sm:w-[550px] h-auto bg-opacity-45 border-2 border-[#66FCF1] border-opacity-15 p-8">
          <p class="text-[#C5C6C7] text-opacity-45">STEP 3</p>
          <p class="text-2xl text-[#66FCF1] mt-4">DEVELOPMENT & IMPLEMENTATION</p>
          <p class="text-[#C5C6C7] text-opacity-45 mt-4">
            I bring the designs to life with clean, efficient code that ensures your website is fast, responsive, and user-friendly.
          </p>
          <ul class="list-disc mt-4 text-[#66FCF1] mx-[18px]">
            <li>Front-end development</li>
            <li class="mt-4">Back-end integration</li>
            <li class="mt-4">Responsive implementation</li>
            <li class="mt-4">Performance optimization</li>
          </ul>
        </div>

        <div class="bg-[#1F2833] w-full sm:w-[550px] h-auto bg-opacity-45 border-2 border-[#66FCF1] border-opacity-15 p-8">
          <p class="text-[#C5C6C7] text-opacity-45">STEP 4</p>
          <p class="text-2xl text-[#66FCF1] mt-4">TESTING & LAUNCH</p>
          <p class="text-[#C5C6C7] text-opacity-45 mt-4">
            I thoroughly test the website across devices and browsers to ensure optimal performance before launching it to the world.
          </p>
          <ul class="list-disc mt-4 text-[#66FCF1] mx-[18px]">
            <li>Cross-browser testing</li>
            <li class="mt-4">Mobile responsiveness</li>
            <li class="mt-4">Security verification</li>
            <li class="mt-4">Deployment & launch</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mt-32 px-4">
      <div class="text-center">
        <h1 class="text-[#C5C6C7] text-[15px] text-opacity-65">INVESTMENT</h1>
        <p class="text-[48px] sm:text-[80px] text-[#66FCF1] mt-6 font-serif">Service Packages</p>
        <h1 class="text-[#C5C6C7] text-opacity-65 text-[15px] mt-6 max-w-2xl mx-auto">
          Choose the service package that best suits your business needs and budget.
        </h1>
      </div>

      <div class="flex flex-wrap justify-center gap-8 mt-16">
        <div class="bg-[#1F2833] w-full sm:w-[350px] h-auto bg-opacity-45 border-2 border-[#66FCF1] border-opacity-15 p-8">
          <p class="text-[#C5C6C7] text-opacity-45">STARTER</p>
          <p class="text-4xl text-[#66FCF1] mt-4">1€</p>
          <p class="text-[#C5C6C7] text-opacity-45 mt-2">Perfect for small businesses</p>
          <ul class="list-disc mt-6 text-[#C5C6C7] mx-[18px]">
            <li>5-page responsive website</li>
            <li class="mt-4">Basic SEO setup</li>
            <li class="mt-4">Contact form</li>
            <li class="mt-4">Mobile-friendly design</li>
            <li class="mt-4">1 round of revisions</li>
          </ul>
          <div class="flex justify-center mt-8">
            <a href="#" class="w-full py-3 bg-[#66FCF1] text-black flex justify-center items-center transition-transform transform hover:scale-105 hover:bg-[#206e69]">GET STARTED</a>
          </div>
        </div>

        <div class="bg-[#1F2833] w-full sm:w-[350px] h-auto bg-opacity-45 border-2 border-[#66FCF1] border-opacity-55 p-8">
          <div class="bg-[#66FCF1] text-black text-center py-1 mx-auto w-32 -mt-12 mb-4">POPULAR</div>
          <p class="text-[#C5C6C7] text-opacity-45">BUSINESS</p>
          <p class="text-4xl text-[#66FCF1] mt-4">5€</p>
          <p class="text-[#C5C6C7] text-opacity-45 mt-2">For growing businesses</p>
          <ul class="list-disc mt-6 text-[#C5C6C7] mx-[18px]">
            <li>10-page responsive website</li>
            <li class="mt-4">Advanced SEO optimization</li>
            <li class="mt-4">Content management system</li>
            <li class="mt-4">Custom contact forms</li>
            <li class="mt-4">Social media integration</li>
            <li class="mt-4">3 rounds of revisions</li>
          </ul>
          <div class="flex justify-center mt-8">
            <a href="#" class="w-full py-3 bg-[#66FCF1] text-black flex justify-center items-center transition-transform transform hover:scale-105 hover:bg-[#206e69]">GET STARTED</a>
          </div>
        </div>

        <div class="bg-[#1F2833] w-full sm:w-[350px] h-auto bg-opacity-45 border-2 border-[#66FCF1] border-opacity-15 p-8">
          <p class="text-[#C5C6C7] text-opacity-45">PREMIUM</p>
          <p class="text-4xl text-[#66FCF1] mt-4">10€</p>
          <p class="text-[#C5C6C7] text-opacity-45 mt-2">For established enterprises</p>
          <ul class="list-disc mt-6 text-[#C5C6C7] mx-[18px]">
            <li>Custom website (unlimited pages)</li>
            <li class="mt-4">E-commerce functionality</li>
            <li class="mt-4">Advanced SEO strategy</li>
            <li class="mt-4">Content creation</li>
            <li class="mt-4">Analytics integration</li>
            <li class="mt-4">Unlimited revisions</li>
            <li class="mt-4">1 year maintenance included</li>
          </ul>
          <div class="flex justify-center mt-8">
            <a href="#" class="w-full py-3 bg-[#66FCF1] text-black flex justify-center items-center transition-transform transform hover:scale-105 hover:bg-[#206e69]">GET STARTED</a>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-32 px-4">
      <div class="bg-[#1F2833] bg-opacity-45 p-12 max-w-5xl mx-auto text-center border-2 border-[#66FCF1] border-opacity-15">
        <h1 class="text-[#C5C6C7] text-[15px] text-opacity-65">NEED SOMETHING CUSTOM?</h1>
        <p class="text-3xl sm:text-5xl text-[#66FCF1] mt-6 font-serif">Let's Discuss Your Project</p>
        <p class="text-[#C5C6C7] text-opacity-65 text-sm sm:text-base mt-6 max-w-2xl mx-auto">
          Every business is unique. Contact me for a custom quote tailored specifically to your project requirements and business goals.
        </p>
        <div class="flex justify-center mt-8">
          <a href="#" class="py-3 px-8 bg-[#66FCF1] text-black flex justify-center items-center transition-transform transform hover:scale-105 hover:bg-[#206e69]">
            REQUEST A CUSTOM QUOTE
          </a>
        </div>
      </div>
    </div>
  </div>

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
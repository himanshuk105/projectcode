export let a = `<!-- Hero Section -->
<section class="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0">
        <div class="absolute top-20 left-20 w-72 h-72 bg-white bg-opacity-10 rounded-full animate-bounce"></div>
        <div class="absolute top-40 right-32 w-96 h-96 bg-white bg-opacity-5 rounded-full animate-pulse"></div>
        <div class="absolute bottom-20 left-1/3 w-64 h-64 bg-white bg-opacity-10 rounded-full animate-spin"></div>
    </div>
    
    <div class="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 class="text-6xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            About <span class="text-yellow-300">Our Story</span>
        </h1>
        <p class="text-xl md:text-2xl mb-8 opacity-90 font-light animate-slide-up">
            Crafting digital experiences that inspire, innovate, and transform the way you connect with the world.
        </p>
        <div class="flex justify-center animate-bounce">
            <button class="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                Discover Our Journey
            </button>
        </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-70">
        <div class="animate-bounce">
            <svg class="w-6 h-6 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
        <p class="text-sm">Scroll to explore</p>
    </div>
</section>

<!-- Mission Section -->
<section class="py-20 px-6 bg-white">
    <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="space-y-8">
                <h2 class="text-5xl font-bold text-gray-800">
                    Our <span class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Mission</span>
                </h2>
                <p class="text-xl text-gray-600 leading-relaxed">
                    We believe in the power of technology to create meaningful connections and drive positive change. Our mission is to build innovative solutions that not only meet today's challenges but anticipate tomorrow's opportunities.
                </p>
                <div class="space-y-4">
                    <div class="flex items-center space-x-4 transform hover:translate-x-2 transition-transform duration-300">
                        <div class="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                        <p class="text-lg text-gray-700">Innovation-driven approach</p>
                    </div>
                    <div class="flex items-center space-x-4 transform hover:translate-x-2 transition-transform duration-300">
                        <div class="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                        <p class="text-lg text-gray-700">User-centric design philosophy</p>
                    </div>
                    <div class="flex items-center space-x-4 transform hover:translate-x-2 transition-transform duration-300">
                        <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <p class="text-lg text-gray-700">Sustainable growth mindset</p>
                    </div>
                </div>
            </div>
            <div class="relative">
                <div class="bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 hover:-translate-y-2 transition-all duration-500 animate-pulse">
                    <div class="bg-gradient-to-br from-purple-400 to-blue-500 h-64 rounded-2xl flex items-center justify-center">
                        <div class="text-white text-center">
                            <svg class="w-16 h-16 mx-auto mb-4 animate-spin" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <h3 class="text-2xl font-semibold">Quality First</h3>
                            <p class="mt-2 opacity-90">Excellence in every detail</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Values Section -->
<section class="py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
            <h2 class="text-5xl font-bold text-gray-800 mb-6">Our Core <span class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Values</span></h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do and shape the way we interact with our clients, partners, and community.
            </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-2xl">
                <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 animate-bounce">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"></path>
                    </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-800 mb-4">Passion</h3>
                <p class="text-gray-600">We pour our hearts into every project, driven by genuine enthusiasm for creating exceptional experiences.</p>
            </div>
            
            <div class="bg-white rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-2xl">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 animate-pulse">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-800 mb-4">Integrity</h3>
                <p class="text-gray-600">Transparency, honesty, and ethical practices form the foundation of all our relationships and decisions.</p>
            </div>
            
            <div class="bg-white rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-2xl">
                <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 animate-spin">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                    </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-800 mb-4">Collaboration</h3>
                <p class="text-gray-600">We believe great things happen when diverse minds come together with a shared vision and purpose.</p>
            </div>
        </div>
    </div>
</section>

<!-- Team Section -->
<section class="py-20 px-6 bg-white">
    <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
            <h2 class="text-5xl font-bold text-gray-800 mb-6">Meet Our <span class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Team</span></h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                Behind every great company are passionate individuals who bring their unique skills and perspectives to create something extraordinary.
            </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center group">
                <div class="relative mb-6 inline-block">
                    <div class="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse">
                        <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 animate-ping"></div>
                </div>
                <h3 class="text-2xl font-bold text-gray-800 mb-2">Sarah Johnson</h3>
                <p class="text-purple-600 font-semibold mb-3">Chief Executive Officer</p>
                <p class="text-gray-600">Visionary leader with 15+ years of experience in transforming digital landscapes.</p>
            </div>
            
            <div class="text-center group">
                <div class="relative mb-6 inline-block">
                    <div class="w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-bounce">
                        <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 animate-ping"></div>
                </div>
                <h3 class="text-2xl font-bold text-gray-800 mb-2">Michael Chen</h3>
                <p class="text-blue-600 font-semibold mb-3">Chief Technology Officer</p>
                <p class="text-gray-600">Tech innovator passionate about building scalable solutions that make a difference.</p>
            </div>
            
            <div class="text-center group">
                <div class="relative mb-6 inline-block">
                    <div class="w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-spin">
                        <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 animate-ping"></div>
                </div>
                <h3 class="text-2xl font-bold text-gray-800 mb-2">Emma Rodriguez</h3>
                <p class="text-green-600 font-semibold mb-3">Head of Design</p>
                <p class="text-gray-600">Creative mastermind who believes great design has the power to change the world.</p>
            </div>
        </div>
    </div>
</section>

<!-- Statistics Section -->
<section class="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
    <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
            <h2 class="text-5xl font-bold text-white mb-6">Our <span class="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Impact</span></h2>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                Numbers that reflect our commitment to excellence and the trust our clients place in us.
            </p>
        </div>
        
        <div class="grid md:grid-cols-4 gap-8">
            <div class="text-center group">
                <div class="bg-gradient-to-br from-yellow-400 to-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <span class="text-3xl font-bold text-white">500+</span>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">Projects Completed</h3>
                <p class="text-gray-300">Successful deliveries across industries</p>
            </div>
            
            <div class="text-center group">
                <div class="bg-gradient-to-br from-green-400 to-blue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <span class="text-3xl font-bold text-white">50+</span>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">Happy Clients</h3>
                <p class="text-gray-300">Long-term partnerships built on trust</p>
            </div>
            
            <div class="text-center group">
                <div class="bg-gradient-to-br from-purple-400 to-pink-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 animate-spin">
                    <span class="text-3xl font-bold text-white">5+</span>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">Years Experience</h3>
                <p class="text-gray-300">Proven track record of innovation</p>
            </div>
            
            <div class="text-center group">
                <div class="bg-gradient-to-br from-red-400 to-yellow-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <span class="text-3xl font-bold text-white">24/7</span>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">Support Available</h3>
                <p class="text-gray-300">Always here when you need us</p>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 relative overflow-hidden">
    <div class="absolute inset-0">
        <div class="absolute top-10 right-20 w-64 h-64 bg-white bg-opacity-5 rounded-full animate-pulse"></div>
        <div class="absolute bottom-10 left-20 w-48 h-48 bg-white bg-opacity-10 rounded-full animate-bounce"></div>
    </div>
    
    <div class="max-w-4xl mx-auto text-center px-6 relative z-10">
        <h2 class="text-5xl font-bold text-white mb-6 animate-fade-in">Ready to Start Your Journey?</h2>
        <p class="text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
            Join us in creating something extraordinary. Whether you're looking to collaborate, innovate, or simply connect, we'd love to hear from you.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 animate-bounce">
                Get In Touch
            </button>
            <button class="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300 animate-pulse">
                Learn More
            </button>
        </div>
    </div>
</section>`

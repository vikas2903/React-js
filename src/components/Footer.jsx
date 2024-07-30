import React from 'react';
const Footer = () => {
    return (
        <>
            <footer class="bg-black  py-8">
                <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div class="lg:flex lg:items-start lg:gap-8">
                        <div class="text-teal-600">
                            <svg class="h-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.5277 17.1149 5.3517 17.3346 6.19 17.3346C7.0283 17.3346 7.8523 17.1149 8.61 16.6547C9.36773 16.175 10.1312 15.924 10.92 15.9447H11.49C12.4354 15.924 13.3452 16.306 14.075 16.9906C14.7647 17.616 15.4375 18.0175 16.21 18.2C16.8432 18.3398 17.4861 18.2754 18.1 18.0247C18.7136 17.7874 19.2819 17.3958 19.74 16.8354L23.62 16.6547Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <h2 class="text-2xl font-bold text-teal-600 mt-4">Our Company</h2>
                            <p class="mt-2 text-gray-600">Providing quality products since 2024.</p>
                        </div>

                        <div class="mt-8 lg:mt-0 lg:flex-1 lg:pl-12">
                            <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
                                <div>
                                    <h3 class="text-lg font-semibold text-white-600">Product</h3>
                                    <ul class="mt-4 space-y-2 text-gray-600">
                                        <li><a href="#" class="hover:text-teal-600">Features</a></li>
                                        <li><a href="#" class="hover:text-teal-600">Pricing</a></li>
                                        <li><a href="#" class="hover:text-teal-600">Integrations</a></li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 class="text-lg font-semibold  text-white-600">Company</h3>
                                    <ul class="mt-4 space-y-2 text-gray-600">
                                        <li><a href="#" class="hover:text-teal-600">About Us</a></li>
                                        <li><a href="#" class="hover:text-teal-600">Careers</a></li>
                                        <li><a href="#" class="hover:text-teal-600">Contact</a></li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 class="text-lg font-semibold  text-white-600">Resources</h3>
                                    <ul class="mt-4 space-y-2 text-gray-600">
                                        <li><a href="#" class="hover:text-teal-600">Help Center</a></li>
                                        <li><a href="#" class="hover:text-teal-600">Documentation</a></li>
                                        <li><a href="#" class="hover:text-teal-600">Blog</a></li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 class="text-lg font-semibold text-white-600">Legal</h3>
                                    <ul class="mt-4 space-y-2 text-gray-600">
                                        <li><a href="#" class="hover:text-teal-600">Privacy Policy</a></li>
                                        <li><a href="#" class="hover:text-teal-600">Terms of Service</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-8 border-t border-gray-200 pt-8 text-center text-gray-600">
                        <p>&copy; 2024 Our Company. All rights reserved.</p>
                    </div>
                </div>
            </footer>

        </>
    )

}

export default Footer;
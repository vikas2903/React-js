import React from 'react';
const Footer = () => {
    return (
        <>
            <footer class="bg-black  py-8">
                <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div class="lg:flex lg:items-start lg:gap-8">
                        <div class="text-teal-600">
                            <div className="ml-4 flex lg:ml-0">
                                <a href="#">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        alt=""
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        className="h-8 w-auto"
                                    />
                                </a>
                                <h2 class="text-2xl font-bold text-indigo-600 ml-2">Eastessence</h2>
                            </div>




                         
                            <p class="mt-2 text-gray-600">Providing quality products since 2024.</p>
                        </div>

                        <div class="mt-8 lg:mt-0 lg:flex-1 lg:pl-12">
                            <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
                                <div>
                                    <h3 class="text-lg font-semibold text-white-600">Categories</h3>
                                    <ul class="mt-4 space-y-2 text-gray-600">
                                        <li><a href="#" class="hover:text-indigo-600">Features</a></li>
                                        <li><a href="#" class="hover:text-indigo-600">Pricing</a></li>
                                        <li><a href="#" class="hover:text-indigo-600">Integrations</a></li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 class="text-lg font-semibold  text-white-600">Company</h3>
                                    <ul class="mt-4 space-y-2 text-gray-600">
                                        <li><a href="#" class="hover:text-indigo-600">About Us</a></li>
                                        <li><a href="#" class="hover:text-indigo-600">Careers</a></li>
                                        <li><a href="#" class="hover:text-indigo-600">Contact</a></li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 class="text-lg font-semibold  text-white-600">Resources</h3>
                                    <ul class="mt-4 space-y-2 text-gray-600">
                                        <li><a href="#" class="hover:text-indigo-600">Help Center</a></li>
                                        <li><a href="#" class="hover:text-indigo-600">Documentation</a></li>
                                        <li><a href="#" class="hover:text-indigo-600">Blog</a></li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 class="text-lg font-semibold text-white-600">Legal</h3>
                                    <ul class="mt-4 space-y-2 text-gray-600">
                                        <li><a href="#" class="hover:text-indigo-600">Privacy Policy</a></li>
                                        <li><a href="#" class="hover:text-indigo-600">Terms of Service</a></li>
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
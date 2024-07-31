import React from 'react'
import styled from 'styled-components'

function Newslatter() {
    return (
        <>
            <div className="w-full ">

                <div className="container flex flex-col xl:flex-row mx-auto px-5 py-8 xl:py-14 text-white-500 bg-black border-black-500 border-t-2">

                    <div className="w-full mb-6 xl:mb-0 sm:text-center">

                        <div className="mb-4 text-white-900 text-3xl font-extrabold">Join 2,000+ subscribers</div>

                        <div className="text-lg">Stay in the loop with everything you need to know.</div>

                    </div>

                    <div className="w-full">

                        <div className="flex flex-col justify-center sm:flex-row gap-3 w-full">

                            <input type="text" placeholder="Enter your email" className="sm:w-2/4 h-12 p-3 text-gray-900 border border-solid border-gray-300 rounded-lg shadow" />

                                <button type="submit" className="sm:w-1/4 h-12 text-white bg-indigo-600 rounded-lg shadow transition-all duration-300 ease-in-out hover:bg-purple-700">Subscribe</button>

                        </div>

                        <div className="mt-3 text-sm sm:text-center">We care about your data in our <u className="cursor-pointer transition-all duration-300 ease-in-out hover:text-gray-700">privacy policy</u>.</div>

                    </div>

                </div>

            </div >
        </>
    )
const Wrapper = styled.div`


`;
}

export default Newslatter
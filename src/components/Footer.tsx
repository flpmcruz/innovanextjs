import Image from "next/image"

export const Footer = () => {
    return (
        <footer className="bg-black">
            <div className="container max-w-6xl py-10 mx-auto">
                <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
                    <div
                        className="flex flex-col md:flex-row items-center space-y-8 md:items-start md:space-y-4"
                    >
                        <div className="h-8">
                            <Image src="/img/logoInnova.jpg" width="46" height="46" alt="logo image" className="w-20 md:ml-3" />
                        </div>

                        <div
                            className="uppercase flex flex-col items-center space-y-2 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3 pt-10"
                        >

                            <div className="h-10 group">
                                <a href="/about">About Us</a>
                                <div
                                    className="mx-2 group-hover:border-b group-hover:border-blue-50"
                                ></div>
                            </div>
                            <div className="h-10 group">
                                <a href="/gallery">Gallery</a>
                                <div
                                    className="mx-2 group-hover:border-b group-hover:border-blue-50"
                                ></div>
                            </div>
                            <div className="h-10 group">
                                <a href="/contact">Contact</a>
                                <div
                                    className="mx-2 group-hover:border-b group-hover:border-blue-50"
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="flex flex-col items-start justify-between space-y-4 pt-2"
                    >

                        <div
                            className="flex items-center justify-center mx-auto space-x-4 md:justify-center md:mx-0"
                        >
                            <div className="h-8 group transition hover:scale-125">
                                <a className="text-white hover:text-blue-400" href="https://facebook.com" target="_blank">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                            </div>

                            <div className="h-8 group transition hover:scale-125 ">
                                <a className="text-white hover:text-rose-600" href="https://instagram.com" target="_blank">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="font-bold text-center mr-4 text-gray-300">
                            {new Date().getFullYear()} Innova Construction. <span className="block md:inline-block">All Rights Reserved</span>
                        </div>
                    </div>
                </div>

            </div>
        </footer>

    )
}

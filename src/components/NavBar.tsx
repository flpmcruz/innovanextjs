import Image from "next/image"

export const Navbar = () => {
    return (
        <header className="text-gray-50 body-font absolute top-0 bg-black/70 w-full shadow-2xl items-center z-20">
            <div className="container mx-auto flex flex-wrap px-5 py-4 flex-row items-center justify-between ">
                <a href="/" className="flex font-medium items-center md:justify-start justify-center text-gray-900 text-xs md:text-base">
                    <div className="w-10 ">
                        <Image className="rounded-md" src="/img/logoInnova.jpg" width="46" height="46" alt="logo image" />
                    </div>
                    <span className="ml-3  text-gray-50 uppercase">Innova Construction</span>
                </a>

                <div className="flex flex-row">
                    <nav className="hidden md:ml-auto md:flex flex-wrap items-center text-base justify-center font-bold uppercase space-x-3">
                        <a href="/gallery" className="menu-items">Gallery</a>
                        <a href="/about" className="menu-items">About us</a>
                        <a href="/contact" className="menu-items">Contact</a>
                    </nav>

                    <span className="hidden md:inline-flex sm:ml-auto sm:mt-0 justify-center sm:justify-center items-center b">
                        <a className="ml-3 text-gray-400 hover:text-blue-400" href="https://facebook.com" target="_blank">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-400 hover:text-rose-600" href="https://instagram.com" target="_blank">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                    </span>

                    <div className="md:hidden">
                        <a href="tel:+12512842842" className="block px-4 py-2 rounded text-center text-lg font-semibold transition outline hover:bg-rose-600">Call us</a>
                    </div>
                </div>
            </div>
        </header>

    )
}

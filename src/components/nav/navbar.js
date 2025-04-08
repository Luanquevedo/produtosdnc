import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <header>
            <nav>
                <Link href="/" aria-label="Página inicial">
                    <div className="logo">
                        <Image
                            src="images/dnc-logo 2.svg"
                            alt="Logo dnc"
                            width={150}
                            height={80}
                            priority
                        />
                    </div>
                </Link>

                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About us</Link>
                    </li>
                    <li>
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar

import Link from 'next/link';
import React from 'react';
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const Navbar = async () => {
    const { isAuthenticated } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    return (
        <header className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Link className='text-3xl font-bold' href={'/'}>Next Blogger</Link>
                    <div>
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <Link href={'/blog'} className="text-gray-500 text-2xl  transition hover:text-gray-500/75 font-bold"> Blogs </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            {
                                !isUserAuthenticated ? (
                                    <div className='flex gap-2'>
                                        <RegisterLink className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                        >
                                            Register
                                        </RegisterLink>
                                        <LoginLink className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                        >
                                            Login
                                        </LoginLink>
                                    </div>) : (
                                    <div className='flex gap-4 items-center justify-center'>
                                            <Link href={'/profile'} className="text-gray-500 transition hover:text-gray-500/75 font-bold border-b-2 border-t-2"> Profile </Link>
                                        <LogoutLink className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                        >
                                            Log out
                                        </LogoutLink>
                                    </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
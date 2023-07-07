import { authModalState } from "@/atoms/authModalAtom";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSetRecoilState } from "recoil";
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
	const setAuthModalState = useSetRecoilState(authModalState);
	const handleClick = () => {
		setAuthModalState((prev) => ({ ...prev, isOpen: true }));
	};
	return (
		<div className='flex items-center justify-between sm:px-12 px-2 md:px-24'>
			<div className='flex items-center justify-between space-x-1'>
			<Link href='/' className='flex items-center justify-center h-20'>
				<Image src='/logo.png' alt='CodeBLoom' height={20} width={20} />
			</Link>
			<div className="text-white text-2xl ">
				<p>CodeBloom</p>
			</div>
			</div>
			
			<div className='flex items-center'>
				<button
					className='bg-pink-500 text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium hover:text-pink-700 hover:bg-white hover:border-2 
					hover:border-pink-600 border-2 border-transparent transition duration-300 ease-in-out
                '
					onClick={handleClick}
				>
					Sign In
				</button>
			</div>
		</div>
	);
};
export default Navbar;

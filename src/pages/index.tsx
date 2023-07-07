import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import Topbar from "@/components/Topbar/Topbar";
import useHasMounted from "@/hooks/useHasMounted";

import { useState } from "react";

export default function Home() {
	const [loadingProblems, setLoadingProblems] = useState(true);
	const hasMounted = useHasMounted();

	if (!hasMounted) return null;

	return (
		<>
			<main className='bg-dark-layer-2 min-h-screen'>
				<Topbar />
				<div className=" flex justify-center space-x-4 mt-8 max-w-md mx-auto bg-neutral-800 shadow-lg rounded-lg overflow-hidden ">
					<div className="p-4">
						<div className="flex items-center justify-center mx-auto">
						<svg className="w-24 h-24">
							<circle
							fill="none"
							cx="50"
							cy="53"
							r="40"
							strokeWidth="3"
							strokeLinecap="round"
							// stroke="currentColor"
							stroke="#ff38bd"
							className="text-pink-500 dark:text-yellow-900"
							style={{ strokeDasharray: 'calc(  50* 94.2 / 100) 300' }}
							></circle>
							<text x="50%" y="50%"  stroke="#51c5cf" stroke-width="2px" dy=".3em" className="text-center text-white dark:text-white">
							10
							</text>
						</svg>
						</div>
						<text className="text-center text-white dark:text-white">
						Solved Problems
						</text>
						 

						<div className="mt-4">
						{/* Add your card content here */}
						</div>
					</div>
				</div>

				<div className="flex justify-center space-x-4 mt-8">
					<button className="bg-pink-500 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded">
					Array
					</button>
					<button className="bg-pink-500 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded">
					String
					</button>
					<button className="bg-pink-500 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded">
					Linked List
					</button>
					<button className="bg-pink-500 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded">
					Dynamic Programming
					</button>
					<button className="bg-pink-500 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded">
					Math
					</button>
					<button className="bg-pink-500 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded">
					Greedy
					</button>
					<button className="bg-pink-500 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded">
					Stack
					</button>
					<button className="bg-pink-500 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded">
					Queue
					</button>
					<button className="bg-pink-500 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded">
					Heaps
					</button>
					<button className="bg-pink-500 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded">
					Binary tree
					</button>
					<button className="bg-pink-500 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded">
					Graph
					</button>

				</div>
				<h1
					className='text-2xl text-center text-gray-700 dark:text-gray-100 font-medium
					uppercase mt-10 mb-5 italic' style={{ fontFamily: 'cursive' }}
				>
					&ldquo; Dedication fuels your code, practice with passion and watch it explode! &rdquo; 
				</h1>
				<div className='relative overflow-x-auto mx-auto px-6 pb-10'>
					{loadingProblems && (
						<div className='max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse'>
							{[...Array(10)].map((_, idx) => (
								<LoadingSkeleton key={idx} />
							))}
						</div>
					)}
					<table className='text-sm text-left text-gray-500 dark:text-gray-200 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
						{!loadingProblems && (
							<thead className='text-xs text-gray-700 uppercase dark:text-gray-100 border-b '>
								<tr>
									<th scope='col' className='px-1 py-3 w-0 font-medium'>
										Status
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Title
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Difficulty
									</th>

									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Category
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Solution
									</th>
								</tr>
							</thead>
						)}
						<ProblemsTable setLoadingProblems={setLoadingProblems} />
					</table>
				</div>
			</main>
		</>
	);
}

const LoadingSkeleton = () => {
	return (
		<div className='flex items-center space-x-12 mt-4 px-6'>
			<div className='w-6 h-6 shrink-0 rounded-full bg-green-200'></div>
			<div className='h-4 sm:w-52  w-32  rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52  w-32 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1'></div>
			<span className='sr-only'>Loading...</span>
		</div>
	);
};

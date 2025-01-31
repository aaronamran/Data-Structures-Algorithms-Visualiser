import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import ArrayPage from "./content/basic-data-structures/array-page";
import LinkedListsPage from "./content/basic-data-structures/linked-lists-page";
import StacksPage from "./content/basic-data-structures/stacks-page";
import QueuesPage from "./content/basic-data-structures/queues-page";
import HashTablesPage from "./content/basic-data-structures/hash-tables-page";

function App() {
	const chapters = [
		{
			title: "1. Basic Data Structures",
			subchapters: [
				{ title: "Array", path: "/array" },
				{ title: "Linked Lists", path: "/linked-lists" },
				{ title: "Stacks", path: "/stacks" },
				{ title: "Queues", path: "/queues" },
				{ title: "Hash Tables", path: "/hash-tables" },
			],
		},
		{
			title: "2. Algorithmic Complexity",
			subchapters: [
				"Time vs Space Complexity",
				"How to Calculate Complexity?",
				{
					title: "Common Runtimes",
					subchapters: [
						"Constant",
						"Logarithmic",
						"Linear",
						"Polynomial",
						"Exponential",
						"Factorial",
					],
				},
				{
					title: "Asymptotic Notation",
					subchapters: [
						"Big O Notation",
						"Big Theta Notation",
						"Big Omega Notation",
					],
				},
			],
		},
		{
			title: "3. Sorting Algorithms",
			subchapters: [
				"Bubble Sort",
				"Selection Sort",
				"Insertion Sort",
				"Merge Sort",
				"Quick Sort",
				"Counting Sort",
				"Heap Sort",
				"Radix Sort",
				"Bucket Sort",
			],
		},
		{
			title: "4. Search Algorithms",
			subchapters: [
				"Linear Search",
				"Binary Search",
				"Jump Search",
				"Interpolation Search",
				"Exponential Search",
				"Ternary Search",
				"Fibonacci Search",
				"Sublist Search (Search a linked list in another list)",
				"The Ubiquitous Binary Search",
				"Recursive program to linearly search an element in a given array",
				"Recursive function to do substring search",
				"Unbounded Binary Search Example (Find the point where a monotonically increasing function becomes positive first time)",
			],
		},
		{
			title: "5. Tree Data Structures",
			subchapters: [
				"Binary Trees",
				"Binary Search Trees",
				"AVL Trees",
				"B-Trees",
				{
					title: "Tree Traversal",
					subchapters: [
						"In-Order Traversal",
						"Pre-Order Traversal",
						"Post-Order Traversal",
					],
				},
				{
					title: "Search Algorithms",
					subchapters: ["Breadth First Search", "Depth First Search"],
				},
			],
		},
		{
			title: "6. Graph Data Structures",
			subchapters: [
				"Directed Graph",
				"Undirected Graph",
				{
					title: "Search Algorithms",
					subchapters: ["Breadth First Search", "Depth First Search"],
				},
				{
					title: "Shortest Path Algorithms",
					subchapters: ["Djikstra's Algorithm", "Bellman-Ford Algorithm"],
				},
				{
					title: "Minimum Spanning Tree",
					subchapters: ["Prim's Algorithm", "Kruskal's Algorithm"],
				},
				{
					title: "Maximum Flow",
					subchapters: ["Ford-Fulkerson Algorithm", "Edmonds-Karp Algorithm"],
				},
			],
		},
		{
			title: "7. Advanced Data Structures",
			subchapters: [
				"Trie",
				"Segment Trees",
				"Fenwick Trees",
				"Disjoint Set (Union-Find)",
				"Suffix Trees and Arrays",
			],
		},
		{
			title: "8. Complex Data Structures",
			subchapters: [
				"B/B+ Trees",
				"Skip List",
				"ISAM (Indexed Sequential Access Method)",
				"2-3 Trees",
			],
		},
		{
			title: "9. Indexing",
			subchapters: ["Linear Indexing", "Tree-Based Indexing"],
		},
		{
			title: "10. Problem Solving Techniques",
			subchapters: [
				"Brute Force",
				"Backtracking",
				"Greedy Algorithms",
				"Randomised Algorithms",
				"Divide and Conquer",
				"Recursion",
				"Dynamic Programming",
				"Two Pointer Technique",
				"Sliding Window Technique",
			],
		},
	];

	const renderSubchapters = (subchapters) => {
		return (
			<ul>
				{subchapters.map((subchapter, subIndex) => (
					<li key={subIndex}>
						{typeof subchapter === "string" ? (
							subchapter
						) : (
							<>
								{subchapter.path ? (
									<Link to={subchapter.path}>{subchapter.title}</Link>
								) : (
									subchapter.title
								)}
								{subchapter.subchapters &&
									renderSubchapters(subchapter.subchapters)}
							</>
						)}
					</li>
				))}
			</ul>
		);
	};

	return (
		<Router>
			<div className="App">
				<Header />
				<main>
					<Routes>
						<Route path="/array" element={<ArrayPage />} />
						<Route path="/linked-lists" element={<LinkedListsPage />} />
            <Route path="/stacks" element={<StacksPage />} />
            <Route path="/queues" element={<QueuesPage />} />
            <Route path="/hash-tables" element={<HashTablesPage />} />
						<Route
							path="/"
							element={
								<>
									<h1>Data Structures and Algorithms Visualiser</h1>
									<div className="large-container">
										<div className="chapters">
											{chapters.map((chapter, index) => (
												<div key={index} className="chapter-container">
													<h2>{chapter.title}</h2>
													{chapter.subchapters &&
														renderSubchapters(chapter.subchapters)}
												</div>
											))}
										</div>
									</div>
								</>
							}
						/>
					</Routes>
				</main>
			</div>
		</Router>
	);
}

export default App;

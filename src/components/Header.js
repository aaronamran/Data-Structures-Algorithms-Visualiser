import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Modal from "./Modal";
import Accordion from "./Accordion";

const Header = () => {
	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState(null);

	const chapters = [
		{
			title: "1. Basic Data Structures",
			subchapters: [
				{ title: "Array" },
				{ title: "Linked Lists" },
				{ title: "Stacks" },
				{ title: "Queues" },
				{ title: "Hash Tables" },
			],
		},
		{
			title: "2. Algorithmic Complexity",
			subchapters: [
				{ title: "Time vs Space Complexity" },
				{ title: "How to Calculate Complexity?" },
				{
					title: "Common Runtimes",
					subchapters: [
						{ title: "Constant" },
						{ title: "Logarithmic" },
						{ title: "Linear" },
						{ title: "Polynomial" },
						{ title: "Exponential" },
						{ title: "Factorial" },
					],
				},
				{
					title: "Asymptotic Notation",
					subchapters: [
						{ title: "Big O Notation" },
						{ title: "Big Theta Notation" },
						{ title: "Big Omega Notation" },
					],
				},
			],
		},
		{
			title: "3. Sorting Algorithms",
			subchapters: [
				{ title: "Bubble Sort" },
				{ title: "Selection Sort" },
				{ title: "Insertion Sort" },
				{ title: "Merge Sort" },
				{ title: "Quick Sort" },
				{ title: "Counting Sort" },
				{ title: "Heap Sort" },
				{ title: "Radix Sort" },
				{ title: "Bucket Sort" },
			],
		},
		{
			title: "4. Search Algorithms",
			subchapters: [
				{ title: "Linear Search" },
				{ title: "Binary Search" },
				{ title: "Jump Search" },
				{ title: "Interpolation Search" },
				{ title: "Exponential Search" },
				{ title: "Ternary Search" },
				{ title: "Fibonacci Search" },
				{ title: "Sublist Search (Search a linked list in another list)" },
				{ title: "The Ubiquitous Binary Search" },
				{
					title:
						"Recursive program to linearly search an element in a given array",
				},
				{ title: "Recursive function to do substring search" },
				{
					title:
						"Unbounded Binary Search Example (Find the point where a monotonically increasing function becomes positive first time)",
				},
			],
		},
		{
			title: "5. Tree Data Structures",
			subchapters: [
				{ title: "Binary Trees" },
				{ title: "Binary Search Trees" },
				{ title: "AVL Trees" },
				{ title: "B-Trees" },
				{
					title: "Tree Traversal",
					subchapters: [
						{ title: "In-Order Traversal" },
						{ title: "Pre-Order Traversal" },
						{ title: "Post-Order Traversal" },
					],
				},
				{
					title: "Search Algorithms",
					subchapters: [
						{ title: "Breadth First Search" },
						{ title: "Depth First Search" },
					],
				},
			],
		},
		{
			title: "6. Graph Data Structures",
			subchapters: [
				{ title: "Directed Graph" },
				{ title: "Undirected Graph" },
				{
					title: "Search Algorithms",
					subchapters: [
						{ title: "Breadth First Search" },
						{ title: "Depth First Search" },
					],
				},
				{
					title: "Shortest Path Algorithms",
					subchapters: [
						{ title: "Djikstra's Algorithm" },
						{ title: "Bellman-Ford Algorithm" },
					],
				},
				{
					title: "Minimum Spanning Tree",
					subchapters: [
						{ title: "Prim's Algorithm" },
						{ title: "Kruskal's Algorithm" },
					],
				},
				{
					title: "Maximum Flow",
					subchapters: [
						{ title: "Ford-Fulkerson Algorithm" },
						{ title: "Edmonds-Karp Algorithm" },
					],
				},
			],
		},
		{
			title: "7. Advanced Data Structures",
			subchapters: [
				{ title: "Trie" },
				{ title: "Segment Trees" },
				{ title: "Fenwick Trees" },
				{ title: "Disjoint Set (Union-Find)" },
				{ title: "Suffix Trees and Arrays" },
			],
		},
		{
			title: "8. Complex Data Structures",
			subchapters: [
				{ title: "B/B+ Trees" },
				{ title: "Skip List" },
				{ title: "ISAM (Indexed Sequential Access Method)" },
				{ title: "2-3 Trees" },
			],
		},
		{
			title: "9. Indexing",
			subchapters: [
				{ title: "Linear Indexing" },
				{ title: "Tree-Based Indexing" },
			],
		},
		{
			title: "10. Problem Solving Techniques",
			subchapters: [
				{ title: "Brute Force" },
				{ title: "Backtracking" },
				{ title: "Greedy Algorithms" },
				{ title: "Randomised Algorithms" },
				{ title: "Divide and Conquer" },
				{ title: "Recursion" },
				{ title: "Dynamic Programming" },
				{ title: "Two Pointer Technique" },
				{ title: "Sliding Window Technique" },
			],
		},
	];

	const handleOpenModal = (content) => {
		setModalContent(content);
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
		setModalContent(null);
	};

	const getModalTitle = () => {
		switch (modalContent) {
			case "about":
				return "About";
			case "chapters":
				return "Chapters";
			case "contact":
				return "Contact";
			default:
				return "";
		}
	};

	return (
		<header className="header">
			<nav>
				<ul className="nav-list">
					<li className="nav-item">
						<Link to="/">Home</Link>
					</li>
					<li className="nav-item">
						<button
							className="nav-button"
							onClick={() => handleOpenModal("about")}
						>
							About
						</button>
					</li>
					<li className="nav-item">
						<button
							className="nav-button"
							onClick={() => handleOpenModal("chapters")}
						>
							Chapters
						</button>
					</li>
					<li className="nav-item">
						<button
							className="nav-button"
							onClick={() => handleOpenModal("contact")}
						>
							Contact
						</button>
					</li>
				</ul>
			</nav>
			<Modal show={showModal} onClose={handleCloseModal} title={getModalTitle()}>
				{modalContent === "about" && (
					<>
						<p>
							This is a React frontend project to learn Data Structures and
							Algorithms which begin on 30th January 2025. It is initially based
							on{" "}
							<a href="https://roadmap.sh/datastructures-and-algorithms">
								roadmap.sh
							</a>{" "}
							and is modified to include extra data structures and algorithms.
							The contents are numbered according to increasing difficulty.
						</p>
					</>
				)}
				{modalContent === "chapters" && <Accordion chapters={chapters} />}
				{modalContent === "contact" && (
					<>
						<p>You can find me on GitHub and LinkedIn.</p>
					</>
				)}
			</Modal>
		</header>
	);
};

export default Header;

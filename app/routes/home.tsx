import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import ResumeCard from "~/components/ResumeCard";
import { resumes } from "../../constants";
import { usePuterStore } from "~/lib/puter";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "AI Resume Application" },
		{ name: "description", content: "Smart Feedback for dream job" },
	];
}

export default function Home() {
	const { auth } = usePuterStore();
	const navigate = useNavigate();

	useEffect(() => {
		if (!auth.isAuthenticated) navigate("/auth?next=/");
	}, [auth.isAuthenticated]);
	return (
		<main className="bg-[url('/images/bg-main.svg')] bg-cover">
			<Navbar />
			<section className='main-section'>
				<div className='page-heading'>
					<h1>Track Your Applications and Resume Ratings</h1>
					<h2>Review your submission and check AI-powered feedback</h2>
				</div>
			</section>
			{resumes.length > 0 && (
				<div className='resumes-section py-16'>
					{resumes.map((resume) => (
						<ResumeCard key={resume.id} resume={resume} />
					))}
				</div>
			)}
		</main>
	);
}

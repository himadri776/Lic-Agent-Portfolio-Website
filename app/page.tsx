"use client";
import {
	ArrowRight,
	ArrowUpRight,
	Award,
	BadgeIndianRupee,
	CheckCircle2,
	ChevronDown,
	Clock,
	HeartHandshake,
	Landmark,
	Mail,
	Menu,
	MessageCircle,
	Phone,
	ShieldCheck,
	Sparkles,
	Star,
	Umbrella,
	UserRound,
	Wallet,
	X,
} from "lucide-react";
import { useState } from "react";

const phone = "9436139252";
const wa = `https://wa.me/91${phone}?text=${encodeURIComponent("Hello Prakriti, I would like to know more about LIC plans.")}`;
const plans = [
	{
		name: "Jeevan Utsav",
		tag: "FEATURED · WHOLE LIFE",
		desc: "A whole-life plan designed to combine protection with an income-focused benefit structure.",
		icon: Sparkles,
		accent: "mint",
		link: "https://www.licindia.in/",
	},
	{
		name: "Jeevan Umang",
		tag: "WHOLE LIFE",
		desc: "Explore long-term protection and survival benefits with a whole-life horizon.",
		icon: Umbrella,
		accent: "sand",
		link: "https://www.licindia.in/",
	},
	{
		name: "New Jeevan Anand",
		tag: "ENDOWMENT",
		desc: "A savings-oriented life insurance option with protection and maturity benefits.",
		icon: ShieldCheck,
		accent: "blue",
		link: "https://www.licindia.in/",
	},
	{
		name: "Jeevan Labh",
		tag: "LIMITED-PAY ENDOWMENT",
		desc: "A limited premium payment option for long-term financial goals and family protection.",
		icon: Wallet,
		accent: "lavender",
		link: "https://www.licindia.in/",
	},
	{
		name: "New Endowment Plan",
		tag: "ENDOWMENT",
		desc: "A traditional plan to help plan for future milestones while maintaining life cover.",
		icon: Landmark,
		accent: "rose",
		link: "https://www.licindia.in/",
	},
];
const gallery = [
	"Recognition & milestones",
	"Client service moments",
	"Professional achievements",
	"Learning & growth",
];
function ContactButtons({ compact = false }: { compact?: boolean }) {
	return (
		<div className={`contact-actions ${compact ? "compact" : ""}`}>
			<a className="btn primary" href={wa} target="_blank" rel="noreferrer">
				<MessageCircle size={18} /> WhatsApp enquiry <ArrowUpRight size={16} />
			</a>
			<a className="btn secondary" href={`tel:+91${phone}`}>
				<Phone size={17} /> Call directly
			</a>
		</div>
	);
}
export default function Home() {
	const [menu, setMenu] = useState(false);
	const [age, setAge] = useState(30);
	const [cover, setCover] = useState(2500000);
	const [goal, setGoal] = useState("family");
	const [sent, setSent] = useState(false);
	const estimate =
		(cover / 1000000) * Math.max(300, age < 30 ? 360 : age < 40 ? 500 : 700);
	return (
		<main>
			<nav className="nav">
				<a className="brand" href="#home">
					<span className="brand-mark">
						<ShieldCheck size={23} />
					</span>
					<span>
						<b>Prakriti Chakraborty</b>
						<small>LIC INTERMEDIARY · AGARTALA</small>
					</span>
				</a>
				<div className="nav-links">
					<a href="#plans">Plans</a>
					<a href="#about">About</a>
					<a href="#recognition">Achievements</a>
					<a href="#contact">Contact</a>
				</div>
				<a className="nav-cta" href={wa} target="_blank" rel="noreferrer">
					Talk to an advisor <ArrowUpRight size={15} />
				</a>
				<button
					className="menu-toggle"
					onClick={() => setMenu(!menu)}
					aria-label="Toggle navigation"
				>
					{menu ? <X /> : <Menu />}
				</button>
			</nav>
			{menu && (
				<div className="mobile-menu">
					<a onClick={() => setMenu(false)} href="#plans">
						Plans
					</a>
					<a onClick={() => setMenu(false)} href="#about">
						About
					</a>
					<a onClick={() => setMenu(false)} href="#recognition">
						Achievements
					</a>
					<a onClick={() => setMenu(false)} href="#contact">
						Contact
					</a>
				</div>
			)}
			<section id="home" className="hero">
				<div className="hero-bg-orb orb1" />
				<div className="hero-bg-orb orb2" />
				<div className="hero-grid">
					<div className="hero-copy">
						<div className="eyebrow">
							<span className="dot" /> PERSONAL INSURANCE GUIDANCE · AGARTALA
						</div>
						<h1>
							Protection for today.
							<br />
							<em>Confidence for</em>
							<br />
							every tomorrow.
						</h1>
						<p className="hero-desc">
							Thoughtful guidance to help you protect your family, plan your
							future, and make informed decisions about life insurance.
						</p>
						<ContactButtons />
						<div className="hero-proof">
							<div className="proof-icon">
								<ShieldCheck size={19} />
							</div>
							<span>
								Personalized guidance
								<br />
								<b>One conversation at a time</b>
							</span>
							<div className="proof-divider" />
							<span className="lic-wordmark">
								LIC <small>Life Insurance Corporation of India</small>
							</span>
						</div>
					</div>
					<div className="hero-visual">
						<div className="portrait-card">
							<div className="portrait-halo" />
							<img
								className="portrait-placeholder"
								src="/images/IMG_Main.png"
								alt="Prakriti Chakraborty, LIC advisor"
							/>
							<div className="portrait-caption">
								<div>
									<span className="caption-kicker">YOUR LIC ADVISOR</span>
									<strong>Prakriti Chakraborty</strong>
									<span>LIC Intermediary / Agent</span>
								</div>
								<div className="verified">
									<ShieldCheck size={18} />
								</div>
							</div>
						</div>
						<div className="float-card fc-top">
							<div className="float-icon green">
								<Award size={19} />
							</div>
							<div>
								<b>Milestones & recognition</b>
								<small>Showcasing a journey of service</small>
							</div>
						</div>
						<div className="hero-spark">✦</div>
					</div>
				</div>
				<div className="hero-bottom">
					<span>HELPING FAMILIES PLAN WITH CLARITY</span>
					<a href="#plans">
						Explore insurance options <ArrowRight size={14} />
					</a>
				</div>
			</section>
			<section className="trust-strip">
				<div>
					<span className="trust-icon">
						<ShieldCheck />
					</span>
					<b>Protection-focused planning</b>
					<small>Understand your options</small>
				</div>
				<div>
					<span className="trust-icon">
						<HeartHandshake />
					</span>
					<b>Personal guidance</b>
					<small>Support along the way</small>
				</div>
				<div>
					<span className="trust-icon">
						<Clock />
					</span>
					<b>Long-term perspective</b>
					<small>Plan for life's milestones</small>
				</div>
				<div>
					<span className="trust-icon">
						<BadgeIndianRupee />
					</span>
					<b>Goal-based approach</b>
					<small>Discuss budget & priorities</small>
				</div>
			</section>
			<section className="section plans-section" id="plans">
				<div className="section-head">
					<div>
						<div className="eyebrow">POLICIES TO EXPLORE</div>
						<h2>
							Plans for different
							<br />
							<em>chapters of life.</em>
						</h2>
					</div>
					<p>
						Every family has a different story and set of priorities. Start with
						a plan that matches your goals—then let's understand the details
						together.
					</p>
				</div>
				<div className="plan-grid">
					{plans.map((p, i) => {
						const Icon = p.icon;
						return (
							<article
								className={`plan-card ${i === 0 ? "featured" : ""}`}
								key={p.name}
							>
								<div className={`plan-icon ${p.accent}`}>
									<Icon size={i === 0 ? 29 : 24} />
								</div>
								{i === 0 && (
									<span className="featured-pill">FEATURED PLAN</span>
								)}
								<span className="plan-tag">{p.tag}</span>
								<h3>{p.name}</h3>
								<p>{p.desc}</p>
								<a
									className="plan-link"
									href={wa}
									target="_blank"
									rel="noreferrer"
								>
									Request details <ArrowUpRight size={16} />
								</a>
							</article>
						);
					})}
				</div>
				<div className="plan-note">
					Plan features, eligibility and benefits are subject to official LIC
					policy terms. This page is for information and enquiry purposes only.
				</div>
			</section>
			<section className="calculator-section">
				<div className="calc-copy">
					<div className="eyebrow">A STARTING POINT</div>
					<h2>
						What kind of
						<br />
						<em>protection feels right?</em>
					</h2>
					<p>
						Use this simple conversation starter to think about the protection
						level you may want to explore. It is not a premium quote.
					</p>
					<div className="calc-mini-note">
						<ShieldCheck size={20} />
						<span>
							We'll help you compare options based on your family needs and
							budget.
						</span>
					</div>
				</div>
				<div className="calc-card">
					<div className="calc-card-top">
						<span>PROTECTION PLANNER</span>
						<span className="calc-chip">Illustrative only</span>
					</div>
					<label>
						Age of the person to be insured <b>{age} years</b>
					</label>
					<input
						type="range"
						min="18"
						max="60"
						value={age}
						onChange={(e) => setAge(Number(e.target.value))}
					/>
					<div className="range-labels">
						<span>18</span>
						<span>60</span>
					</div>
					<label>Desired cover amount</label>
					<div className="cover-options">
						{[1000000, 2500000, 5000000, 10000000].map((n) => (
							<button
								className={cover === n ? "selected" : ""}
								key={n}
								onClick={() => setCover(n)}
							>
								{n === 1000000
									? "₹10L"
									: n === 2500000
										? "₹25L"
										: n === 5000000
											? "₹50L"
											: "₹1Cr"}
							</button>
						))}
					</div>
					<label>Primary goal</label>
					<div className="goal-options">
						<button
							className={goal === "family" ? "selected" : ""}
							onClick={() => setGoal("family")}
						>
							Family protection
						</button>
						<button
							className={goal === "savings" ? "selected" : ""}
							onClick={() => setGoal("savings")}
						>
							Long-term savings
						</button>
						<button
							className={goal === "income" ? "selected" : ""}
							onClick={() => setGoal("income")}
						>
							Future income
						</button>
					</div>
					<div className="calc-result">
						<div>
							<small>YOUR DISCUSSION STARTING POINT</small>
							<strong>
								₹{(cover / 100000).toLocaleString("en-IN")} <small>lakh</small>
							</strong>
							<span>Selected protection amount</span>
						</div>
						<div className="result-icon">
							<Sparkles />
						</div>
					</div>
					<a
						className="btn primary full"
						href={`${wa}&text=${encodeURIComponent(`Hello Prakriti, I'd like to discuss a plan. Age: ${age}, cover interest: ₹${cover.toLocaleString("en-IN")}, goal: ${goal}.`)}`}
						target="_blank"
						rel="noreferrer"
					>
						Discuss my options <ArrowRight size={16} />
					</a>
				</div>
			</section>
			<section className="about-section" id="about">
				<div className="about-image">
					<div className="about-image-placeholder">
						<UserRound size={90} />
						<span>YOUR PHOTO</span>
					</div>
					<div className="about-stamp">
						<span>LIC</span>
						<small>
							Life Insurance
							<br />
							Advisor
						</small>
					</div>
				</div>
				<div className="about-copy">
					<div className="eyebrow">YOUR ADVISOR</div>
					<h2>
						Guidance with a<br />
						<em>personal touch.</em>
					</h2>
					<p>
						I'm Prakriti Chakraborty, an LIC intermediary based in Agartala. My
						approach is to make insurance conversations simple, clear and
						centered on what matters most to you.
					</p>
					<p>
						Whether you're planning for your family's security, a future
						milestone, or a steady financial foundation, I can help you
						understand available options and navigate the next step.
					</p>
					<div className="about-points">
						<div>
							<CheckCircle2 size={18} /> Clear explanations, without jargon
						</div>
						<div>
							<CheckCircle2 size={18} /> Guidance based on your goals
						</div>
						<div>
							<CheckCircle2 size={18} /> Support through your policy journey
						</div>
					</div>
					<ContactButtons compact />
				</div>
			</section>
			<section className="recognition-section" id="recognition">
				<div className="section-head">
					<div>
						<div className="eyebrow">A JOURNEY OF DEDICATION</div>
						<h2>
							Every milestone has
							<br />
							<em>a story behind it.</em>
						</h2>
					</div>
					<p>
						A growing gallery of professional highlights, recognitions and
						moments that reflect the commitment to serving policyholders.
					</p>
				</div>
				<div className="gallery-grid">
					{gallery.map((g, i) => (
						<div className={`gallery-tile tile${i + 1}`} key={g}>
							<div className="gallery-art">
								<div className="art-orbit orbit-a" />
								<div className="art-orbit orbit-b" />
								<div className="art-symbol">
									{i === 0 ? (
										<Award />
									) : i === 1 ? (
										<HeartHandshake />
									) : i === 2 ? (
										<Star />
									) : (
										<Sparkles />
									)}
								</div>
								<span className="art-year">
									MILESTONE {String(i + 1).padStart(2, "0")}
								</span>
							</div>
							<div className="gallery-caption">
								<span>{g}</span>
								<small>Replace with achievement photo</small>
							</div>
						</div>
					))}
				</div>
				<p className="gallery-edit-note">
					Gallery placeholders are ready for award photographs, certificates and
					event images.
				</p>
			</section>
			<section className="contact-section" id="contact">
				<div className="contact-bg-shape" />
				<div className="contact-inner">
					<div className="eyebrow light">LET'S TALK ABOUT YOUR PLANS</div>
					<h2>
						A little clarity today
						<br />
						<em>can make a difference tomorrow.</em>
					</h2>
					<p>
						Have a question or want to explore a policy? Reach out for a
						friendly, no-pressure conversation.
					</p>
					<ContactButtons />
					<div className="contact-details">
						<div>
							<Phone size={16} />
							<span>94361 39252</span>
						</div>
						<div>
							<Mail size={16} />
							<span>Enquiries welcome</span>
						</div>
						<div>
							<Landmark size={16} />
							<span>Agartala, Tripura (West)</span>
						</div>
					</div>
				</div>
			</section>
			<footer className="footer">
				<div className="footer-brand">
					<span className="brand-mark">
						<ShieldCheck size={21} />
					</span>
					<div>
						<b>Prakriti Chakraborty</b>
						<small>LIC INTERMEDIARY / AGENT</small>
					</div>
				</div>
				<div className="footer-address">
					Tahkur Palli Lane, Sankar Chowmuhani
					<br />
					Agartala, Tripura (West)
				</div>
				<div className="footer-links">
					<a href={wa} target="_blank" rel="noreferrer">
						WhatsApp
					</a>
					<a href={`tel:+91${phone}`}>Call</a>
					<a href="#home">Back to top ↑</a>
				</div>
				<div className="copyright">
					© {new Date().getFullYear()} Prakriti Chakraborty. All rights
					reserved. <span>Agent Code: 0349849E55555</span>
				</div>
				<div className="disclaimer">
					Insurance is the subject matter of solicitation. Please read policy
					documents and official terms carefully before making a decision.
				</div>
			</footer>
			<a
				className="floating-wa"
				href={wa}
				target="_blank"
				rel="noreferrer"
				aria-label="Chat on WhatsApp"
			>
				<MessageCircle />
			</a>
		</main>
	);
}

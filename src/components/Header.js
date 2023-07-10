import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.svg";
import "../styles/main.css";

function Header() {
	const navRef = useRef();

	const showHeader = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<img src={logo} alt="Logo" className="nav-logo"/>
			<nav ref={navRef}>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/analise">Análise de dados</a>
					</li>
					<li>
						<a href="/quemsomos">Quem somos</a>
					</li>
					<li>
						<a href="/documentacao">Documentação</a>
					</li>
				</ul>
				<button className="nav-btn nav-close-btn" onClick={showHeader}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showHeader}>
				<FaBars />
			</button>
		</header>
	);
}

export default Header;
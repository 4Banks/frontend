import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Assets/logo.svg";
import "../Styles/main.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
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
						<a href="/#">Home</a>
					</li>
					<li>
						<a href="/#">Análise de dados</a>
					</li>
					<li>
						<a href="/#">Quem somos</a>
					</li>
					<li>
						<a href="/#">Documentação</a>
					</li>
				</ul>
				<button className="nav-btn nav-close-btn" onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
import { useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.svg";
import "../styles/global.css";
import "../styles/header.css";

function Header() {
	const navRef = useRef();

	const location = useLocation();

	const isActive = (pathname) => {
	  return location.pathname === pathname ? 'active' : '';
	};

	const showHeader = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
		  <img src={logo} alt="Logo" className="nav-logo" />
		  <nav ref={navRef}>
			<ul>
			  <li className={isActive('/')}>
				<Link to="/">Home</Link>
			  </li>
			  <li className={isActive('/analise')}>
				<Link to="/analise">Análise de dados</Link>
			  </li>
			  <li className={isActive('/quemsomos')}>
				<Link to="/quemsomos">Quem somos</Link>
			  </li>
			  <li className={isActive('/documentacao')}>
				<Link to="/documentacao">Documentação</Link>
			  </li>
			</ul>
			<button className="nav-btn nav-close-btn" onClick={showHeader}>
			  <FaTimes />
			</button>
		  </nav>
		  <button className="nav-btn" onClick={showHeader}>
			<FaBars />
		  </button>
		</header>
	  );
}

export default Header;
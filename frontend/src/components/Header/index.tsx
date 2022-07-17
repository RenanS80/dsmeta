import logo from '../../assets/images/logo.png';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>Desenvolvido por <a href="https://github.com/RenanS80" target="_blank">@renans80</a>
                </p>
            </div>
        </header>
    )
}

export default Header;
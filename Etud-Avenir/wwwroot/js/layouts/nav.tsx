import React = require("react");
import { Link } from "react-router-dom";

type NavProperties = {
    isUserAuthentified: boolean
}
type NavState = {}

export default class Nav extends React.Component<NavProperties, NavState> {
    render = () => {
        return <header>
            <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow">
                <div className="container-fluid d-flex justify-content-between">
                    <a className="navbar-brand" href="/">
                        <img src="/images/logo_color.png" height="36" />
                    </a>
                    {this.props.isUserAuthentified ? <NavLogin /> : <NavLogout />}
                </div>
            </nav>
        </header>
    }
}

/**
 * Représente la nav quand l'utilisateur est connecté
 * */
class NavLogin extends React.Component {
    render = () => {
        return <>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/recherche">Rechercher</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/ecoles">Base de données</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact</a>
                </li>
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/profil">Profil</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Identity/Account/Logout">Déconnexion</a>
                </li>
            </ul>
        </>
    }
}

/**
 * Réprésente la navbar quand l'utilisateur est déconnecté 
 */
class NavLogout extends React.Component {
    render = () => {
        return <>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/recherche">Rechercher</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/ecoles">Base de données</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact</a>
                </li>
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/inscription">Inscription</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/connexion">Connexion</Link>
                </li>
            </ul>
        </>
    }
}
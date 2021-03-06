import classNames from 'classnames';
import style from "./Header.module.css"
import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "react-scroll";

//Assets
import { ReactComponent as Logo } from "../../assets/images/logo.svg"
import { AiOutlineCalendar } from "react-icons/ai";

export const Header = () => {

    const nav = [
        {
            name: "Home",
            link: "home"
        },
        {
            name: "Destinații",
            link: "destinations"
        },
        {
            name: "Contact",
            link: "contact"
        },
        {
            name: "Transport",
            link: "transport"
        }
    ]

    return (
        <Navbar expand="lg" sticky="top" className={classNames(style.nav, 'pt-2', 'py-md-3')}>
            <Container>

                <Navbar.Brand href="#home">
                    <Logo className={classNames(style.logo, 'img-fluid')} />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>

                    <Nav>
                        {nav && 
                            nav.map((item, index) => 
                                <Link key={index} to={item.link} spy={true} smooth={true} duration={500} className={classNames(style.link, 'nav-link', 'mx-3')}>
                                    {item.name}
                                </Link>
                            )
                        }

                        <Link to="contact" spy={true} smooth={true} duration={500} className="d-none d-md-flex justify-content-center align-items-center btn btn-warning px-4 ms-5" >
                            <AiOutlineCalendar className="me-2" />
                            Rezervă bilet
                        </Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
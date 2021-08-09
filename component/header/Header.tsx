import Link from "next/link"
import React from "react"
import { useContext } from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { AuthenticationContext } from "../../context/Authentication"
import { LoginForm } from "../../form/LoginForm"

const Header = () => {
    const { isAuthenticated, user } = useContext(AuthenticationContext);

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Link href="/" passHref>
                        <Navbar.Brand>NextJS Example App</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link href="/todo" passHref>
                                <Nav.Link>Todos</Nav.Link>
                            </Link>
                            {!isAuthenticated && (
                                <NavDropdown title="Login" id="login-dropdown">
                                    <NavDropdown.ItemText id="login-dropdown-container">
                                        <LoginForm />
                                    </NavDropdown.ItemText>
                                </NavDropdown>
                            )}
                            {isAuthenticated && (
                                <Navbar.Text>
                                    Signed in as: {user.username}
                                </Navbar.Text>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
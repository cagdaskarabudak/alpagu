import { Link } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";

export default function Navbar({children}) {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" href={route('home')}>
                    <ApplicationLogo></ApplicationLogo>
                </Link>
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <div className="navbar-brand">
                            <ApplicationLogo></ApplicationLogo>
                            <span className="brand-text">Alpagu Development <div className="brand-subtext">Çağdaş Karabudak</div></span>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                    </div>
                    <div className="offcanvas-body justify-content-center">
                        <ul className="navbar-nav">
                            {children}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
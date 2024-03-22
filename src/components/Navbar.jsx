import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body" data-bs-theme="dark">
			<div className="container">
				<Link to="/" className="navbar-brand" style={{ fontSize: "30px" }}>
					Sendle
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link to="/" className="nav-link active" aria-current="page">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/update" className="nav-link active">
								Update Order
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/track" className="nav-link active">
								Track Order
							</Link>
						</li>
					</ul>
					<ul className="navbar-nav ml-auto mb-2 mb-lg-0">
						<li className="nav-item dropdown" style={{ marginRight: "80px" }}>
							<a
								className="nav-link active dropdown-toggle"
								href="/"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Hello User
							</a>
							<ul className="dropdown-menu">
								<li>
									<a className="dropdown-item" href="/">
										username
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="/">
										email
									</a>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li style={{ textAlign: "center" }}>
									<button className="btn btn-danger">Logout</button>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

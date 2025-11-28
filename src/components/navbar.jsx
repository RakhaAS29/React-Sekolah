import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">

        <Link className="navbar-brand text-white" to="/">
          School
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ">

            <Link className="nav-link active text-white" aria-current="page" to="/">
              Beranda
            </Link>

            <Link className="nav-link text-white  " to="/daftar-staff">
              Daftar Staff
            </Link>

            <Link className="nav-link text-white" to="/buku-tamu">
              Buku Tamu
            </Link>

            <Link className="nav-link text-white" to="/data-siswa">
              Data Siswa
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}

import photo from "../img/photo-1592066575517-58df903152f2.jpg";

export default function Beranda() {
  return (
    <div className="container">
      <div
        className="row"
        style={{
          minHeight: "400px",
          backgroundImage: `url(${photo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-center text-white">Selamat Datang di Website Sekolah </h1>
      </div>

      <div className="row my-5">
        <div className="col-12">
          <h2 className="text-center">Tentang Kami</h2>
          <p className="mx-auto" style={{ maxWidth: 1000, textAlign: 'justify' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </div>
      </div>

    </div>
  );
}
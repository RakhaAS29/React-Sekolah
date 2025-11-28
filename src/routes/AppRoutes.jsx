import { Routes, Route } from "react-router-dom";
import Beranda from "../pages/beranda";
import DaftarStaff from "../pages/DaftarStaff";
import BukuTamu from "../pages/BukuTamu";
import DataSiswa from "../pages/DataSiswa";
import EditSiswa from "../pages/EditSiswa"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/daftar-staff" element={<DaftarStaff />} />
      <Route path="/buku-tamu" element={<BukuTamu />} />
      <Route path="/data-siswa" element={<DataSiswa />} />
      <Route path="/edit-siswa/:id" element={<EditSiswa />} />
    </Routes>
  )
}

export default App
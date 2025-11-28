import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

export default function EditSiswa() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [nama, setNama] = useState("");
    const [alamat, setAlamat] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchDataId = (id) => {
        axios
            .get(`http://72.61.142.184:3000/api/pelajar/${id}`)
            .then((res) => {
                const data = Array.isArray(res.data) ? res.data[0] : res.data;
                if (data) {
                    setNama(data.nama || "");
                    setAlamat(data.alamat || "");
                }
            })
            .catch((err) => {
                alert("Gagal mengambil data: " + err.message);
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        if (id) fetchDataId(id);
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        axios
            .put(`http://72.61.142.184:3000/api/pelajar/${id}`, {
                nama: nama,
                alamat: alamat,
            })
            .then(() => {
                alert("Data berhasil diupdate");
                navigate("/data-siswa");
            })
            .catch((err) => {
                alert("Gagal update: " + (err.response?.data?.message || err.message));
            })
            .finally(() => setLoading(false));
    };

    if (loading) {
        return (
            <div className="container mt-4 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12" style={{ maxWidth: '65%', margin: '0 auto' }}>
                        <h2 className="mb-4">Edit Data Siswa (ID: {id})</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="namaSiswa"
                                    placeholder="Nama Siswa"
                                    value={nama}
                                    onChange={(e) => setNama(e.target.value)}
                                    required
                                />
                                <label htmlFor="namaSiswa">Nama Siswa</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="alamatSiswa"
                                    placeholder="Alamat Siswa"
                                    value={alamat}
                                    onChange={(e) => setAlamat(e.target.value)}
                                    required
                                />
                                <label htmlFor="alamatSiswa">Alamat Siswa</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Simpan Perubahan</button>
                            <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate("/data-siswa")}>Batal</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
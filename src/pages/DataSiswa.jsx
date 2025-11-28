import axios from "axios"
import { useEffect, useState } from "react"
import { Modal } from "bootstrap"
import { FaEdit, FaRegTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function DataSiswa() {
    const [siswa, setSiswa] = useState([])
    const [loading, setLoading] = useState(false)
    const [namaSiswa, setNamaSiswa] = useState("")
    const [alamatSiswa, setAlamatSiswa] = useState("")
    const [deleteId, setDeleteId] = useState(null)
    const fetchData = () => {
        setLoading(true)
        axios
            .get("http://72.61.142.184:3000/api/pelajar")
            .then((response) => {
                // console.log("resp", response)
                setSiswa(response.data)
            })
            .catch((error) => {

            })
            .finally(() => {
                setLoading(false)
            })
    }
    useEffect(() => {
        fetchData();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        axios.post("http://72.61.142.184:3000/api/pelajar",
            {
                nama: namaSiswa,
                alamat: alamatSiswa,
            }
        )
            .then((response) => {
                fetchData()
            })
            .catch((error) => {

            })
            .finally(() => {
                setLoading(false)
                const modalE1 = document.getElementById("exampleModal")
                const modalInstance = Modal.getOrCreateInstance(modalE1)
                modalInstance.hide();
                document.body.classList.remove('modal-open')
                const backdrops = document.querySelectorAll('.modal-backdrop')
                backdrops.forEach((backdrop) => backdrop.remove())
            })
    }

    const handleDelete = (id) => {
        setDeleteId(id);
        const deleteModal = document.getElementById("deleteConfirmModal");
        if (deleteModal) {
            const modal = Modal.getOrCreateInstance(deleteModal);
            modal.show();
        }
    };

    const confirmDelete = () => {
        if (!deleteId) return;
        
        setLoading(true);
        
        axios
        .delete(`http://72.61.142.184:3000/api/pelajar/${deleteId}`)
        .then(() => {
            alert("Data berhasil dihapus");
            fetchData();
            const deleteModal = document.getElementById("deleteConfirmModal");
            if (deleteModal) {
                const modal = Modal.getInstance(deleteModal);
                if (modal) modal.hide();
            }
            setDeleteId(null);
        })
        .catch((error) => {
            alert("Gagal menghapus data: " + (error.response?.data?.message || error.message));
        })
        .finally(() => {
            setLoading(false);
        });
    };

    return (
        <div className="container mt-4">
            <button className="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Tambah Data
            </button>
            <div className="card">
                <div className="card-header">
                    Data Siswa
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>NO</th>
                                <th>ID</th>
                                <th>NAMA SISWA</th>
                                <th>ALAMAT SISWA</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading &&
                                <tr>
                                    <td colSpan={5} align="center">
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Loadig...</span>
                                        </div>
                                    </td>
                                </tr>
                            }
                            {siswa.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.id}</td>
                                    <td>{item.nama}</td>
                                    <td>{item.alamat}</td>
                                    <td>
                                    <button 
                                        type="button" 
                                        onClick={(e) => {
                                            console.log("Button clicked!", item.id);
                                            e.preventDefault();
                                            handleDelete(item.id);
                                        }} 
                                        className="btn btn-danger"
                                    > 
                                        <FaRegTrashAlt /> &nbsp; Hapus
                                    </button>
                                    <Link to={`/edit-siswa/${item.id}`} state={{ item }} className="btn btn-info ms-2"><FaEdit /> &nbsp; Edit</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            // Modal
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Tambah Data Siswa</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="Nama Siswa"
                                        value={namaSiswa} onChange={(e) => setNamaSiswa(e.target.value)} />
                                    <label htmlFor="floatingInput">Nama Siswa</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="Alamat Siswa"
                                        value={alamatSiswa} onChange={(e) => setAlamatSiswa(e.target.value)} />
                                    <label htmlFor="floatingInput">Alamat Siswa</label>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <input type="submit" className="btn btn-primary" value="Simpan" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Modal Konfirmasi Delete */}
            <div className="modal fade" id="deleteConfirmModal" tabIndex="-1" aria-labelledby="deleteConfirmLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="deleteConfirmLabel">Konfirmasi Hapus Data</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Apakah anda yakin ingin menghapus data ini? Tindakan ini tidak dapat dibatalkan.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                            <button type="button" className="btn btn-danger" onClick={confirmDelete}>Hapus</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
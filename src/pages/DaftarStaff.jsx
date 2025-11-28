export default function DaftarStaff() {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-12" style={{ maxWidth: '100%', margin: '0 auto' }}>
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Nama</th>
                  <th scope="col">Jabatan</th>
                  <th scope="col">Mata Pelajaran</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Bp. Mark Otto</td>
                  <td>Kepala Sekolah</td>
                  <td>Kimia Dasar</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Bp. Jacob Thornton</td>
                  <td>Guru</td>
                  <td>Fisika Dasar</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Ibu Siti</td>
                  <td>Guru</td>
                  <td>Biologi</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Bp. John Doe</td>
                  <td>Karyawan</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

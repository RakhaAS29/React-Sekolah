export default function BukuTamu() {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-12" style={{ maxWidth: '65%', margin: '0 auto' }}>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputName1" className="form-label">Nama</label>
                <input type="text" className="form-control" id="exampleInputName1"/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputMessage1" className="form-label">Pesan</label>
                <textarea className="form-control" id="exampleInputMessage1" rows="6" style={{ fontSize: '16px' }}></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

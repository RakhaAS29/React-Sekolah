export default function Card ({nama, deskripsi, harga}) {
    return( 
        <div style={{
            border: "1px solid gray",
            padding: "10px",
            borderRadius: "50px",
            minHeight: "50px",
            minWidth: "50px"
        }}>

        <h2 style={{color: "#ffff"}}>{nama}</h2>
        <p style={{color: "#ffff"}}>{deskripsi}</p>
        <h6 style={{color: "#ffff"}}>{harga}</h6>
        
        </div>
    )
}
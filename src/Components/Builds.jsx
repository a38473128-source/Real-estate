import styles from "../style.module.css";

export default function Builds({images}) {
  return (
    <div style={{marginTop: "70px"}}>
      <div style={{marginBottom:'30px' }}>
        <p
          className={styles.fontfont}
          style={{ color: "#f98140", fontSize: "20px" }}
        >
          Properties
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            alignItems: "center",
          }}
        >
          <h1
            className={styles.fontfont}
            style={{ fontSize: "40px", color: "#061f4a" }}
          >
            Recently Added <br /> Properties
          </h1>
          <p style={{ width: "400px", color: "gray", fontSize: "20px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
          <a
            href=""
            style={{
              textDecoration: "none",
              color: "white",
              backgroundColor: "#f98140",
              padding: "16px 30px",
              marginRight: "30px",
            }}
          >
            VIEW ALL
          </a>
        </div>
      </div>




<div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:"30px"}}>
  {
  images.map((x)=>(
     <div
        style={{
          flex:"0 0 30%",
          height:'660px',
          borderRadius: "12px",
          background: "#fff",
        }}
        className={styles.fontfont}
      >
        <div
          style={{
            position: "relative",
            height: "530px",
          }}
        >
          <img
            src={x.chemin}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: "3%",
              left: "3%",
              background: "#fff",
              color: "#f98140",
              fontWeight: "bold",
              padding: "8px 14px",
              borderRadius: "6px",
            }}
          >
            {x.price}
          </div>
        </div>

        <div style={{ padding: "16px" }}>
          <h3 style={{ margin: "0 0 12px", fontSize: "18px" }}>
            {x.titel}
          </h3>

          <div
            style={{
              display: "flex",
              gap: "14px",
              fontSize: "14px",
              color: "#666",
              marginBottom: "10px",
            }}
          >
            <span>🛏️ {x.bd}</span>
            <span>🛁 {x.ba}</span>
            <span>📐 {x.sf}</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "14px",
              color: "#888",
            }}
          >
             <span>📍 {x.loc}</span>
          </div>
        </div>
        </div>
                ))
}
      </div>
    </div>
  );
}

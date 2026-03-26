import logo from "../assets/accusoft-brands-solid-full.svg";
import styles from "../style.module.css";
import "./index.css"
export default function Nav() {
  return (
    <nav
      style={{
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
      className={styles.fontfont}
    >
      <div
        style={{
          width: "180px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <img src={logo} alt="" style={{ width: "50px" }} />
        <h2 style={{fontSize:'40px',color:'#061f4a'}}>
          Restead
        </h2>
      </div>
      <div style={{ display: "flex", gap: "30px" }}>
        <a
          href=""
          className={`${styles.font} ${styles.change}`}
        >
          HOME
        </a>
        <a href="" className={`${styles.font} ${styles.change}`}>
          ABOUT US
        </a>
        <a href=""  className={`${styles.font} ${styles.change}`}>
          SERVICES
        </a>
        <a href=""className={`${styles.font} ${styles.change}`}>
          PROPERTY
        </a>
        <a href="" className={`${styles.font} ${styles.change}`}>
          CONTACT
        </a>
      </div>
      <a
        href=""
        style={{
          textDecoration: "none",
          color: "white",
          backgroundColor: "#f98140",
          padding: "10px 30px",
          fontWeight: "bold",
          borderRadius: "10px",
        }}
        
      >
        GET CONSULTATION
      </a>
    </nav>
  );
}


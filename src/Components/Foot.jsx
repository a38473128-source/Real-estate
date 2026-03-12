import styles from "../style.module.css";
import logo from "../assets/accusoft-brands-solid-full copy.svg";

export default function Foot({ foot }) {
  return (
    <div
      className={styles.fontfont}
      style={{
        height: "500px",
        backgroundColor: "#061f4a",
        marginTop: "100px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "17px" }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <img src={logo} alt="" style={{ width: "40px" }} />
          <h1 style={{ color: "white" }}>Restead</h1>
        </div>
        <p style={{ color: "gray", width: "300px", fontSize: "17px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
        <a
          href=""
          style={{ color: "white", fontSize: "18px", textDecoration: "none" }}
        >
          📍 Jl. Raya Kuta No.70, Kuta
        </a>
        <a
          href=""
          style={{ color: "white", fontSize: "18px", textDecoration: "none" }}
        >
          📧 support@domain.com
        </a>
        <a
          href=""
          style={{ color: "white", fontSize: "18px", textDecoration: "none" }}
        >
          📞 +212 0 00 00 00 00
        </a>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "17px",
        }}
      >
        <h1 style={{ color: "white" }}>Other Pages</h1>
        <a href="" className={styles.links}>
          Home
        </a>
        <a href="" className={styles.links}>
          About Us
        </a>
        <a href="" className={styles.links}>
          Property
        </a>
        <a href="" className={styles.links}>
          Contact
        </a>
        <a href="" className={styles.links}>
          Project
        </a>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "17px",
        }}
      >
        <h1 style={{ color: "white" }}>Quick Links</h1>
        <a href="" className={styles.links}>
          Privacy Policy
        </a>
        <a href="" className={styles.links}>
          Terms Of Service
        </a>
        <a href="" className={styles.links}>
          Disclaimer
        </a>
        <a href="" className={styles.links}>
          Credits
        </a>
        <a href="" className={styles.links}>
          FAQ
        </a>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "17px",
        }}
      >
        <h1 style={{ color: "white", fontSize: "26px" }}>Newsletter</h1>
        <div className={styles.inputs}>
          <input
            style={{ width: "350px", height: "60px", padding: "0 20px" }}
            type="text"
            placeholder="Your Email Address"
          />
        </div>
        <p style={{ color: "gray" }}>Get the latest news & updates</p>
        <div>
          {
            foot.map((x)=>(
            <img
              src={x.img}
              alt=""
              style={{ width: "50px", borderRadius: "50%" }}
            />
            ))
          }
        </div>
      </div>
    </div>
  );
}

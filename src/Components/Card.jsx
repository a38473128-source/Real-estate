import build from "../assets/BOYSPALM_-removebg-preview.png";
import styles from "../style.module.css";
export default function Card() {
  return (
    <div
      className={styles.fontfont}
      style={{
        marginTop: "100px",
        height: "500px",
        backgroundColor: "#061f4a",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "40px",
        alignItems: "flex-start",
        position: "relative",
        overflow:"hidden"
      }}
    >
      <h1 style={{ color: "white", fontSize: "40px", marginLeft: "50px" }}>
        We Provide You The Simple Ways <br />
        To Invest In Real Estate
      </h1>
      <p
        style={{
          width: "600px",
          color: "gray",
          fontSize: "19px",
          marginLeft: "50px",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut beatae quod
        harum odio maiores dolorem sit labore eum distinctio corporis
      </p>
      <a
        href=""
        style={{
          color: "white",
          textDecoration: "none",
          backgroundColor: "#f98140",
          padding: "13px 45px",
          marginLeft: "50px",
        }}
      >
        Contact Us
      </a>
      <img
        src={build}
        alt=""
        style={{ position: "absolute", right: "-20%",bottom:"0%",width:"700px",opacity:"0.7" }}
      />
    </div>
  );
}

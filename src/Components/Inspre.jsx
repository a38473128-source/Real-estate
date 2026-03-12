import styles from "../style.module.css";

export default function Inspire({ more }) {
  return (
    <div className={styles.fontfont} style={{ marginTop: "100px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "30px",
          marginBottom: "50px",
        }}
      >
        <p style={{ color: "#f98140", fontSize: "24px" }}>Our Blog</p>
        <h1 style={{ color: "#061f4a", fontSize: "40px" }}>
          Lates News and Articles
        </h1>
        <p
          style={{
            color: "gray",
            width: "450px",
            textAlign: "center",
            fontSize: "20px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>

      <div
        style={{
          marginTop: "30px",
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
        }}
      >
        {more.map((x) => (
          <div
            style={{
              height: "100%",
              flex: "0 0 23%",
              position: "relative",
            }}
          >
            <div style={{ height: "50%" }}>
              <img
                src={x.img}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <p
              style={{ color: "gray", marginTop: "10px", marginBottom: "20px" }}
            >
              {x.titel}
            </p>
            <a
              style={{ color: "#061f4a", fontSize: "25px", fontWeight: "bold" }}
            >
              {x.titel2}
            </a>
            <p style={{ color: "gray", marginTop: "20px", fontSize: "18px" }}>
              {x.desc}
            </p>
            <a
              href=""
              style={{
                color: "#f98140",
                position: "absolute",
                bottom: "0",
                right: "0",
                fontSize: "20px",
              }}
            >
              READ MORE
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

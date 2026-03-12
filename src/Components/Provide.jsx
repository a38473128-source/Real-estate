import building1 from "../assets/building.jpg";
import building2 from "../assets/OWFT Builder - MiTek Inc_.jpg";
import styles from "../style.module.css";


export default function Provide({icons}) {
  return (
    <div
      style={{
        height: "800px",
        position: "relative",
      }}
      className={styles.fontfont}
    >
      <div
        style={{
          height: "100%",
          width: "44%",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: "5%", left: "4%" }}>
          <h1 style={{ color: "#061f4a", fontSize: "38px" }}>
            1,200{" "}
            <span style={{ color: "#f98140", fontWeight: "bold" }}>+</span>
          </h1>
          <p style={{ fontSize: "20px", color: "gray" }}>Property Build</p>
        </div>
        <div style={{ position: "absolute", top: "17%", left: "4%" }}>
          <h1 style={{ color: "#061f4a", fontSize: "38px" }}>
            3,250{" "}
            <span style={{ color: "#f98140", fontWeight: "bold" }}>+</span>
          </h1>
          <p style={{ fontSize: "20px", color: "gray" }}>Happy Clients</p>
        </div>
        <div
          style={{
            height: "170px",
            width: "170px",
            backgroundColor: "#f98140",
            position: "absolute",
            bottom: "2%",
            right: "8%",
            borderRadius: " 0% 0% 100% 0% / 0% 0% 100% 0%",
          }}
        ></div>

        <div
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% 99%, 50% 99%, 50% 50%, 0% 50%)",
            height: "600px",
            backgroundImage: `url(${building1})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "70%",
            position: "absolute",
            right: "0%",
          }}
        ></div>
        <div
          style={{
            height: "480px",
            width: "60%",
            backgroundImage: `url(${building2})`,
            position: "absolute",
            bottom: "0%",
            left: "0%",
          }}
        ></div>
      </div>
      <div
        style={{
          height: "100%",
          width: "56%",
          position: "absolute",
          right: "0%",
          top: "0%",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          paddingTop: "10px",
          paddingLeft: "50px",
        }}
      >
        <a
          href=""
          style={{ textDecoration: "none", color: "#f98140", fontSize: "30px" }}
        >
          Abou Us
        </a>
        <h1
          style={{ color: "#061f4a", width: "500px", fontSize: "40px" }}
        >
          We Provide You The Simple Ways To Invest in Real Estate
        </h1>
        <p
          style={{ color: "gray", width: "500px", fontSize: "20px" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          architecto veniam soluta molestias, itaque ipsum commodi repellendus
          animi rerum Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laborum, a!
        </p>
        <div
  style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'space-between',
  }}
>
    {
        icons.map((x)=>(
  <div
  className={styles.icon}
  style={{
    flex: '0 0 48%',
    position: 'relative',
    padding: '10px',
    boxSizing: 'border-box',
  }}
>
  <div
    style={{
      width: '50px',
      height: '50px',
      position: 'absolute',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}
  >
    <img src={x.img} alt="" />
  </div>
  <h3 style={{ marginLeft: '60px', fontSize: '21px', color: '#061f4a' }}>
    {x.titel}
  </h3>
  <p style={{ marginTop: '20px' }}>
    {x.lorem}
  </p>
</div>

        ))
        }
</div>
        <a
          href=""
          style={{
            textDecoration: "none",
            color: "white",
            backgroundColor: "#f98140",
            width: "190px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "13px 10px",
          }}
          className={styles.fontfont}
        >
          MORE ABOUT US
        </a>
      </div>
    </div>
  );
}

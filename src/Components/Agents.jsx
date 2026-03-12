import styles from "../style.module.css";
import adil from "../assets/téléchargement.jpg";

export default function Agents({ icons2, images2 }) {
  return (
    <div
      style={{
        border: "2px solid black",
        height: "800px",
        marginTop: "340px",
        backgroundColor: "#061f4a",
        position: "relative",
      }}
      className={styles.fontfont}
    >
      <div
        style={{
          width: "80%",
          height: "400px",
          position: "absolute",
          left: "50%",
          transform: "translate(-50%,-50%)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
        }}
      >
        {icons2.map((x) => (
          <div
            style={{
              flex: "0 0 30%",
              backgroundColor: x.background,
              height: "370px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <img src={x.chemin} alt="" style={{ width: "40px" }} />
            <h2 style={{ color: x.color }}>{x.titel}</h2>
            <p style={{ width: "300px", color: x.pcolor, textAlign: "center" }}>
              {x.desc}
            </p>
          </div>
        ))}
      </div>
      {images2.map((x) => (
        <img
          src={x.chemin}
          alt=""
          style={{
            position: "absolute",
            width: "50px",
            border: "2px solid white",
            borderRadius: "50%",
            top: x.top,
            left: x.left,
          }}
        />
      ))}

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap:"20px"
        }}
      >
        <p style={{ color: "#f98140" }}>Testimonials</p>
        <h1 style={{ color: "white" }}>What Our Client Says</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap:"20px"
          }}
        >
          <img
            src={adil}
            alt=""
            style={{
              width: "60px",
              height: "50px",
              border: "2px solid white",
              borderRadius: "50%",
            }}
          />
          <p style={{width:"500px",fontSize:"20px",textAlign:"center",color:'gray'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo
          </p>
          <a href="" style={{color:'#f98140',textDecoration:'none',fontSize:"20px",textAlign:"center"}}>
            Adil Aaboune <br />
            <span style={{color:"gray"}}>Costumer</span>
          </a>
        </div>
      </div>
    </div>
  );
}

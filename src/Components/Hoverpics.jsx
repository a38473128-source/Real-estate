import styles from "../style.module.css";

export default function Hoverpics({Agents2,platforms}) {
  return (
    <div className={styles.fontfont} style={{ marginTop: "100px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <p style={{ color: "#f98140", fontSize: "24px" }}>Our Agents</p>
        <h1 style={{ color: "#061f4a", fontSize: "40px" }}>
          Meet With Professional Agent
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
            marginTop:'30px',
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
        }}
      >
        {
            Agents2.map((x)=>(
        <div
          className={styles.hy}
          style={{
            height: "100%",
            flex: "0 0 23%",
            boxShadow:"2px 2px 100px gray",
            position: "relative",
            padding: "30px 10px",
            overflow: "hidden",
          }}
        >
          <div style={{ height: "100%" }}>
            <img
              src={x.img}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div
            style={{
              backgroundColor: "white",
              width: "200px",
              height: "60px",
              position: "absolute",
              bottom: "0%",
              left: "0%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              zIndex: "3",
            }}
          >
            <h3 style={{color:"#061f4a"}}>{x.name}</h3>
            <p>{x.job}</p>
          </div>

          <div className={styles.move2}></div>

          <div
            className={styles.platforms}
          >
            {
                platforms.map((x)=>(
            <a href="">
              <img
                src={x.img}
                alt=""
                style={{ width: "40px", borderRadius: "50%" }}
              />
            </a>
            ))
}
          </div>
        </div>
                    ))
}
      </div>
    </div>
  );
}

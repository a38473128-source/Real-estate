import styles from "../style.module.css";
import phone from "../assets/phone-solid-full (1).svg";

export default function Consult() {
  return (
    <div
      style={{
        display: "flex",
        marginTop: "70px",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 50px",
      }}
      className={styles.fontfont}
    >
      <div>
        <div>
          <p
            style={{ color: "#f98140", fontSize: "24px", marginBottom: "20px" }}
          >
            Consultatio
          </p>
          <h1
            style={{ color: "#061f4a", fontSize: "40px", marginBottom: "20px" }}
          >
            Find Your Drean House <br /> Through Agents
          </h1>
          <p style={{ width: "400px", color: "gray" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
        </div>

        <div style={{ margin: "30px 0 0", display: "flex",gap:'20px' }}>
          <img src={phone} alt="" style={{ width: "40px" }} />
          <p style={{color:'gray',fontSize:'20px'}}>
            Call for Consultation <br /> <a href="" style={{fontWeight:'bold',fontSize:"22px",textDecoration:'none',color:'#061f4a'}}>+212 0 00 00 00 00</a>
          </p>
        </div>
      </div>

      <div>
        <div>
          <p style={{ color: "#f98140", fontSize: "24px", marginBottom: "20px" }}>Why Choose Us</p>
          <h1 style={{ color: "#061f4a", fontSize: "40px", marginBottom: "20px" }}>
            We Are Committed To take <br /> Care of Clients Seriously
          </h1>
          <p style={{ width: "400px", color: "gray" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>

          <div style={{ margin: "30px 0 0", display: "flex",gap:'40px' }}>
            <div>
              <h1 style={{color:'#061f4a'}}>
                1,200 <span style={{color:'#f98140'}}>+</span>
              </h1>
              <p style={{color:'gray'}}>Property Build</p>
            </div>
            <div>
              <h1 style={{color:'#061f4a'}}>
                3,250 <span style={{color:'#f98140'}}>+</span>
              </h1>
              <p style={{color:'gray'}}>Happy Clients</p>
            </div>
            <div>
              <h1 style={{color:'#061f4a'}}>
                450 <span style={{color:'#f98140'}}>+</span>
              </h1>
              <p style={{color:'gray'}}>Trust Partner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

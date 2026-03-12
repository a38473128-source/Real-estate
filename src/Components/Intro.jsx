import logo from "../assets/White-removebg-preview.png";
import styles from "../style.module.css";
import face from "../assets/téléchargement.jpg"



const agents=[face,face,face,face]

export default function Intro() {
  return (
    <div
      style={{ height: "900px", background: "#c2d2df", position: "relative" }}
      className={styles.fontfont}
    >
      <img
        src={logo}
        alt=""
        style={{
          position: "absolute",
          right: "0",
          width: "600px",
          height: "960px",
        }}
      />
      <div style={{display:'flex', justifyContent:'center',alignItems:'center',flexDirection:'column' ,position:'absolute', width:'700px',top:'17%',gap:'20px'}}>
        <h1 style={{ color: "#061f4a",fontSize:'70px', width:"570px" }}>
          Easy Way To Find The Perfect Property
        </h1>
        <p style={{color:'gray',width:'560px'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa non
          suscipit voluptatem aliquam distinctio amet possimus assumenda
          blanditiis quo quas dolorem esse consequuntur omnis culpa nesciunt,
          corporis, voluptatibus quisquam? In, sapiente! Rem reiciendis beatae
          dolorum assumenda ipsam quam odio incidunt?
        </p>
        <div style={{display:'flex', justifyContent:"center",alignItems:'center' ,gap:'40px'}}>
          <a href="" style={{textDecoration:'none', color:'white',backgroundColor:'#f98140', padding:'13px 50px', borderRadius:'5px',fontWeight:'bold'}} className={styles.fontfont}>CONTACT US</a>
          <div className={styles.move}></div>
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:'0px'}}>
          {
            agents.map((x)=>(
                <div style={{backgroundImage:`url(${x})`,width:"50px",height:"50px",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:'50%',border:'3px solid white'}}
                ></div>
            ))
          }
          <h3 style={{color:'#061f4a',marginLeft:'60px'}}>200+ REAL AGENTS</h3>
        </div>
      </div>
    </div>
  );
}

import styles from '../style.module.css'
import brand1 from "../assets/logoipsum-211.svg"
import brand2 from "../assets/logoipsum-214.svg"
import brand3 from "../assets/logoipsum-334.svg"
import brand4 from "../assets/logoipsum-345.svg"

const brands=[brand1,brand2,brand3,brand4]

export default function Brand(){
    return (
        <div style={{height:'300px',display:"flex",alignItems:'center',justifyContent:"space-evenly"}} className={styles.fontfont}>
            <h1 style={{color:'#061f4a',wordSpacing:'3px'}}>Trusted by <span className={styles.span}>420+</span> Partner</h1>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:"70px"}}>
                {
                    brands.map((x)=>(
                        <img className={styles.brands} src={x}></img>
                    ))
                }
            </div>
        </div>
    )
}
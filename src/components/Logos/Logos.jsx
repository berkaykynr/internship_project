import React from "react";
import styles from "./Logos.module.scss"
export default function Logos(){
    return(
        <div className={styles.main}>
            <div style={{display:"flex",flexDirection:"row",gap:"5px"}}>
                <span>2000+</span>
                <div className={styles.texts}>
                    <span>ORGANIZATION IN AROUND</span>
                    <span>THE WORLD TRUST HOSTINGLY</span>
                </div>
            </div>
            <img src="/images/logo1.png" alt="hostingly logo"/> 
            <img src="/images/logo2.png" alt="hostingly logo"/> 
            <img src="/images/logo3.png" alt="hostingly logo"/> 
            <img src="/images/logo4.png" alt="hostingly logo"/> 
    
        </div>
    )           
}
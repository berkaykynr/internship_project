import React from "react";
import styles from "./GetStarted.module.scss"

export default function GetStarted(){
    return(
        <div className={styles.main} style={{"backgroundImage": "url(/images/getStartedBg.png)"}}>
            <div style={{display:"flex",flexDirection:"column",width:"100%"}}>
                <span>Affordable Hosting</span>
                <span> Solution Website</span>
            </div>
            <div className={styles.features_text}>
                <span>Free SSL Services</span>
                <i className="pi pi-circle-fill" style={{ color: '#7C7C7C',fontSize: '0.3rem'  }}/>
                <span>5000 User</span>
                <i className="pi pi-circle-fill" style={{ color: '#7C7C7C',fontSize: '0.3rem'  }}/>
                <span>10 GB SSD Storage</span>
            </div>
            <div className={styles.get_started_button}>
                <p >Get Started</p>
                <i className="pi pi-arrow-right" style={{ color: 'white',fontSize: '0.8rem'  }}/>
            </div>
            <div className={styles.campaign_texts}>
                 <span>Only With</span>
                 <span className={styles.price_text}>2,5/Month</span>
            </div>
        </div>
    )
}
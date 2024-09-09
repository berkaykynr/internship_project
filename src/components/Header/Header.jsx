import React from "react"
import styles from "./Header.module.scss"
import { Menubar } from 'primereact/menubar';
import "primereact/resources/themes/lara-light-cyan/theme.css";
        

export default function Header(){
    const menuItems = [
       {
        "id": "1",
        "label":"Hosting",
        "data" :"Hosting",
        items:[

        ]
      } ,
       {
        "id": "1",
        "label":"Domain",
        "data" :"Domain",
        items:[

        ]
       } 
       ,
       {
        "id": "1",
        "label":"Our Plan",
        "data" :"Our Plan",
       } ,
       {
        "id": "1",
        "label":"Support",
        "data" :"Support",
       } ,
       {
        "id": "1",
        "label":"About Us",
        "data" :"About Us",
       } 
    ]
    return(
        <div className={styles.main}>
            <div className={styles.logo_container}>
                <img src={"/images/logo.png"} alt="hostingly logo" className={styles.logo_image}/> 
                <span className={styles.brand_name}>Hostingly</span>
            </div>
            <div className={styles.menu_container}>
             <Menubar model={menuItems} className={styles.menu_bar} />  
            </div>
            <div className={styles.buttons_container}>
                <div className={styles.login_button}>
                    <span>Login</span>
                </div>
                <div className={styles.register_button}>
                    <span>Register</span>
                </div>
            </div>
        </div>
    )
}   
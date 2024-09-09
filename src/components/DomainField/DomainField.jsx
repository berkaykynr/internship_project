import React from "react";
import styles from "./DomainFile.module.scss"

import { InputText } from 'primereact/inputtext';

const Option = ({title,oldPrice,newPrice}) => {
    return(
        <div className={styles.option}>
            <span className={styles.title}>{title}</span>
            <span className={styles.oldPrice}>${oldPrice}</span>
            <span className={styles.newPrice}>${newPrice}</span>
        </div>
    )
}
        
export default function DomainField(){
    return(
        <div className={styles.main}>
            <div className={styles.title}>
                <span className={styles.first}>Find Your Dream Domain Name</span>
                <span>Get your perfect domain name with a special price. This offer will end in a few days.</span>
            </div>
            <div className={styles.input_container}>
                <InputText placeholder="Find your dream domain" className={styles.input} />
                <div className={styles.button}>
                    Check Domain
                </div>
            </div>
            <div className={styles.options}>
                <Option title={".com"} oldPrice={"25.00"} newPrice={"19.00"}/>
                <i className="pi pi-circle-fill" style={{ color: '#7C7C7C',fontSize: '0.3rem'  }}/>
                <Option title={".co"} oldPrice={"20.00"} newPrice={"15.00"}/>
                <i className="pi pi-circle-fill" style={{ color: '#7C7C7C',fontSize: '0.3rem'  }}/>
                <Option title={".net"} oldPrice={"22.00"} newPrice={"16.00"}/>  
                <i className="pi pi-circle-fill" style={{ color: '#7C7C7C',fontSize: '0.3rem'  }}/>
                <Option title={".store"} oldPrice={"28.00"} newPrice={"18.00"}/>

            </div>
        </div>
    )
}
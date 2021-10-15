import React from 'react';
import style from '../Style.module.css';
import 'boxicons';

export default function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.footContent}>
                <div className={style.footC1}>
                    <h1>Luxury Team</h1>
                </div>
                <div className={style.footC1}>
                    <button className={style.footC1}>Contact Us</button>
                </div>

                <div className={style.footC1}>
                    Agent Miami<br />
                    Phone Number: 310-555-555
                </div>
                <div className={style.footC1}>
                    Mail: <br />
                    agentmaimai@luxury.com
                </div>

                
                <div className={style.footC2}>
                    <box-icon type='logo' name='facebook-circle' color="White" size="lg"/>
                    <box-icon type='logo' name='twitter' color="White" size="lg"/>
                    <box-icon type='logo' name='instagram' color="White" size="lg"/>
                </div>
                <div className={style.footC2}>
                </div>
            </div>
        </div>
    )
}

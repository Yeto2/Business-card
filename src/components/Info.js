import React from "react";
import avatar from "../images/avatar.jpg"

export default function Info(){
    return(
        <div className="info" >
            <img src={avatar} className="avatar"/>
            <h3>Yassine Essemnaoui</h3>
            <p>Frontend Developer</p>
            <div className="btns">
                <button className="email" ><i className="fa-solid fa-square-envelope"></i>Email</button>
                <button className="linkdin" ><i className="fa-brands fa-linkedin"></i>Linkedin</button>
            </div>
            
        </div>
    )
}
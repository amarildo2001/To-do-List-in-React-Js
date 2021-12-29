import React from 'react'

const Header=() =>{

    //Krjimi i nje funksioni per shfaqjen e dates
    var month=["Janar","Shkurt","Mars","Prill","Maj","Qershor","Korrik","Gusht","Shtator","Tetor","Nentor","Dhjetor"];
    var days=["E diele","E hene","E marte","E merkure","E enjte","E premte","E shtune"];
    var d = new Date();

    return(
        <div className="Header">
            <h1>To-do List</h1>
            <h2>{days[d.getDay()]}, {d.getUTCDate()} {month[d.getMonth()]}, {d.getFullYear()}</h2>
        </div>
    )
}

export default Header
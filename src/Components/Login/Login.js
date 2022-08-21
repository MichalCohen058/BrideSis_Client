import { useState } from "react"

export default Login=()=>{
    const enter=()=>{

    }

    let [matchmaker,setMatchmaker]=useState({
        firstName:" ",
        lastName:" ",
        phone:" ",
        age:null,
        city:" ",
        mail:" "

    })
    
    return(<>
<h1>Login!!!</h1>
<form onSubmit={enter}>
<label>:שם פרטי </label>
   <br/>

   <input type="text" />
   <br/>
   <br/>

   <label>:שם משפחה</label>
   <br/>
   <input type="text"/>
   <br/>
   <br/>

   <label>:טלפון</label>
   <br/>
   <input type="text"/>
   <br/>
   <br/>

   <label>:גיל</label>
   <br/>
   <input type="number"/>
   <br/>
   <br/>

   <label>:עיר מגורים</label>
   <br/>
   <input type="text"/>
   <br/>
   <br/>
   <label>:מייל</label>
   <br/>
   <input type="text"/>
</form>
    </>)
}
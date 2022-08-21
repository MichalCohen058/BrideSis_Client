import { useState } from "react";
import "../Register/Register.css"
export default function Register(){
    const save=(e)=>{
        e.preventDefaulte();

        }
let [userOrMatchmaker,setUserOrMatchmaker]=useState({
    firstName:" ",
    lastName:" ",
    phone:" ",
    age:null,
    city:" ",
    mail:" "
});

const change=(e)=>{
let inpValue=e.target.value;
let inpName=e.target.name;
let inpType=e.target.type;
if(inpType=="number")
inpValue=+inpValue;
let userOrmatch={...userOrMatchmaker};
userOrmatch[inpName]=inpValue;
setUserOrMatchmaker(userOrmatch);
}


    return(<>
    <h1>Register!!!</h1>
   <h1>הרשם</h1>
   <form onSubmit={save}>
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
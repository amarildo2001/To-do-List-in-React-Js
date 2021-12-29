import {React} from "react";

const Form = ({setTodo, Len}) =>{
    var itemtoAdd = ""
    const FormHandling = (e) =>{
       e.preventDefault()
       itemtoAdd=e.target.firstChild.value
       if(itemtoAdd != ""){
           setTodo(state =>[...state, {id:Len,todo:itemtoAdd}])

       }
       e.target.firstChild.value= ""
    }

    return(
        <div className="Form_container">
            <form onSubmit={formHandling}>
                <input type="text" placeholder="Shkruaj planin e sotem.."/>
                <button type="submit">Shto</button>
            </form>
        </div>
    )
}
export default Form
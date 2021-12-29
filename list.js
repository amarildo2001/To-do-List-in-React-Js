import React from 'react'

const List = ({todoList,setTodo}) =>{


    //Krijojm nje funksion per shfaqjen e listes

    const displayList=()=>{
        return(
            <div>
                {
                  todoList.map(item=>{
                      return(
                          <div className='task_item'>
                               <li>{item.todo} <button onClick={()=> {setTodo(todoList.filter(i=> i.id !== item.id))}}><i class="bi bi-trash"></i></button></li>
                          </div>
                      )
                  })
                }
            </div>
        )
    }
     return(
         <div className='list_container'>
             <ul>
               {displayList()}
             </ul>
         </div>
     )
}

export default List
import Header from './components/header'
import Form from './components/form';
import React, {useState} from 'react';
import List from './components/list';
import todoList from './components/list';
function App() {

  //Le te kijojme listen e gjerave per te bere
  //Do perdorim rect hocks 
  //Do importojm useState hook

  const [state, setstate] = useState([{id:0,todo:"this is a simple task"}])

  return (
    <div className="App">

     {/* Lets start creating the header of to do list*/} 
     {/*Le te stilojme aplikacionin perpara krijimit te formes dhe listes*/}
     <Header/>
     {/* Krijojme formen*/}
     {/*Krijojme listen e komponenteve te formes*/}
     <Form setTodo={setTodos} len={todos.length}/>

     <List todoList={todos} setTodo={setTodos}/>
    </div>
  );
}

export default App;

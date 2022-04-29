import React, { useState } from 'react'
import ListOfStudents from './ListOfStudents';

const FormOfStudents = () => {

  const onAddStudent = (event) => {
    event.preventDefault();
    if(name && lastName){
        let id = Math.floor(Math.random()*10000);
        console.log(id);
      const student = {
        id,
        name,
        lastName
      }
      setList([...list, student])
    } 
  }

  
  const [list, setList] = useState([ ])


  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [id, setId] = useState();

  const addName = (event)=>{
    setName(event.target.value)
  }

 const addLastName = (event) => {
    setLastName(event.target.value)
 }

 const deleteStudentFromList = (id) =>{
     console.log(id);
    setList(list.filter((student, index)=>{ 
        if(student.id !== id){
            
            return student;
        }}
    ));
  }


  return (
    <div>
      <h1>Hello from the list of students</h1>
      <form>
        <label>Name</label>
        <input onChange={addName} type="text" name="name" />
        <label>Last name</label>
        <input onChange={addLastName}  type="text" name="lastName" />
        <button className='btn' onClick={onAddStudent}>add student</button>
        <ListOfStudents list={list} onDelete={deleteStudentFromList}/>
      </form>
    </div>
  )
}

export default FormOfStudents
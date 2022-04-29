import React, { useState } from 'react'
import { Student } from './Student'



const ListOfStudents = ({list}) => {
  return (
    <>
  {list.map((student, index) => <div key={index}>
    <Student student={student} onDelete={deleteStudentFromList}/>
  </div>)}
    </>
  )
}

const deleteStudentFromList = (id) =>{
  setList(list.filter((index)=>{ index !== id}));
}

export default ListOfStudents
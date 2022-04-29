import React, { useState } from 'react'
import { Student } from './Student'




const ListOfStudents = ({list, onDelete}) => {
  return (
    <>
  {list.map((student, index) => 
  <div key={index}>
    <Student student={student} onDelete={onDelete}/>
  </div>)}
    </>
  )
}



export default ListOfStudents
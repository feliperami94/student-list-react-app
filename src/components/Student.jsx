import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

export const Student = ({student, onDelete}) => {
  return (
      <div className='student'>
        <h3>{student.name} {student.lastName} <AiOutlineCloseCircle style={{color:'RED'}} onClick={()=>onDelete(student.id)}/></h3>
      </div>
  )
}

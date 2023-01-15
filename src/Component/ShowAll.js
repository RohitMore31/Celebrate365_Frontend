import React from 'react'

export default function ShowAll() {
  return (
    <div className='showall'>
      <h3>Friend List</h3>
      <div className='tableparent'>
        <table>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>LastName</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          <tr>
            {}
          </tr>
        </table>
      </div>
    </div>
  )
}

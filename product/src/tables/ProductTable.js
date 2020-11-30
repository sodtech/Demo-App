import React from 'react'

const UserTable = props => (
  <table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>{"productID"}</th>
        <th>{"productName"}</th>
        <th>{"price"}</th>
        <th>{"description"}</th>
        <th>{"quantity"}</th>
        <th>{"addedby"}</th>
        <th>{"created_date"}</th>
      </tr>
    </thead>
    <tbody>
      {3 > 0 ? 
          <tr key={"user"}>
            <td>{"product_id"}</td>
            <td>{"product_name"}</td>
              <td>{"price"}</td>
            <td>{"discription"}</td>
            <td>{"quantity"}</td>
            <td>{"addedby"}</td>
            <td>{"creaded_date"}</td>
          </tr> : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable
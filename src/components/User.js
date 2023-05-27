import React from 'react'

export default function User(props) {
  return (
    <tr key={props.user.id}>
     <td>{props.user.id}</td>
    <td>{props.user.name}</td>
    <td>{props.user.username}</td>
    <td>{props.user.email}</td>
    <td>{props.user.phone}</td>
    <td>{props.user.website}</td>
    </tr>
  )
}

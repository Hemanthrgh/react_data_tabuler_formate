import React from 'react'

export default function Post(props) {
  return (
    <tr>
        <td> {props.post.id} </td>
        <td> {props.post.userId} </td>
        <td> {props.post.title} </td>
        <td> {props.post.body} </td>
    </tr>
  )
}

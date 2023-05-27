import React from 'react'

export default function Comment(props) {
  return (
    <tr>
        <td> {props.comment.id} </td>
        <td> {props.comment.postId} </td>
        <td> {props.comment.name} </td>
        <td> {props.comment.email} </td>
        <td> {props.comment.body} </td>
    </tr>
  )
}

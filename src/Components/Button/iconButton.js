import React from 'react'
import "./iconButton.module.css"
export const iconButton = () => {
  return (
    <button className="button" onClick={props.handleClick}>
    {props.icon} {props.label}
    {props.label}
  </button>
  )
}

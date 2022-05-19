import React from 'react'

export const navigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
        <a 
            href={props.link} 
            className={props.active ? classes.active : null}>{props.children}</a>
    </li>
  )
}

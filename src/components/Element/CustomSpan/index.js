import React from 'react'

function CustomSpan(props) {
  return (
    <>
        <span
        className={props.className?props.className:"text-bold"}
        >{props.children}</span>
    </>
  )
}

export default CustomSpan;
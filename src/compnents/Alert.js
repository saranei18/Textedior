import React from 'react'

export default function Alert(props) {
  return (
    props.alertdet && <div className={`alert alert-${props.alertdet.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alertdet.msg}</strong>
    </div>
  )
}

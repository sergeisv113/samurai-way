import React from "react";

type PropsType = {
  title: string,
  value: string
}
export const Contact = ({value, title}: PropsType) => {
  return <div style={{padding: '5px'}}><b>{title}: </b>{value || '--- not found ---'}</div>
}
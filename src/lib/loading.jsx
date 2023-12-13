import React from "react";
import { Glyphicon  } from "react-bootstrap";

const Loading = ({
  ...props
}) => {
  return (
    <div className="loading centered"  {...props}>
      <Glyphicon glyph="refresh" className="spinning"/>
      {props.children}
    </div>
  )
}
export default Loading
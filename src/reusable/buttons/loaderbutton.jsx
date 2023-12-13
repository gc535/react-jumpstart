import React from "react";
import { Button, Glyphicon  } from "react-bootstrap";

import "./loaderbutton.css";

const LoaderButton = ({
  isLoading,
  className = "",
  disabled = false,
  ...props
}) => {
  return (
    <Button
      className={`loaderbutton ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Glyphicon glyph="refresh" className="spinning"/>}
      {props.children}
    </Button>
  )
}
export default LoaderButton
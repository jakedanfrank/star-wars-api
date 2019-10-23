import React from "react";
import { Button, } from "semantic-ui-react";
import { Card, } from "react-bootstrap";

const Character = (props) => {
  return (
    <div>
      <Card>
        {props.name}
      </Card>
    </div>
  )
}

export default Character;
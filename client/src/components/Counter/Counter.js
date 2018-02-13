import React from "react";


// The render method returns the JSX that should be rendered
const Counter = props => (
  <div className="panel panel-primary">
    <div className="panel-body text-center">
      Score: {props.count}
    </div>
  </div>
);

export default Counter;

import * as React from 'react';
import UpdatedComp from '../components/HOC';

const Hov = (props) => {
  return (
    <div>
      <h3>Hover</h3>
      <button onMouseOver={props.incess}>Render {props.count}!</button>
      <hr />
    </div>
  );
};

export default UpdatedComp(Hov);

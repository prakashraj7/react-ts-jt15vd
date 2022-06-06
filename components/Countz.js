import * as React from 'react';
import UpdatedComp from '../components/HOC';
const Countz = (props) => {
  return (
    <div>
      <h3>Countz</h3>
      <button onClick={props.incess}> Render!{props.count}</button>
      <hr />
    </div>
  );
};
export default UpdatedComp(Countz);

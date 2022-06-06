import * as React from 'react';

const UpdatedComp = (OrginalComp) => {
  const NewComp = () => {
    const [count, setCount] = React.useState(0);

    const incess = () => {
      setCount(count + 1);
    };
    return <OrginalComp incess={incess} count={count} />;
  };
  return NewComp;
};

export default UpdatedComp;

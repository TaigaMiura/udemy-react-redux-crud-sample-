import React from 'react';

const App = () => {
  return (
<div>
  <User name={"taro"} />
</div>
  )
}
const User = props => <div>Hi, I am {props.name} </div>
export default App;

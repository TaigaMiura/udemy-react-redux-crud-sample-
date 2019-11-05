import React from 'react';

const App = () => {
  const profiles = [
    { name: "taro", age: 10 },
    { name: "ttt", age: 10000 }
  ]
  return (
    <div>
      {
        profiles.map(profile => {
          return <User name={profile.name} age={profile.age} />
        })
      }
    </div>
  )
}
const User = props => <div>Hi, I am {props.name}, and {props.age} age</div>
export default App;

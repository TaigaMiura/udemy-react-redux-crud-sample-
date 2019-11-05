import React from 'react';

const App = () => {
  const profiles = [
    { name: "taro", age: 10 },
    { name: "ttt", age: 10000 }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
    }
{/*

index.js:1375 Warning: Each child in a list should have a unique "key" prop.

Check the render method of `App`. See https://fb.me/react-warning-keys for more information.
in User (at App.js:12)
in App (at src/index.js:7)
*/}
    </div>
  )
}
const User = props => <div>Hi, I am {props.name}, and {props.age} age</div>
export default App;

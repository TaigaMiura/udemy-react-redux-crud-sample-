import React from 'react';

const App = () => {
  const profiles = [
    { name: "taro", age: 10 },
    { name: "ttt", age: 10000 },
    { name: "ttttttttttttt" }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return (
            <User
              name={profile.name}
              age={profile.age}
              key={index}
            />
          )
        })
      }
    </div>
  )
}
const User = props => <div>Hi, I am {props.name}, and {props.age} age</div>
User.defaultProps = {
  age: 1
}

export default App;

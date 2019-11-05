import React from 'react'
import PropTypes from 'prop-types'

const App = () => {
  const profiles = [
    { name: "taro", age: 10 },
    { name: "ttt", age: 10000 },
    { name: "ttttttttttttt", age: 1111 }
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}
export default App;

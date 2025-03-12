import './App.css'
import Condition from './DescribingTheUi/Components/Condition'
import Profile from './DescribingTheUi/Components/Profile'
import Array from './DescribingTheUi/Components/Array'
function App() {
  const users = [
    { name: "Shaojun Bao", age: 28 },
    { name: "Tom Black", age: "30" },
    { name: "Anna Bell", age: "1000" }
]



  return (
    <div>
      <div><h1>Describing the UI</h1></div>

      <div className='profile'>
        <Profile name="Shaojun Bao" age="28" email="shaojun@gmail.com" />
        <Profile name="Tom Black" age="30" email="tommy@gmail.com" />
        <Profile name="Anna Bell" age="1000" email="anna@gmail.com" />
      </div>
      <Condition/>
      <Array users={users} />
    </div>

  )
}

export default App

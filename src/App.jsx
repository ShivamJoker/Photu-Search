import React,{useState} from 'react'
import Gallery from './components/Gallery'
import SearchBox from './components/SearchBox'

const App = () => {

  const [input, setInput] = useState("");
    return (
        <center>
            <h1>Welcome to PhotuApp</h1>
            <SearchBox input={input} setInput={setInput}/>
            <Gallery query={input}/>
        </center>
    )
}

export default App

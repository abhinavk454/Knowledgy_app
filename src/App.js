import React,{useState} from 'react'
import News from './components/News';

function App() {
    const [ques,setQues]=useState("");
    const [search,setSearch]=useState("");
    return (
        <div>
            <div>
                <form>
                    <input type="text" value={ques} onChange={(e)=>{setQues(e.target.value)}}/>
                    {/* <input type="submit" value="Submit" onClick={()=>{setSearch(ques)}}/> */}
                </form>
                <p>{ques}</p>
            </div>
            <News topic={ques}/>
        </div>
    )
}

export default App
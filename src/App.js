import './App.css';
import {createRef, useState} from "react";

function App() {

    const [list, setList] = useState([]);
    const [marks, setMarks] = useState([]);
    const inputRef = createRef()

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            const newList = list.slice()
            newList.push(inputRef.current.value)
            setList(newList)

            const newMarks = marks.slice()
            newMarks.push(false)
            setMarks(newMarks)
            inputRef.current.value = ''
        }

    }

    function handleClick(i) {
        const newMarks = marks.slice()
        newMarks[i] = !newMarks[i]
        setMarks(newMarks)
    }

    function resetList() {
        setList([])
        setMarks([])
        inputRef.current.value = ''
    }

    return (
        <>
            <div className="App">
                <h1>Percival's TODO List</h1>
            </div>
            <div className="center"><input ref={inputRef} onKeyDown={handleKeyDown}/></div>

            <ul className="center">
                {Array.from({length: list.length}, (_, i) => (
                    <li onClick={() => {
                        handleClick(list.length - i - 1)
                    }} key={list.length - i - 1}>
                        {!marks[list.length - i - 1] ? <p>{list[list.length - i - 1]}</p> : <p>
                            <del>{list[list.length - i - 1]}</del>
                        </p>}
                    </li>
                ))}
            </ul>
            <div className="center">
                <button onClick={resetList}>Clear</button>
            </div>
        </>

    );
}

export default App;

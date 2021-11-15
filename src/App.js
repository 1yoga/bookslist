import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import Content from "./Components/Content";
import Navbar from "./Components/Navbar";
import {Route} from "react-router-dom";


function App() {

    const [data, setData] = useState([]);
    const [bookData, setBookData] = useState([]);
    const [inProgressData, setInProgressData] = useState([]);
    const [doneData, setDoneData] = useState([]);

    const [toReadTags, setToReadTags] = useState([]);
    const [inProgressTags, setInProgressTags] = useState([]);
    const [doneTags, setDoneTags] = useState([]);

    const addToInProgress = obj => {
        setInProgressData((prev) => [...prev, obj])
        setBookData(prev => prev.filter(item => item.id !== obj.id))
    }
    const addToDone = obj => {
        setDoneData((prev) => [...prev, obj])
        setInProgressData(prev => prev.filter(item => item.id !== obj.id))
    }
    const addToToRead = obj => {
        setBookData((prev) => [...prev, obj])
        setDoneData(prev => prev.filter(item => item.id !== obj.id))
    }

    const addTagToRead = (tag) => {
        if (!toReadTags.includes(tag)) {
            setToReadTags((prev) => [...prev, tag])
        }
    }
    const addTagInProgress = (tag) => {
        if (!inProgressTags.includes(tag)) {
            setInProgressTags((prev) => [...prev, tag])
        }
    }
    const addTagDone = (tag) => {
        if (!doneTags.includes(tag)) {
            setDoneTags((prev) => [...prev, tag])
        }
    }

    const clearTagToRead = () => {
        setToReadTags([])
    }
    const clearTagInProgress = () => {
        setInProgressTags([])
    }
    const clearTagDone = () => {
        setDoneTags([])
    }
    const load = () => {
        setBookData(data)
        setInProgressData([])
        setDoneData([])

    }

    const props = [
        {
            clear: clearTagToRead,
            title: "To read",
            data: bookData,
            button: "start reading",
            tags: toReadTags,
            setTags: setToReadTags,
            count: bookData.length,
            onTag: addTagToRead,
            onButton: addToInProgress
        },
        {
            clear: clearTagInProgress,
            title: "In progress",
            data: inProgressData,
            button: "finished reading",
            tags: inProgressTags,
            setTags: setInProgressTags,
            count: inProgressData.length,
            onTag: addTagInProgress,
            onButton: addToDone
        },
        {
            clear: clearTagDone,
            title: "Done",
            data: doneData,
            button: "add to read",
            tags: doneTags,
            setTags: setDoneTags,
            count: doneData.length,
            onTag: addTagDone,
            onButton: addToToRead
        },
    ];

    useEffect(() => {
        async function fetchData() {
            try {
                const bookResponse = await axios.get('10-items.json')
                await setData(bookResponse.data.items)

            } catch (error) {
                alert("Ошибка при запросе данных")
                console.error(error)
            }
        }
        fetchData()
        setBookData(JSON.parse(window.localStorage.getItem('bookData')));
        setInProgressData(JSON.parse(window.localStorage.getItem('inProgressData')));
        setDoneData(JSON.parse(window.localStorage.getItem('doneData')));
    }, [])

    useEffect(() => {
        window.localStorage.setItem('bookData', JSON.stringify(bookData));
    }, [bookData]);
    useEffect(() => {
        window.localStorage.setItem('inProgressData', JSON.stringify(inProgressData));
    }, [inProgressData]);
    useEffect(() => {
        window.localStorage.setItem('doneData', JSON.stringify(doneData));
    }, [doneData]);

    return (
        <div className="wrapper">
            <button onClick={load}>Reload</button>
            <Navbar props={props}/>
            <Route path="/toread">
                <Content props={props[0]}/>
            </Route>
            <Route path="/inprogress">
                <Content props={props[1]}/>
            </Route>
            <Route path="/done">
                <Content props={props[2]}/>
            </Route>
        </div>
    );
}

export default App;

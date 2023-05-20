import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { ReactComponent as Arrowleft } from '../assets/arrow-left.svg'
const NotePage = ({ match, history }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    let noteId = id
    const [note, setNote] = useState(null)
    useEffect(() => {
        getNote()
        // eslint-disable-next-line
    }, [noteId])

    let getNote = async () => {
        if (noteId === 'new') return
        let response = await fetch(`/api/notes/${noteId}`)
        let data = await response.json();
        setNote(data)
    }

    let CreateNote = async () => {
        fetch(`/api/notes/create/`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let updateNote = async () => {
        fetch(`/api/notes/${noteId}/update/`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let deleteNote = async () => {
        fetch(`/api/notes/${noteId}/delete/`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            },
        })
        navigate("/");
    }

    let handleSubmit = () => {

        if (noteId !== 'new' && note.body === '') {
            deleteNote()
        } else if (noteId !== 'new') {

            updateNote()
        } else if (noteId === 'new' && note !== null) {
            CreateNote()
        }
        navigate("/");
    }

    let handleChange = (value) =>{
        setNote(note => ({...note,'body':value}))
        // console.log(note);
    }
    return (
        <div className="note">
            <div className="note-header">
                <h3>
                    <Arrowleft onClick={handleSubmit} />
                </h3>
                {noteId !== 'new' ? (<button onClick={deleteNote}>Delete</button>) : (<button onClick={handleSubmit}>Done</button>)}
            </div>
            <textarea onChange={(e) => {handleChange(e.target.value)}} value={note?.body}></textarea>
        </div>
    )
}

export default NotePage
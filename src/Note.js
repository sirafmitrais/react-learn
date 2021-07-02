import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export default function Note(props) {
    const [note, setNote] = useState("");
    const [noteList, setNoteList] = useState([]);

    useEffect(() => {

    });

    const AddNoteList = () => {
        setNoteList([...noteList, note]);
        setNote("");
    }

    return (<div>
        Note:  <InputGroup className="mb-3">
            <FormControl value={note} onChange={(e) => setNote(e.target.value)}>
            </FormControl>
            <Button variant="primary" onClick={AddNoteList}>Primary</Button>
        </InputGroup>
        NoteList : <br />
        {noteList.map((it, key) => {
            return (
                <div key={key}>{it} <br />
                </div>
            )
        })}
    </div>
    )
}

import {useState } from 'react';
export default function Dictionary() {
    const [word, setWord] = useState();

    return (
        <>
            <input type="text" onChange={(e) => {
                setWord(e.target.value);
            }} 
            />
            <h1>blablablablaaa</h1>
        </>
    )

}
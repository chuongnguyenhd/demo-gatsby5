// Step 1: Import React
import * as React from 'react'
import {PageProps} from "gatsby";


const formStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "10px"
}

const formControl: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    flexDirection: "column",
    gap: "2px"
}

const inputStyle = {
    width: '200px'
}

const actionStyle = {
    display: "flex",
    gap: "5px"
}

interface FormValue {
    name: string;
    email: string;
    subject: string;
    message: string
}

const submitHandler = (value: FormValue) => {
    fetch('https://sheetdb.io/api/v1/89rwi9htllpy6', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            headers: {'Authorization': 'Bearer 8u92odwtnk5nto5rv08x5jiiq58ck2p5so42ft51'}
        },
        body: JSON.stringify({
            data: [
                {
                    'id': "INCREMENT",
                    "name": value.name,
                    "email": value.email,
                    "subject": value.subject,
                    "message": value.message
                }
            ]
        })
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
}

// Step 2: Define your component
const AboutPage: React.FC<PageProps> = () => {
    return (

        <div>
            <form onSubmit={(e: React.SyntheticEvent) => {
                e.preventDefault();
                const target = e.target as typeof e.target & {
                    name: { value: string };
                    email: { value: string };
                    subject: { value: string };
                    message: { value: string };
                };
                const name = target.name.value;
                const email = target.email.value;
                const subject = target.name.value;
                const message = target.email.value;
                submitHandler({name, email, subject, message})
            }} style={formStyle}>
                <div style={formControl}>
                    <label>Name</label>
                    <input type="text" name="name" id="name" style={inputStyle}/></div>
                <div style={formControl}>
                    <label>Email</label>
                    <input type="email" name="email" id="email" style={inputStyle}/></div>
                <div style={formControl}>
                    <label>Subject</label>
                    <input type="text" name="subject" id="subject" style={inputStyle}/></div>
                <div style={formControl}>
                    <label>Message</label>
                    <textarea name="message" id="message" style={inputStyle}/></div>
                <div style={actionStyle}>
                    <button type="submit">Send</button>
                    <input type="reset" value="Clear"/>
                </div>
            </form>
        </div>
    )
}
export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default AboutPage
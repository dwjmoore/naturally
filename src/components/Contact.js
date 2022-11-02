import { useState, useEffect } from "react";
import axios from "../api/axios";
import useCheckOnDashboard from "../hooks/useCheckOnDashboard";


const emailRegex = /\S+@\S+\.\S+/;

export default function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [errorMsg, setErrorMsg] = useState('')
    const [success, setSuccess] = useState(false);
    const checkOnDashboard = useCheckOnDashboard();

    useEffect(() => {
        checkOnDashboard();
    }, [checkOnDashboard]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const validEmail = emailRegex.test(form['email']);

        if (!validEmail) {
            setErrorMsg("Invalid email.");
            return;
        }

        axios
            .post(
                "/contact",
                form,
                {
                    headers: { 'Content-Type' : 'application/json' }
                }
            )
            .then(() => {
                setSuccess(true);
                setForm({
                    name: '',
                    email:'',
                    subject:'',
                    message:''
                });
            })
            .catch((error) => {
                if (!error?.request) {
                    setErrorMsg('No server response.')
                } else {
                    setErrorMsg('Message send failed.');
                }
            });
    }

    return (
        <>
            {success ? (
                <section className="contact-page-wrapper">
                    <h1>Thank you! We'll respond to your message soon.</h1>
                </section>
            ) : (
                <section className="contact-page-wrapper">
                    <div>We would love to hear from you!</div>
                    <div>Do you have any ideas for improvement, or are there any bugs that need to be fixed?</div>
                    <div>{errorMsg}</div>
                    <form onSubmit={handleSubmit}>
                        <div className="contact-inputs-wrapper">
                            <div className="contact-inputs-left-column">
                                <div>
                                    <label>
                                        Name
                                    </label>
                                    <input
                                        className="contact-input"
                                        type="text"
                                        autoComplete="off"
                                        onChange={(event) => setForm(previousState => {
                                            return { ...previousState, name: event.target.value }
                                        })}
                                        value={form['name']}
                                        required
                                    />
                                </div>
                                <div>
                                    <label>
                                        Email
                                    </label>
                                    <input
                                        className="contact-input"
                                        type="text"
                                        autoComplete="off"
                                        onChange={(event) => setForm(previousState => {
                                            return { ...previousState, email: event.target.value }
                                        })}
                                        value={form['email']}
                                        required
                                    />
                                </div>
                                <div>
                                    <label>
                                        Subject
                                    </label>
                                    <input
                                        className="contact-input"
                                        type="text"
                                        autoComplete="off"
                                        onChange={(event) => setForm(previousState => {
                                            return { ...previousState, subject: event.target.value }
                                        })}
                                        value={form['subject']}
                                        required
                                    />
                                </div>
                            </div>
                            <div id="contact-inputs-right-column">
                                <label>
                                    Message
                                </label>
                                <textarea
                                    className="contact-textarea"
                                    autoComplete="off"
                                    onChange={(event) => setForm(previousState => {
                                        return { ...previousState, message: event.target.value }
                                    })}
                                    value={form['message']}
                                    required
                                >
                                </textarea>
                            </div>
                        </div>
                        <button
                            className="button-contact"
                            disabled={(form['name'] === '') 
                                || (form['email'] === '') 
                                || (form['message'] === '') 
                                || (form['message'] === '') 
                                ? true 
                                : false
                            }
                        >
                            Submit
                        </button>
                    </form>
                </section>
            )}
        </>
    );
};
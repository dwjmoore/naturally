import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faTrashCan } from "@fortawesome/free-solid-svg-icons";


export default function AdminContact () {
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get(
                "/contact/admin",
                {
                    headers: { 'Content-Type' : 'application/json' },
                    withCredentials: true
                }
            )
            .then((response) => {
                setMessages(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
        
            
    }, []);

    const handleDelete = (id) => {
        axios
            .delete(
                `/contact/delete/${id}`,
                {
                    headers: { 'Content-Type' : 'application/json' },
                    withCredentials: true
                }
            )
            .then(() => {
                /*window.location.reload(false)*/
                setMessages((current) => 
                    current.filter((message) => message.message_id !== id)
                );
            })
            .catch((error) => {
                console.log(error)
            });;
    };

    return (
        <>
            {(isLoading) ? (
                <section className="loading">
                    {<FontAwesomeIcon icon={faSpinner} className="fa-spin" />}
                </section>
            ) : (
                <section className="admin-contact-page-wrapper">
                    <div className="admin-contact-page-title">
                        <div>Messages from Users</div>
                    </div>
                    {messages.map((message) => (
                        <div className="message-wrapper" key={message.message_id}>
                            <div className="date-trash-wrapper">
                                <div>
                                    <span>Date and Time Received: </span>{message.datetime}
                                </div>
                                <FontAwesomeIcon onClick={() => handleDelete(message.message_id)} className="delete-icon" icon={faTrashCan} />
                            </div>
                            <div>
                                <span>Name: </span>{message.name}
                            </div>
                            <div>
                                <span>Email: </span>{message.email}
                            </div>
                            <div>
                                <span>Subject: </span>{message.subject}
                            </div>
                            <hr/>
                            <div>
                                {message.message}
                            </div>
                        </div>
                    ))}
                </section>
                )
            }

        </>
    );
};
import React, { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import chat_light from "../../assets/chat-light.png";
import chat_dark from "../../assets/chat-dark.png";

const Footer = ({ theme, setTheme }) => {
    const [showChatModal, setShowChatModal] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const toggleChatModal = () => {
        setShowChatModal(!showChatModal);
    };

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Name:", name);
		console.log("Email:", email);
		console.log("Message:", message);
		setShowChatModal(false);
	
		setName("");
		setEmail("");
		setMessage("");
	};
	

    return (
        <footer>
            <div className="footer-container">
                <div>
                    Follow Us!
                    <hr />
                    <div>
                        <a href="https://www.facebook.com/">Facebook</a>
                        <br />
                        <a href="https://www.instagram.com/">Instagram</a>
                    </div>
                </div>

                <div>
                    Contacts
                    <hr />
                    <div>
                        <Link to="/reserve">Faz a tua reserva aqui</Link>
                        <p>+351 900 000 000</p>
                        <p>email@email.com</p>
                    </div>
                </div>

                <div className="chat-icon" onClick={toggleChatModal}>
                    <img src={theme === "light" ? chat_dark : chat_light} alt="Chat" width="50px" />
                </div>

                {showChatModal && (
                    <div className="modal">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <textarea
                                placeholder="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                )}
            </div>

			
        </footer>
    );
};

export default Footer;

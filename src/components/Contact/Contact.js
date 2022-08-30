import { MdContactSupport } from 'react-icons/md';
import './Contact.style.scss';

export const Contact = () => {
    return (
        <section className="contact">
            <div>
                <h1 className="title">
                    <span className="icon"><MdContactSupport /></span> 
                    What's next ? 
                </h1>
                <p className='center'>
                    Thank you for visiting, my inbox is always open. Whether you have a question or just want to chat, I'll do my best to answer you!
                </p>
                <div className='div-btn'>
                    <a className='btn-contact' href="mailto:syraxrakotonarivo@gmail.com" rel="noopener noreferrer" target="_blank">Contact Me</a>
                </div>
            </div>
        </section>
            
    )
}
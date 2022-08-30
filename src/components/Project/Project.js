import { MdOutlineWork } from "react-icons/md"
import { ListWork } from "./components/ListWork"
import './Project.style.scss';

export const Project = () => {
    return (
        <section className="project">
            <div>
                <h1 className="title">
                    <span className="icon"><MdOutlineWork /></span> 
                    List of things I’ve worked on
                </h1>
            </div>
            <ListWork />
        </section>
    )
}
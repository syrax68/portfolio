import { listWork } from '../data/data';
export const ListWork = () => {
    return (
        <>
            {listWork.map((work, key)=>
                <>
                {console.log(key, (key+1)%2)}
                    {(key+1) % 2 === 0? 
                        <div className="bloc-info-work" key={key}>
                            <div className="description-work">
                                <div>
                                    <h1 className="blue">{work.title}</h1>
                                    <div className="information-work">
                                        <p>
                                            {work.description}
                                        </p>
                                    </div>
                                    <div className="bloc-techno">
                                        {work.techno.map((tech, index)=>
                                            <p key={index}>{tech}</p>
                                        )}
                                    </div>
                                    <a className="link-work" href={work.url} target="_blank" alt={work.title} rel="noreferrer">Go to</a>
                                </div>
                            </div>
                            <div className="bloc-image-right-work">
                                <img src={process.env.PUBLIC_URL + work.image} alt="profile"/>
                            </div>
                        </div>
                    :<div className="bloc-info-work" key={key}>
                        <div className="bloc-image-left-work">
                            <img src={process.env.PUBLIC_URL + work.image} alt="profile"/>
                        </div>
                        <div className="description-work right">
                            <div>
                                <h1 className="blue left">{work.title}</h1>
                                <div className="information-work">
                                    <p>
                                        {work.description}
                                    </p>
                                </div>
                                <div className="bloc-techno left">
                                    {work.techno.map((tech, index)=>
                                        <p key={index}>{tech}</p>
                                    )}
                                </div>
                                <a className="link-work button-left" href={work.url} target="_blank" alt={work.title} rel="noreferrer">Go to</a>
                            </div>
                        </div>
                    </div>}
                </>
                
            )}
        </>
    )
}
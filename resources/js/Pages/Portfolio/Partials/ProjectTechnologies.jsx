import { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";

export default function ProjectTechnologies({technologies}){
    const [technologyDoms, setTechnologyDoms] = useState();
    useEffect(() => {
        const technologyElements = technologies.map((technology, index) => (
                <div key={index} className="technology">
                    <div className="name">{technology.name}</div>
                    <div className="content">{technology.content}</div>
                </div>
        ));

        setTechnologyDoms(technologyElements);
    }, []);
    return (
            <div className="technology-list">
                {technologyDoms}
                {technologyDoms}
                {technologyDoms}
            </div>
    );
}
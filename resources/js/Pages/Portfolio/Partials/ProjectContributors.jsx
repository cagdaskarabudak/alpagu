import { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";

export default function ProjectContributors({contributors}){
    const [contributorDoms, setContributorDoms] = useState();
    useEffect(() => {
        const contributorElements = contributors.map((contributor, index) => (
                <Link href={contributor.url != null ? contributor.url : '#'} key={index} className="contributor" as="div" style={{cursor: 'pointer'}}>
                    <div className="name">{contributor.name}</div>
                    <div className="content">{contributor.content}</div>
                </Link>
        ));

        setContributorDoms(contributorElements);
    }, []);
    return (
        <div className="contributor-list">
            {contributorDoms}
        </div>
    );
}
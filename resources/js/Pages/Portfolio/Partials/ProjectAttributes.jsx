import { useEffect, useState } from "react";

export default function ProjectAttributes({attributes}){
    const [attributeDoms, setAttirbuteDoms] = useState();
    useEffect(() => {
        const attributeElements = attributes.map((attribute, index) => (
                <li key={index} className="attribute">
                    {attribute.content}
                </li>
        ));

        setAttirbuteDoms(attributeElements);
    }, []);
    return (
        <ul className="attribute-list">
            {attributeDoms}
        </ul>
    );
}
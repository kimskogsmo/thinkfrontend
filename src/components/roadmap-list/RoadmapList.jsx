import { h, Fragment } from "preact";
import { useState } from 'preact/hooks'
import "./RoadmapList.styles.scss";
import Item from 'components/roadmap/Item.jsx'
function RoadmapResource ({
    id,
    title,
    slug,
    description
}) {
    return (
        slug ? (
            <a href={slug}>
                {title}
            </a>
        ) : <span>{title}</span>
    );
}

export default function RoadmapList({roadmaps}) {
    return (
        <Fragment>
            {(roadmaps && roadmaps.length) && (
                <ul className="roadmaps">
                    {roadmaps.map(roadmap => <Item slug={roadmap.slug} id={roadmap.id} name={roadmap.name} />)}
                </ul>
            )}
        </Fragment>
    );
}

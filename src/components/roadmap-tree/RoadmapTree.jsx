import { h, Fragment } from "preact";
import { useState } from 'preact/hooks'
import "./RoadmapTree.styles.scss";
import Item from 'components/roadmap/Item.jsx'

function RoadmapTreeItem ({
    name,
    tooltip,
    disabled
}) {
    return (
        <div className={'roadmap--tree-item roadmap-child'}>{name}</div>
    )
}

export default function RoadmapTree({
    id, name, slug, children, resources
}) {
    const [highlightedItem, setHighlightedItem] = useState(null)
    return (
        <Fragment>
            {(children && children.length) && (
                <ul className="roadmaps">
                    {children.map(roadmap => {
                        return (
                            <Item
                                name={roadmap.name}
                            />
                        )
                    })}
                </ul>
            )}

            {highlightedItem && (
                <div className={"item-details"}>
                    Hello
                </div>
            )}
        </Fragment>
    );
}

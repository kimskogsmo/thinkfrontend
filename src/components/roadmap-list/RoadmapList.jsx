import { h, Fragment } from "preact";
import { useState } from 'preact/hooks'
import "./RoadmapList.styles.scss";

function Resource({ name }) {
    return <div class="resource">{name}</div>;
}

function Article({ id, slug, from, leadsTo, name, resources = [] }) {
    const [articleOpen, setArticleOpen] = useState(false);

    const handleOpenArticle = () => {
        setArticleOpen(!!articleOpen);
    };

    return (
        <a role={"button"}
           href={`/roadmap/${id - 1}`}
           data-tooltip={"coming soon..."}
           aria-disabled={true}>
            {name}

            {/*(resources && resources.length) && (
                <div className="resources">
                    {resources && resources.map((resource) => (
                        <Resource name={resource.name} />
                    ))}
               </div>
            )*/}

            {articleOpen && (
                <div className={'detailed'}>
                    {resources.map((resource) => (
                        <span data-tooltip={"coming soon..."}>{resource.name}</span>
                    ))}
                </div>
            )}
        </a>
    );
}

export default function RoadmapList({roadmaps}) {
    return (
        <Fragment>
            {(roadmaps && roadmaps.length) && (
                <section className="roadmaps">
                    {roadmaps.map(roadmap => <Article slug={roadmap.slug} id={roadmap.id} name={roadmap.name} />)}
                </section>
            )}
        </Fragment>
    );
}

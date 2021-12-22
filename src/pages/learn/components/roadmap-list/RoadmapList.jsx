import { h, Fragment } from "preact";
import { useState } from 'preact/hooks'
import "./RoadmapList.styles.scss";

function Resource({ name }) {
    return <div class="resource">{name}</div>;
}

function Article({ id, slug, from, leadsTo, name, resources }) {
    const [articleOpen, setArticleOpen] = useState(false);

    const handleOpenArticle = () => {
        setArticleOpen(a => a = !a);
    };

    return (
        <a href={`/roadmap/${id}`}>
            <div class="roadmap-item" onClick={handleOpenArticle}>
                <span class="name">{name}</span>

                {(resources && resources.length) && (
                    <div className="resources">
                        {resources && resources.map((resource) => (
                            <Resource name={resource.name} />
                        ))}
                    </div>
                )}

                {articleOpen && (
                    <div class="detailed">
                        {resources.map((resource) => (
                            <a href={resource.url}>{resource.name}</a>
                        ))}
                    </div>
                )}
            </div>
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

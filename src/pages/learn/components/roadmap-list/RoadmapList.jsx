import { h, Fragment } from "preact";
import { useState } from 'preact/hooks'
import "./styles/index.scss";

const article = {
    from: null,
    leadsTo: null,
    name: "Internet",
    resources: [
        {
            from: null,
            leadsTo: null,
            name: "How does the internet work????",
            url: '//theguardian.com/technology/2018/oct/22/what-is-the-internet-13-key-questions-answered'
        },
        {
            from: null,
            leadsTo: null,
            name: "What is HTTP?",
        },
        {
            from: null,
            leadsTo: null,
            name: "Browsers?",
        },
    ],
};

function Resource({ name }) {
    return <div class="resource">{name}</div>;
}

function Article({ id, slug, from, leadsTo, name, resources }) {
    const [articleOpen, setArticleOpen] = useState(false);

    const handleOpenArticle = () => {
        
    };

    console.log(`roadmap invoked: `, id, slug);

    return (
        <a href={`/roadmap/${slug}/${id}`}>
            <div class="article" onClick={handleOpenArticle}>
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

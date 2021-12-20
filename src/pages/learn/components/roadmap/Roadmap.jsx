import { h } from "preact";
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

function Article({ from, leadsTo, name, resources }) {
    const [articleOpen, setArticleOpen] = useState(false);

    const handleOpenArticle = () => {
        
    };

    return (
        <div class="article" onClick={handleOpenArticle}>
            <span class="name">{name}</span>
            
            <div class="resources">
                {resources && resources.map((resource) => (
                    <Resource name={resource.name} />
                ))}
            </div>

            {articleOpen && (
                <div class="detailed">
                    {resources.map((resource) => (
                        <a href={resource.url}>{resource.name}</a>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function Roadmap() {
    return (
        <section class="roadmap">
            <Article
                from={article.from}
                leadsTo={article.leadsTo}
                name={article.name}
                resources={article.resources}
            />
        </section>
    );
}

import {h,JSX} from 'preact';
import {useState,useEffect} from 'preact/hooks';

export default function Item ({id,slug,from,leadsTo,name,resources = []}) {
    const [articleOpen,setArticleOpen] = useState(false);

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
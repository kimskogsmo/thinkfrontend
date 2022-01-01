import {h,JSX} from 'preact';
import {useState,useEffect} from 'preact/hooks';

export default function Item ({id,slug,from,leadsTo,title,resources = []}) {
    const [articleOpen,setArticleOpen] = useState(false);

    const handleOpenArticle = () => {
        setArticleOpen(!!articleOpen);
    };

    return (
        <a role={"button"}
           href={`/roadmap/${slug}`}
           >
            {title}

            {articleOpen && (
                <div className={'detailed'}>
                    {resources.map((resource) => (
                        <span data-tooltip={"coming soon..."}>{resource.title}</span>
                    ))}
                </div>
            )}
        </a>
    );
}
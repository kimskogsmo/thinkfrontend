import { h, Fragment } from 'preact'
import { useState, useEffect } from 'preact/hooks'

// Firebase
import { database } from '../../firebase'
import { ref, child, get, onValue, query  } from "firebase/database";

// Components
import RoadmapTree from 'components/roadmap-tree';

import './Roadmap.styles.scss'

export default function Roadmap({id}) {
    const [roadmap, setRoadmap] = useState(null)
    const [children, setChildren] = useState([])

    useEffect(() => {
        return onValue(ref(database, '/roadmaps/' + id), (snapshot) => {
            if (snapshot.exists()) {
                setRoadmap(snapshot.val())
            }
        }, {
            onlyOnce: false
        });
    }, [])

    useEffect(() => {
        if (roadmap) {
            setChildren(roadmap.children)
        }
    }, [roadmap])

    return (
        <Fragment>
            {roadmap && (
                <Fragment>
                    <header>
                        {roadmap.name && <h1>{roadmap.name}</h1>}
                        {roadmap.description && <p>{roadmap.description}</p>}
                    </header>
                    <RoadmapTree children={roadmap.children} />
                </Fragment>
            )}

            {!roadmap && (<span>loading...</span>)}

            <button
                className={'back-button'}
                onClick={() => history.back()}
                style={`
                    width: max-content;
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    background: rgba(255,255,255,0.075);
                    background: transparent; 
                    border: none;
                `}>

                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.295 19.716a1 1 0 0 0 1.404-1.425l-5.37-5.29h13.67a1 1 0 1 0 0-2H6.336L11.7
                    5.714a1 1 0 0 0-1.404-1.424l-6.924 6.822a1.25 1.25 0 0 0 0 1.78l6.924 6.823Z" fill="#fff"/>
                </svg>
            </button>
        </Fragment>
    )
}
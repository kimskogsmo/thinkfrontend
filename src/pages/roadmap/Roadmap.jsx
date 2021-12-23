import { h, Fragment } from 'preact'
import { useState, useEffect } from 'preact/hooks'

// Firebase
import { database } from '../../firebase'
import { ref, child, get, onValue, query  } from "firebase/database";

import './Roadmap.styles.scss'

export default function Roadmap({id}) {
    const [roadmap, setRoadmap] = useState(null)
    const [children, setChildren] = useState([])

    useEffect(() => {
        return onValue(ref(database, '/roadmaps/' + id), (snapshot) => {
            if (snapshot.exists()) {
                setRoadmap(r => r = snapshot.val())
            }
        }, {
            onlyOnce: false
        });
    }, [])

    useEffect(() => {
        console.log('roadmap',roadmap)
        if (roadmap) {
            setChildren(roadmap.children)
        }
    }, [roadmap])

    return (
        <Fragment>
            {roadmap && (
                <section>
                    <header>
                        {roadmap.name && (<h1>{roadmap.name}</h1>)}

                        <p>
                            {roadmap.description}
                        </p>
                    </header>

                    <article>
                        {children && children.length && (
                            <ul>
                                {roadmap.children.map(c => (c.id))}
                            </ul>
                        )}
                    </article>
                </section>
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
                ⟵ Go back
            </button>
        </Fragment>
    )
}
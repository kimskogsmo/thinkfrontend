import { h, Fragment } from 'preact'
import { useState, useEffect } from 'preact/hooks'

// Firebase
import { database } from '../../firebase'
import { ref, child, get, onValue, query  } from "firebase/database";

import './Roadmap.styles.scss'

export default function Roadmap({id}) {
    const [roadmap, setRoadmap] = useState(null)

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
        console.log(`retrieved roadmap`, roadmap)
    }, [roadmap])

    return (
        <Fragment>
            {roadmap && (
                <section className={'--bordered-box'}>
                    <header>
                        {roadmap.name && (<h1>{roadmap.name}</h1>)}

                        <p>
                            {roadmap.description}
                        </p>
                    </header>
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
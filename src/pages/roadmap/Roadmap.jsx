import { h, Fragment } from 'preact'
import { useState, useEffect } from 'preact/hooks'

// Firebase
import { database } from '../../firebase'
import { ref, child, get, onValue, query  } from "firebase/database";

export default function Roadmap({id, slug}) {
    const [roadmap, setRoadmap] = useState(null)

    console.log(`Roadmap.jsx ${id + ' ' + slug}`)

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
                <section>
                    {roadmap.name && (<h1>{roadmap.name}</h1>)}
                </section>

                /*<RoadmapTree />*/
            )}

            {!roadmap && (<span>loading...</span>)}

        </Fragment>
    )
}
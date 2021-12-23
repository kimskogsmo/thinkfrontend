import { h, Fragment } from 'preact'
import { useState, useEffect } from 'preact/hooks'

// Firebase
import { database } from '../../firebase'
import { ref, child, get, onValue, query  } from "firebase/database";

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
                <header>
                    {roadmap.name && (<h1>{roadmap.name}</h1>)}

                    <p>
                        Everything about frontend development. Get started with getting to know more about browsers, common tools and some terminology. Move on to the languages of the web and more.
                    </p>
                </header>

                /*<RoadmapTree />*/
            )}

            {!roadmap && (<span>loading...</span>)}

        </Fragment>
    )
}
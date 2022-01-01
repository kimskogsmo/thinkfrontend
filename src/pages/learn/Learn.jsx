import { h, Fragment } from 'preact'
import './Learn.styles.scss'

import RoadmapList from 'components/roadmap-list'

import getRoadmaps from './../../firebase/queries/getRoadmaps';
import {useEffect, useState} from "preact/hooks";
import {ref, query, orderByChild, limitToLast, onValue} from "firebase/database";
import {database} from "../../firebase";

export default function Learn({
    progress = null
}) {
    const [roadmaps, setRoadmaps] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Get firebase data
        const mostViewedRoadmaps =
            ref(database, 'roadmaps');

        onValue(mostViewedRoadmaps, (snapshot) => {
            if(snapshot.exists()) {
                const roadmaps = Object.values(snapshot.val())

                setLoading(false)
                setRoadmaps(roadmaps)
            }
        })
    }, [])

    useEffect(() => {
        console.log(roadmaps)
    }, [roadmaps])

    return (
        <Fragment>
            {loading && (
                <span>loading...</span>
            )}

            {!loading && (
                <Fragment>
                    <header>
                        <h1>Learn</h1>
                        <p>Choose a path to get started.</p>
                    </header>

                    <RoadmapList roadmaps={roadmaps} />
                </Fragment>
            )}


            {progress && (
                // This wont show for now, see const progress = false ^
                <Fragment>
                    <h3>Your progress</h3>
                    <div>Your progress</div>
                </Fragment>
            )}

        </Fragment>
    )
}
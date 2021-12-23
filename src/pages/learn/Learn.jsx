import { h, Fragment } from 'preact'
import './Learn.styles.scss'

import RoadmapList from 'components/roadmap-list'

export default function Learn({
    roadmaps
}) {
    const progress = false;

    return (
        <Fragment>
            <header>
                <h1>Learn</h1>
                <p>Choose a path to get started.</p>
            </header>

            {progress && (
                // This wont show for now, see const progress = false ^
                <Fragment>
                    <h3>Your progress</h3>
                    <div>Your progress</div>
                </Fragment>
            )}

            <RoadmapList roadmaps={roadmaps} />
        </Fragment>
    )
}
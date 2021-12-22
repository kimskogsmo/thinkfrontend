import { h, Fragment } from 'preact'
import RoadmapList from './components/roadmap-list'

export default function Learn({
    roadmaps
  }) {
    console.log('learn page roadmaps', roadmaps)

    return (
        <Fragment>
            <div>
                <h1>Learn frontend</h1>
                <p>Learn how to think frontend! Follow the roadmap below to start learning.</p>
            </div>

            <hr />

            <h3>Latest roadmaps</h3>
            <RoadmapList roadmaps={roadmaps} />

            <hr />
        </Fragment>
    )
}
import { h, Fragment } from 'preact'
import './Learn.styles.scss'

import RoadmapList from './components/roadmap-list'

export default function Learn({
    roadmaps
  }) {
    console.log('learn page roadmaps', roadmaps)

    return (
        <Fragment>
            <header>
                <h1>Learn</h1>
                <p>Choose a path to get started.</p>
            </header>

            <article>
                <h3>Latest roadmaps</h3>
                <p>Check out these community made roadmaps!</p>
                <RoadmapList roadmaps={roadmaps} />
            </article>
        </Fragment>
    )
}
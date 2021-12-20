import { h, Fragment } from 'preact'
import Roadmap from './components/roadmap'

export default function Learn() {
    return (
        <Fragment>
            <div>
                <h1>Learn frontend</h1>
                <p>Learn how to think frontend! Follow the roadmap below to start learning.</p>
            </div>

            <Roadmap />
        </Fragment>
    )
}
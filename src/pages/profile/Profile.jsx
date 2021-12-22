import {h,Fragment} from 'preact'

export default function Profile ({
     roadmaps
 }) {
    return (
        <Fragment>
            <header>
                <h1>Your profile</h1>
                <p>Track your amazing progress, create and update roadmaps, and challenge your friends from here.</p>
            </header>

            <article>
                <h2>
                    Stats
                </h2>
                <div className={'stats'}>
                    <p>If you had any stats, you would get stats!</p>
                </div>
            </article>

            <article>
                <h2>Your roadmaps</h2>
                <p>No roadmaps yet... bah!</p>
                <a href={"/create-roadmap"}>
                    <button>Create one?</button>
                </a>
            </article>

            <article>
                <h2>Challenges</h2>
                <p>You haven't submitted or received any challenges yet...</p>
                <a href={"/challenge-friend"}>
                    <button>Challenge someone now!</button>
                </a>
            </article>

            <article>
                <h3>Your details</h3>
                <p>Coming soon</p>
            </article>
        </Fragment>
    )
}
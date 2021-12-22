import { h, Fragment } from 'preact'
import './Home.styles.scss'

export default function Home() {
    return (
        <Fragment>
            <header className={"--jumbo"}>
                <h1>Get good at code</h1>
                <p>Learningpaths is a tool for sharing interactive roadmaps for learning</p>
                <a role="button" href={"/learn"}>Start learning now</a>
            </header>

            <section class={"grid"}>
                <div class={"card"}>
                    <div>
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.248 16.002c.966 0 1.75.784 1.75 1.75v2.498A1.75 1.75 0 0 1 6.248 22H3.75A1.75 1.75 0 0 1 2 20.25v-2.498c0-.966.784-1.75 1.75-1.75h2.498ZM9.748 18h11.505a.75.75 0 0 1 .102 1.493l-.102.007H9.748a.75.75 0 0 1-.102-1.493L9.748 18h11.505H9.748Zm-3.5-8.999c.966 0 1.75.784 1.75 1.75v2.498a1.75 1.75 0 0 1-1.75 1.75H3.75A1.75 1.75 0 0 1 2 13.249V10.75c0-.966.784-1.75 1.75-1.75h2.498ZM9.748 11h11.505a.75.75 0 0 1 .102 1.493l-.102.007H9.748a.75.75 0 0 1-.102-1.493L9.748 11h11.505H9.748Zm-3.5-9c.966 0 1.75.784 1.75 1.75v2.498a1.75 1.75 0 0 1-1.75 1.75H3.75A1.75 1.75 0 0 1 2 6.248V3.75C2 2.784 2.784 2 3.75 2h2.498Zm3.5 2h11.505a.75.75 0 0 1 .102 1.493l-.102.007H9.748a.75.75 0 0 1-.102-1.493L9.748 4h11.505H9.748Z" fill="#212121"/></svg>
                        <h3>Track your progress</h3>
                    </div>

                    <p>All your stuff will be saved. Imagine following a road map and being able to get right back to where you started later?</p>
                </div>
                <div className={"card"}>
                    <div>
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.248 16.002c.966 0 1.75.784 1.75 1.75v2.498A1.75 1.75 0 0 1 6.248 22H3.75A1.75 1.75 0 0 1 2 20.25v-2.498c0-.966.784-1.75 1.75-1.75h2.498ZM9.748 18h11.505a.75.75 0 0 1 .102 1.493l-.102.007H9.748a.75.75 0 0 1-.102-1.493L9.748 18h11.505H9.748Zm-3.5-8.999c.966 0 1.75.784 1.75 1.75v2.498a1.75 1.75 0 0 1-1.75 1.75H3.75A1.75 1.75 0 0 1 2 13.249V10.75c0-.966.784-1.75 1.75-1.75h2.498ZM9.748 11h11.505a.75.75 0 0 1 .102 1.493l-.102.007H9.748a.75.75 0 0 1-.102-1.493L9.748 11h11.505H9.748Zm-3.5-9c.966 0 1.75.784 1.75 1.75v2.498a1.75 1.75 0 0 1-1.75 1.75H3.75A1.75 1.75 0 0 1 2 6.248V3.75C2 2.784 2.784 2 3.75 2h2.498Zm3.5 2h11.505a.75.75 0 0 1 .102 1.493l-.102.007H9.748a.75.75 0 0 1-.102-1.493L9.748 4h11.505H9.748Z" fill="#212121"/></svg>
                        <h3>Simple overview</h3>
                    </div>

                    <p>You're gonna have such an easy time finding stuff to learn! Amazing!</p>
               </div>
                <div className={"card"}>
                    <div>
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.248 16.002c.966 0 1.75.784 1.75 1.75v2.498A1.75 1.75 0 0 1 6.248 22H3.75A1.75 1.75 0 0 1 2 20.25v-2.498c0-.966.784-1.75 1.75-1.75h2.498ZM9.748 18h11.505a.75.75 0 0 1 .102 1.493l-.102.007H9.748a.75.75 0 0 1-.102-1.493L9.748 18h11.505H9.748Zm-3.5-8.999c.966 0 1.75.784 1.75 1.75v2.498a1.75 1.75 0 0 1-1.75 1.75H3.75A1.75 1.75 0 0 1 2 13.249V10.75c0-.966.784-1.75 1.75-1.75h2.498ZM9.748 11h11.505a.75.75 0 0 1 .102 1.493l-.102.007H9.748a.75.75 0 0 1-.102-1.493L9.748 11h11.505H9.748Zm-3.5-9c.966 0 1.75.784 1.75 1.75v2.498a1.75 1.75 0 0 1-1.75 1.75H3.75A1.75 1.75 0 0 1 2 6.248V3.75C2 2.784 2.784 2 3.75 2h2.498Zm3.5 2h11.505a.75.75 0 0 1 .102 1.493l-.102.007H9.748a.75.75 0 0 1-.102-1.493L9.748 4h11.505H9.748Z" fill="#212121"/></svg>
                        <h3>Challenjour...?</h3>
                    </div>

                    <p>This site would be completely useless if you couldn't challenge your friends on completing a roadmap.</p>
                </div>
            </section>
        </Fragment>
    )
}
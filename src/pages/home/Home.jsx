import { h, Fragment } from 'preact'
import './Home.styles.scss'

export default function Home() {
    return (
        <Fragment>
            <header className={"--jumbo"}>
                <h1>Get good at code</h1>
                <p>This is going to be a tool for sharing interactive roadmaps for learning</p>
                <a role="button" href={"/learn"}>Start learning now</a>
            </header>

            <section class={"grid"}>
                <div class={"card"}>
                    <div>
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 4a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V5.414l-5.793 5.793a1 1 0 0 1-1.414 0L10 8.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0L13.5 9.086 18.586 4H17ZM5 18v3a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0Zm5-4a1 1 0 1 0-2 0v7a1 1 0 1 0 2 0v-7Zm4 1a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1Zm6-4a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0V11Z" fill="#fff"/></svg>
                        <h3>Track your progress</h3>
                    </div>

                    <p>All your stuff will be saved. Imagine following a road map and being able to get right back to where you started later? That's what it will be.</p>
                </div>
                <div className={"card"}>
                    <div>
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11 5.5a3.5 3.5 0 0 1-3 3.465V11.5h6.25a2.25 2.25 0 0 0 2.25-2.25v-.395A3.502 3.502 0 0 1 17.5 2a3.5 3.5 0 0 1 .5 6.965v.285A3.75 3.75 0 0 1 14.25 13H8v2.035a3.5 3.5 0 1 1-1.5.11v-6.29A3.502 3.502 0 0 1 7.5 2 3.5 3.5 0 0 1 11 5.5Z" fill="#fff"/></svg>
                        <h3>Get creative</h3>
                    </div>

                    <p>Think stuff is missing from other roadmaps out there? Create a fork, and make your own, or start from scratch!</p>
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
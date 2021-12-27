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
                        <h4>Track your progress</h4>
                    </div>

                    <p>All your stuff will be saved. Imagine following a road map and being able to get right back to where you started later? That's what it will be.</p>
                </div>

                <div className={"card"}>
                    <div>
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11 5.5a3.5 3.5 0 0 1-3 3.465V11.5h6.25a2.25 2.25 0 0 0 2.25-2.25v-.395A3.502 3.502 0 0 1 17.5 2a3.5 3.5 0 0 1 .5 6.965v.285A3.75 3.75 0 0 1 14.25 13H8v2.035a3.5 3.5 0 1 1-1.5.11v-6.29A3.502 3.502 0 0 1 7.5 2 3.5 3.5 0 0 1 11 5.5Z" fill="#fff"/></svg>
                        <h4>Get creative</h4>
                    </div>

                    <p>Think stuff is missing from other roadmaps out there? Create a fork, and make your own, or start from scratch!</p>
               </div>
                <div className={"card"}>
                    <div>
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 8.5a6.503 6.503 0 0 0 4.943 6.312 7.993 7.993 0 0 1 1.716-4.806 1.992 1.992 0 0 0-1.68.694.75.75 0 0 1-1.14-.975 3.5 3.5 0 0 1 4.023-.95 7.995 7.995 0 0 1 4.95-1.832A6.5 6.5 0 0 0 2 8.5Zm5.5-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM22 15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-8.5-1.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm4.471 3.218a.625.625 0 0 0-.88.07 2.75 2.75 0 0 1-4.178.003.625.625 0 1 0-.948.814 3.998 3.998 0 0 0 6.075-.006.625.625 0 0 0-.069-.88ZM17.5 14.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="#ffffff"/></svg>
                        <h4>Annoy your friends</h4>
                    </div>

                    <p>Become a pain in the ass. Challenge your friends to complete roadmaps, and beat them. You will feel glorious.</p>
                </div>
            </section>
        </Fragment>
    )
}
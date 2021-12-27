import { h } from 'preact'
import './Header.styles.scss'
import { useState } from 'preact/hooks'


export default function Header({
    isAuthenticated,
    user
}) {
    const [menuOpen, setMenuOpen] = useState(false)

    // eslint-disable-next-line no-return-assign
    const handleMenuClick = () => setMenuOpen(!menuOpen)

    return (
        <nav>
            <a href="/">
                <div class="logo">
                    <span>think<strong><i>frontend</i></strong></span>
                </div>
            </a>

            <div className={'right'}>
                {/*<div class="search">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2.5a7.5 7.5 0 0 1 5.964 12.048l4.743 4.745a1 1 0 0 1-1.32 1.497l-.094-.083-4.745-4.743A7.5 7.5 0 1 1 10 2.5Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z" fill="#212121" /></svg>
                    <span>Search</span>
                </div>*/}

                { !isAuthenticated && (<a href={"/profile"}>
                    <div className="profile search">
                        <span>Sign In</span>
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.754 14a2.249 2.249 0 0 1 2.25 2.249v.918a2.75 2.75 0 0 1-.513 1.599C17.945 20.929 15.42 22 12 22c-3.422 0-5.945-1.072-7.487-3.237a2.75 2.75 0 0 1-.51-1.595v-.92a2.249 2.249 0 0 1 2.249-2.25h11.501ZM12 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"
                                fill="#212121"/>
                        </svg>
                    </div>
                </a>)}

                { isAuthenticated && (<a href={"/profile"}>
                    <div className="profile search">
                        <span>Hej, {(user && user.displayName) && (user.displayName)}!</span>
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.754 14a2.249 2.249 0 0 1 2.25 2.249v.918a2.75 2.75 0 0 1-.513 1.599C17.945 20.929 15.42 22 12 22c-3.422 0-5.945-1.072-7.487-3.237a2.75 2.75 0 0 1-.51-1.595v-.92a2.249 2.249 0 0 1 2.249-2.25h11.501ZM12 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"
                                fill="#212121"/>
                        </svg>
                    </div>
                </a>)}

                <div className={'profile menu'} onClick={ handleMenuClick }>
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 18.251a2.249 2.249 0 0 0-2.25-2.249H5.25a2.249 2.249 0 1 0 0 4.498h13.5A2.249 2.249 0 0 0 21 18.251Zm-4-6.5a2.249 2.249 0 0 0-2.25-2.249h-9.5a2.25 2.25 0 1 0 0 4.498h9.5A2.249 2.249 0 0 0 17 11.751Zm-4-6.5a2.25 2.25 0 0 0-2.25-2.25l-5.5.001a2.25 2.25 0 0 0 0 4.498h5.5A2.25 2.25 0 0 0 13 5.251Z" fill="#212121"/></svg>
                </div>
            </div>

            {menuOpen && (
                <div className={"dropDown"}>
                    <ul>
                        <li><a href={"/"} onClick={() => handleMenuClick()}>Home</a></li>
                        <li><a href={"/learn"} onClick={() => handleMenuClick()}>Learn</a></li>
                        <li><a href={"/profile"} onClick={() => handleMenuClick()}>Profile</a></li>
                    </ul>

                    <div className={"close"} onClick={ handleMenuClick }>
                        <svg height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xmlns="http://www.w3.org/2000/svg" ><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" /></svg>
                        <span>Close</span>
                    </div>
                </div>
            )}
        </nav>
    )
}
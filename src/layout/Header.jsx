import { h } from 'preact'
import './Header.styles.scss'
import { useState } from 'preact/hooks'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenuClick = () => {
        setMenuOpen(m => m = !m)
    }

    return (
        <header>
            <a href="/">
                <div class="logo">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm5.5-3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM12 2a5.414 5.414 0 0 1 5.33 4.47h.082a3.765 3.765 0 1 1 0 7.53H6.588a3.765 3.765 0 1 1 0-7.53h.082A5.414 5.414 0 0 1 12 2Z" fill="#212121" /></svg>
                    <span>Think Frontend</span>
                </div>
            </a>

            <div class="right">
                <div class="search">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2.5a7.5 7.5 0 0 1 5.964 12.048l4.743 4.745a1 1 0 0 1-1.32 1.497l-.094-.083-4.745-4.743A7.5 7.5 0 1 1 10 2.5Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z" fill="#212121" /></svg>
                    <span>Search</span>
                </div>
                <div class="menu" onClick={ handleMenuClick }>
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 18.251a2.249 2.249 0 0 0-2.25-2.249H5.25a2.249 2.249 0 1 0 0 4.498h13.5A2.249 2.249 0 0 0 21 18.251Zm-4-6.5a2.249 2.249 0 0 0-2.25-2.249h-9.5a2.25 2.25 0 1 0 0 4.498h9.5A2.249 2.249 0 0 0 17 11.751Zm-4-6.5a2.25 2.25 0 0 0-2.25-2.25l-5.5.001a2.25 2.25 0 0 0 0 4.498h5.5A2.25 2.25 0 0 0 13 5.251Z" fill="#212121"/></svg>
                    <span>Menu</span>
                </div>
            </div>

            {menuOpen && (
                <div class="dropDown">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Learn</li>
                    </ul>
                    <div class="close" onClick={ handleMenuClick }>
                        <svg height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xmlns="http://www.w3.org/2000/svg" ><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" /></svg>
                        <span>Close</span>
                    </div>
                </div>
            )}
        </header>
    )
}
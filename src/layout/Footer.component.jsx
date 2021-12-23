import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'

import "./Footer.styles.scss"

export default function FooterComponent() {
    const [version, setVersion] = useState('...')

    return (
        <footer style="color: white">
            <div class={"container"}>
                <span>&copy; 2021-2022 thinkfrontend</span>
            </div>
        </footer>
    )
}
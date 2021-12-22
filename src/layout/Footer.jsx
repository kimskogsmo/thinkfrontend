import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'

import "./Footer.styles.scss"

export default function Footer() {
    const [version, setVersion] = useState('...')

    return (
        <footer style="color: white">
            {version}
        </footer>
    )
}
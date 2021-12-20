import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'

import "./Footer.styles.scss"

export default function Footer() {
    const [version, setVersion] = useState('...')
    
    useEffect(() => {
        fetch('https://localhost:44331/WeatherForecast')
        .then(res => {
            if (res.status == 200) {
                console.log(res)

                return res.text()
            }
        }).then(data => {
            setVersion(v => v = data)
        })
    }, [])
    
    return (
        <footer style="color: white">
            {version}
        </footer>
    )
}
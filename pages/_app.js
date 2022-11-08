import '../styles/globals.css'
// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap')
    }, [])

    return <Component {...pageProps} />
}

export default MyApp

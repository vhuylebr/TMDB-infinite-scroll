import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux'
import { useStore } from '../store'
import { AppProps } from 'next/app'
import { NextPage } from 'next'
import MovieDetailModal from '../components/MovieDetailModal'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
    const store = useStore()

    return (
        <Provider store={store}>
            <MovieDetailModal />
            <Component {...pageProps} />
        </Provider>
    )
}

export default App;
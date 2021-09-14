import 'bootstrap/dist/css/bootstrap.css'
import '../styles/Home.module.css'
import { GameContextWrapper } from '../context/GameContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <GameContextWrapper>
      <Component {...pageProps} />
    </GameContextWrapper>
  )
}
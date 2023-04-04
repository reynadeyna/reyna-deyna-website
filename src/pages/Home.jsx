import { useState } from 'react'
import spotify from '../assets/media_icons/spotify.svg'
import octocat from '../assets/media_icons/octocat.svg'
import Contacts from '../components/Contacts'
import Questions from '../components/Questions'

const Home = () => {

    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={spotify} className="logo" alt="Vite logo" />
                </a>
                <a href="https://re'../assets/media_icons/spotify.svg'actjs.org" target="_blank">
                    <img src={octocat} className="logo react" alt="React logo" />
                </a>
                <p className="read-the-docs">
                    Click on the links to listen on your desired platform.
                </p>
            </div>
            
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    Your LOv3 count is {count}
                </button>
                <p>
                    Hi
                    This is Angelware, transforming from Reyna Deyna. I am creating electronic pop songs - writing lyrics,
                    producing, performing and engineering.
                </p>
                <p>
                    Now I am getting back on decks as a DJ and giving some psychedelic, ethereal,
                    progressive, trance-like, melodic electronic music.
                </p>
                <p>
                    I am also composing and creating sound design as Angelic Beats: music for meditation and healing, subliminals and affirmations.
                </p>
                <p>
                    I was awarded a degree in Sound Engineering and Production. Currently I am studying Computer Science and I love to code. I
                    was based in Berlin, Los Angeles and Lithuania. The next destination is unknown.
                </p>
                <p>
                    Before, since 15yo I was a DJ - my early mixes as
                    Rugile and the latest as Reyna Deyna are archived on SoundCloud. All the albums and performances by Reyna Deyna are still up.
                </p>
                <p>
                    I'd love to talk at reynadeyna@protonmail.com.  Or, ask me a question here:
                </p>
            </div>

            <Contacts />
            <Questions />
        </div>
    )




}

export default Home
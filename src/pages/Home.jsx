import { useState } from 'react'
import spotify from '../assets/media_icons/spotify.svg'
import octocat from '../assets/media_icons/octocat.svg'
import instagram from '../assets/media_icons/instagram.svg'
import tiktok from '../assets/media_icons/tiktok.svg'
import twitter from '../assets/media_icons/twitter.svg'
import youtube from '../assets/media_icons/youtube.svg'

const Home = () => {

    const [count, setCount] = useState(0)

    return (
        <>
            <div className='home-content-container'>

                {/* LINKS CONTAINER */}
                <div className="links-container">
                    <a href="https://spotify.com" target="_blank">
                        <img src={spotify} className="logo" alt="Spotify logo" />
                    </a>
                    <a href="https://github.com/angelware10110" target="_blank">
                        <img src={octocat} className="logo" alt="Github logo" />
                    </a>
                    <a href="https://github.com/angelware10110" target="_blank">
                        <img src={instagram} className="logo" alt="Instagram logo" />
                    </a>
                    <a href="https://github.com/angelware10110" target="_blank">
                        <img src={tiktok} className="logo" alt="TikTok logo" />
                    </a>
                    <a href="https://github.com/angelware10110" target="_blank">
                        <img src={youtube} className="logo" alt="YouTube logo" />
                    </a>
                    <a href="https://github.com/angelware10110" target="_blank">
                        <img src={twitter} className="logo" alt="Twitter logo" />
                    </a>
                    <p className="read-the-docs">
                        Click on the links to listen on your desired platform.
                    </p>
                </div>

                {/* L0v3 CONTAINER */}
                <div className="lov3">
                    <button onClick={() => setCount((count) => count + 1)}>
                        Your LOv3 count is {count}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Home
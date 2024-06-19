import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import style from '../styles/AboutPage.module.css'
import { Link } from 'react-router-dom'
import CreateInformation from '../components/CreateInformation'
import CreateEpisodes from '../components/CreateEpisodes'
import Loader from '../components/helper/Loader'

function getData(info) {
    return fetch(info).then(res => res.json()).then(data => data)
}
async function getEpisodes(episodes) {
    const arr = []
    for (const elem of episodes) {
        const response = await fetch(elem);
        const data = await response.json(); 
        arr.push(data);
    }
    return arr
}

export default function AboutPage() {
    const [data, setData] = useState(null);
    const [dataEpisodes, setDataEpisodes] = useState(null);
    const info = useSelector((state) => state.about.url)
    const episodes = useSelector((state) => state.about.episodes)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getData(info);
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        const fetchEpisode = async () => {
            try {
                const fetchedEpisodes  = await getEpisodes(episodes);
                setDataEpisodes(fetchedEpisodes);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
        fetchEpisode()
    }, [])

    if (data) {
        return (
            <main className={style.about}>
                <div className={style.container}>
                    <div className={style.aboutContent}>
                        <div className={style.aboutFeauter}>
                            <div className={style.feauterLink}>
                                <Link to={'/'}>
                                    <img src="/aboutPage/left-arrow-alt-regular-24.png" alt="" />
                                    GO BACK
                                </Link>
                            </div>
                            <div style={{ display: 'flex', flexGrow: '1', textAlign: 'center', justifyContent: 'center', marginBottom: '25px'}}>
                                <div className={style.feauterImg}>
                                    <div style={{ maxWidth: '300px' }}>
                                        <img src={data.image} alt={data.name} />
                                    </div>
                                    <h1>{data.name}</h1>
                                </div>
                            </div>
                        </div>
                        <div className={style.aboutTable}>
                            <div className={style.aboutInformations}>
                                <h2 style={{ marginBottom: '36px', color: '#8e8e93', fontSize: '23px', fontWeight: '900', fontStyle: 'italic', letterSpacing: '0.1em' }}>Informations</h2>
                                <CreateInformation data={data} />
                            </div>
                            <div className={style.aboutEpisodes}>
                                <h2 style={{ marginBottom: '36px', color: '#8e8e93', fontSize: '23px', fontWeight: '900', fontStyle: 'italic', letterSpacing: '0.1em' }}>Episodes</h2>
                                <CreateEpisodes dataEpisodes={dataEpisodes} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }else {
        return (
            <Loader />
        )
    }
}
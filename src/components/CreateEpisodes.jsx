import React, { useState, useEffect } from 'react';
import style from '../styles/CreateEpisodes.module.css'
export default function CreateEpisodes({ dataEpisodes }) {
    const [episodeData, setEpisodeData] = useState(null);
    useEffect(() => {
        setEpisodeData(dataEpisodes)
    }, [dataEpisodes]);
    if (episodeData) {
        return (
            <div className={style.episodes}>
                {episodeData.map((elem) => (
                    <div key={elem.id} className={style.episodesItem}>
                        <h2>{elem.episode}</h2>
                        <h3>{elem.name}</h3>
                        <p>Air date: {elem.air_date}</p>
                    </div>
                ))}
            </div>
        );
    } else {
        return null
    }
}

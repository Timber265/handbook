import style from '../styles/MainPage.module.css'
import { Link } from 'react-router-dom'
import { useGetRickApiQuery } from '../services/rickApi'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addInfoCharacter, addInfoEpisodes } from '../services/aboutSlice'
import Loader from '../components/helper/Loader'


function createCard(data) {
    const dispatch = useDispatch()
    const handleLinkClick = (elem) => {
        const episode = elem.episode.slice(0, 4);
        dispatch(addInfoCharacter(elem.url));
        dispatch(addInfoEpisodes(episode))
    };
    return (
        data.map((elem) => {
            return (
                <Link key={elem.id} className={style.charcharactersOutputLink} to={'/about'} onClick={() => handleLinkClick(elem)}>
                    <div style={{ height: '70%' }}><img src={elem.image} alt={elem.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: '12px 16px', height: '30%' }}>
                        <h2 style={{ fontSize: '20px' }}>{elem.name}</h2>
                        <p style={{ fontSize: '14px' }}>{elem.species}</p>
                    </div>
                </Link>
            )
        })
    )
}

function handleChangeSpecies(e, setPage, setSpecies) {
    setPage(1)
    setSpecies(e.target.value ? e.target.value : ' ')
    localStorage.setItem('species', e.target.value)
}
function handleChangeGender(e, setPage, setGender) {
    setPage(1)
    setGender(e.target.value ? e.target.value : ' ')
    localStorage.setItem('gender', e.target.value)
}
function handleChangeStatus(e, setPage, setStatus) {
    setPage(1)
    setStatus(e.target.value ? e.target.value : ' ')
    localStorage.setItem('status', e.target.value)
}
function handleSearcByName(e, setPage, setName) {
    setPage(1)
    setName(e.target.value ? e.target.value.toLowerCase() : null)
    localStorage.setItem('searchName', e.target.value)
}

export default function MainPage() {
    let [page, setPage] = useState(1)
    let [species, setSpecies] = useState('')
    let [gender, setGender] = useState('')
    let [status, setStatus] = useState('')
    let [name, setName] = useState('')
    const { data, error, isLoading } = useGetRickApiQuery(`character?page=${page}&species=${species ? species : localStorage.getItem('species') ? localStorage.getItem('species') : ' '}&gender=${gender ? gender : localStorage.getItem('gender') ? localStorage.getItem('gender') : ' '}&status=${status ? status : localStorage.getItem('status') ? localStorage.getItem('status') : ' '}&name=${name ? name : localStorage.getItem('searchName') ? localStorage.getItem('searchName') : ' ' }`)
    const [dataCharacters, setDataCharacters] = useState([])
    useEffect(() => {
        if (dataCharacters.length === 0) {
            data && data.results ? setDataCharacters(data.results) : null
        } else if (species || gender || status || name) {
            if (page === 1) {
                setDataCharacters(data.results)
            } else {
                setDataCharacters([...dataCharacters, ...data.results])
            }
        } else {
            setDataCharacters([...dataCharacters, ...data.results])
        }
    }, [data])

    useEffect(() => {
        const clearLocalStorage = () => {
            localStorage.clear();
        };

        window.addEventListener('beforeunload', clearLocalStorage);

        return () => {
            window.removeEventListener('beforeunload', clearLocalStorage);
        };
    }, [])

    if (isLoading) {
        return (
            <Loader />
        )
    }
    if (dataCharacters) {
        return (
            <main className={style.characters}>
                <div className={style.container}>
                    <div className={style.charactersContent}>
                        <div className={style.charactersImage}>
                            <img src="/charactersPage/Rick.png" alt="Rick And Morty" />
                        </div>
                        <div className={style.inputContainer}>
                            <input type="text" name="text" value={name ? name : localStorage.getItem('searchName') ? localStorage.getItem('searchName') : null} className={style.input} placeholder="search..." onChange={(e) => handleSearcByName(e, setPage, setName)} />
                            <span className={style.icon}>
                                <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </span>
                        </div>
                        <div className={style.charcharactersSelectors}>
                            <select name="Species" id="" defaultValue="Species" onChange={(e) => handleChangeSpecies(e, setPage, setSpecies)}>
                                <option disabled hidden>Species</option>
                                <option value="Human">Human</option>
                                <option value="Alien">Alien</option>
                                <option value="Humanoid">Humanoid</option>
                                <option value="Mythological Creature">Mythological Creature</option>
                                <option value="Animal">Animal</option>
                                <option value="Robot">Robot</option>
                                <option value="Cronenberg">Cronenberg</option>
                                <option value="Disease">Disease</option>
                                <option value="unknown">unknown</option>
                                <option value="">Default</option>
                            </select>
                            <select name="Gender" id="" defaultValue="Gender" onChange={(e) => handleChangeGender(e, setPage, setGender)}>
                                <option disabled hidden>Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Genderless">Genderless</option>
                                <option value="unknown">unknown</option>
                                <option value="">Default</option>
                            </select>
                            <select name="Status" id="" defaultValue="Status" onChange={(e) => handleChangeStatus(e, setPage, setStatus)}>
                                <option disabled hidden>Status</option>
                                <option value="Alive">Alive</option>
                                <option value="Dead">Dead</option>
                                <option value="unknown">unknown</option>
                                <option value="">Default</option>
                            </select>
                        </div>
                        <div className={style.charcharactersOutput}>
                            {createCard(dataCharacters)}
                        </div>
                        <div className={style.charcharactersButton}>
                            <button onClick={() => { setPage(page += 1) }}>LOAD MORE</button>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
import style from '../styles/CreateInformation.module.css'
export default function CreateInformation({ data }) {
    if (data) {
        return (
            <div className={style.content}>
                <div className={style.contentItem}>
                    <h3>Gender</h3>
                    <p>{data.gender ? data.gender : 'Unknown'}</p>
                </div>
                <div className={style.contentItem}>
                    <h3>Status</h3>
                    <p>{data.status ? data.status : 'Unknown'}</p>
                </div>
                <div className={style.contentItem}>
                    <h3>Specie</h3>
                    <p>{data.species ? data.species : 'Unknown'}</p>
                </div>
                <div className={style.contentItem}>
                    <h3>Origin</h3>
                    <p>{data.origin.name ? data.origin.name : 'Unknown'}</p>
                </div>
                <div className={style.contentItem}>
                    <h3>Type</h3>
                    <p>{data.type ? data.type : 'Unknown'}</p>
                </div>
                <div className={style.contentItem}>
                    <h3>Location</h3>
                    <p>{data.location.name ? data.location.name : 'Unknown'}</p>
                </div>
            </div>
        )
    }
}
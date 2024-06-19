import style from '../../styles/Loader.module.css'
export default function Loader() {
    return (
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className={style.wheelAndHamster}>
                <div className={style.wheel}></div>
                <div className={style.hamster}>
                    <div className={style.hamsterBody}>
                        <div className={style.hamsterHead}>
                            <div className={style.hamsterEar}></div>
                            <div className={style.hamsterEye}></div>
                            <div className={style.hamsterNose}></div>
                        </div>
                        <div className={`${style.hamsterLimb} ${style['hamsterLimb--fr']}`}></div>
                        <div className={`${style.hamsterLimb} ${style['hamsterLimb--fl']}`}></div>
                        <div className={`${style.hamsterLimb} ${style['hamsterLimb--br']}`}></div>
                        <div className={`${style.hamsterLimb} ${style['hamsterLimb--bl']}`}></div>
                        <div className={style.hamsterTail}></div>
                    </div>
                </div>
                <div className={style.spoke}></div>
            </div>
        </div>
    )
}
import style from '../../styles/NotFound.module.css';

export default function NotFound() {
    return (
        <div style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
            <div className={style.mainWrapper}>
                <div className={style.main}>
                    <div className={style.antenna}>
                        <div className={style.antennaShadow}></div>
                        <div className={style.a1}></div>
                        <div className={style.a1d}></div>
                        <div className={style.a2}></div>
                        <div className={style.a2d}></div>
                        <div className={style.aBase}></div>
                    </div>
                    <div className={style.tv}>
                        <div className={style.curve}>
                            <svg
                                xmlSpace="preserve"
                                viewBox="0 0 189.929 189.929"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                className={style.curveSvg}
                            >
                                <path
                                    d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
        C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
                                ></path>
                            </svg>
                        </div>
                        <div className={style.displayDiv}>
                            <div className={style.screenOut}>
                                <div className={style.screenOut1}>
                                    <div className={style.screen}>
                                        <span className={style.notfoundText}>NOT FOUND</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.lines}>
                            <div className={style.line1}></div>
                            <div className={style.line2}></div>
                            <div className={style.line3}></div>
                        </div>
                        <div className={style.buttonsDiv}>
                            <div className={style.b1}><div></div></div>
                            <div className={style.b2}></div>
                            <div className={style.speakers}>
                                <div className={style.g1}>
                                    <div className={style.g11}></div>
                                    <div className={style.g12}></div>
                                    <div className={style.g13}></div>
                                </div>
                                <div className={style.g}></div>
                                <div className={style.g}></div>
                            </div>
                        </div>
                    </div>
                    <div className={style.bottom}>
                        <div className={style.base1}></div>
                        <div className={style.base2}></div>
                        <div className={style.base3}><div>
                        </div>
                        </div>
                        <div className={style.text404}>
                            <div className={style.text4041}>4</div>
                            <div className={style.text4042}>0</div>
                            <div className={style.text4043}>4</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

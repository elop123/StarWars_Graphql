import s from './Footer.module.scss'

const Footer = () =>{
    return(
        <footer>
        <hr className={s.lineStyle} />
        <h2 className={s.titleStyle}>Created by <span>Elena</span></h2>
        <p className={s.pStyle}>Copyrights @2024</p>
        <p className={s.pStyle}>All rights are reserved</p>
        </footer>
    )
}

export default Footer
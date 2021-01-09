import './Styles.css';
import {ReactComponent as YouTubeIcon} from './youtube.svg';
import {ReactComponent as LinkedinIcon} from './linkedin.svg';
import {ReactComponent as InstagramICon} from './instagram.svg';

function Footer(){
    return (
        <footer className = "main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/" target="_new">
                    <YouTubeIcon />
                </a>
                <a href="https://www.linkedin.com/in/heliks-mota-mersenburg-26959918b/" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="instagram.com" target="_new">
                    <InstagramICon />
                </a>
            </div>
        </footer>
    )
}

export default Footer
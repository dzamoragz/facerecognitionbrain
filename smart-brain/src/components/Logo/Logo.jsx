import Tilt from 'react-parallax-tilt';
import './logo.css';
import brain from './brain1.png';


const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" tiltMaxAngleX={55} tiltMaxAngleY={55} style={{ height: 150, width: 150 }}>
                <div className="Tilt-inner pa4">
                    <img alt="logo" src={brain}/>
                </div>
            </Tilt> 
        </div>
    );
}

export default Logo;
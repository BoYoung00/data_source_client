import styles from "../../styleModule/style.module.css";
import profileImg from '../../image/pngwing.com.png';

export default function ProfilePhoto(){
    return(
        <div className={styles.ProfilePhotoTool}>
            <img src={profileImg} className={styles.ProfilePhoto}/>

        </div>
    )
}
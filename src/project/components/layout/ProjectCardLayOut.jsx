import { useEffect, useState } from "react";
import CardUI from "../uI/CardUI";
import styles from "../styles.module.css";

export default function ProjectCardLayOut(){
    const [data, setData] = useState([]);

    const [profile, setProfile] = useState({
        id: 1,
        name: "주동호",
        phoneNumber: "010-7761-8482",
        email: "launcher37@naver.com",
        password: "1234"
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const apiUrl = process.env.REACT_APP_API_URL;

        try {
            const response = await fetch(`${apiUrl}/api/project/${profile.id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const responseData = await response.json();

            const dataArray = Array.isArray(responseData) ? responseData : [responseData];
            setData(dataArray);
            console.log(dataArray)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return(
        <div className={styles.cardLayOutBox}>
            {data.map((item) => (
                <CardUI
                    item={item}
                    key={item.id}
                    name={item.name}
                    comment={item.comment}
                    projectID={item.id}
                    dataBaseName={item.dataBaseName}
                />
            ))}
        </div>
    )
}

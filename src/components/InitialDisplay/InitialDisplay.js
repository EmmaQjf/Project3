import {useState, useEffect} from "react"
import styles from './initialDisplay.module.scss'
import * as itemsAPI from "../../utilities/items-api"

export default function IntialDisplay(){

    const [allClothes, setAllClothes]= useState(null)
    useEffect(() => {
        async function getAllClothes() {
            try {
                const clothes = await itemsAPI.getAll();
                setAllClothes(clothes);
            } catch (error) {
                console.error(error);
            }
        }
        getAllClothes();
    }, []);

   return(
   
       <div className={styles.IntialDisplay}>
         
            <div>
            <img className={styles.banner} src ="https://i.imgur.com/hSaBdwK.png"/>
            </div>

            {
                allClothes && 
                <div className={styles.clothes}>
                    <div >
                    <img src={allClothes[6].img } />
                    </div>
                    <div >
                    <img src={allClothes[3].img }/>
                    </div>
                    <div >
                    <img src={allClothes[13].img }/>
                    </div>
                    <div >
                    <img src={allClothes[11].img }/>
                    </div>
                </div>
            }    
      </div>
    );
}

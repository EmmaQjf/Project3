import styles from './ClotheListItem.module.scss'
export default function ClotheListItem(
    {   cloth,
        setCurrentItem,
        showClothPage,
        setShowClothPage
    }
){   

    return(
        <div className={styles.container}>
            <div key={cloth._id} className={styles.card}>
            
                <img src={cloth.img} className={styles.image}/>
                <h3 className={styles.h3}>{cloth.title} </h3>
                <h3 className={styles.h3}>${cloth.price} </h3>
                
                <button onClick={()=> {setShowClothPage(!showClothPage); setCurrentItem(cloth)}}> More details</button>
             </div>  
        </div>
    )
}
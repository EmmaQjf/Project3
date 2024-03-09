import styles from './ClotheListItem.module.scss'
import {Link} from 'react-router-dom'

export default function ClotheListItem(
    {cloth}
){   

    return(
        <div className={styles.container}>
            <div key={cloth._id} className={styles.card}>
            
                <img src={cloth.img} className={styles.image}/>
                <h3 className={styles.h3}>{cloth.title} </h3>
                <h3 className={styles.h3}>${cloth.price} </h3>
                
                <Link to= {`/ClotheItem/${cloth._id}`}> <button> More details</button></Link>
             </div>  
        </div>
    )
}
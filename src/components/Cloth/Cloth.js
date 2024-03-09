import styles from './Cloth.module.scss'
export default function Clothe(
    {cloth,handleAddToOrder}
){                      
    return(
      <div className={styles.Cloth}>
        <img src={cloth.img} className={styles.image}/>
        <div className={styles.box}>
          <h3>{cloth.title} </h3>
          <div>{cloth.desc} </div>
          <div>${cloth.price} </div>
          <div>{cloth.size} </div>
          <div>{cloth.color} </div>
          <button onClick={() => handleAddToOrder(cloth._id)}>
           ADD
          </button>  
        </div> 
      </div>
    )
}
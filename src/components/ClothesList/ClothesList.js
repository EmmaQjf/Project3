import * as categoriesAPI from '../../utilities/categories-api';
import {useState,useEffect} from 'react'
import ClotheListItem from '../ClotheListItem/ClotheListItem'
import styles from './ClothesList.module.scss'

export default function ClothesList(
    {
    clothes}
){
   
   

        
    return(
        <div className={styles.ClothesList}>
          {
            clothes && clothes.map(cloth => (
                <ClotheListItem
                  key={cloth._id}
                 cloth={cloth}/>
            ))
          }
        </div>
        )
}
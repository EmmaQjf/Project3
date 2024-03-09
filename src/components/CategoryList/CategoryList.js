import styles from './CategoryList.module.scss';
import { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom'
import * as categoriesAPI from '../../utilities/categories-api';

export default function CategoryList(
) {
  
  const [categories, setCategories] = useState([])
  const [activeCat, setActiveCat] = useState('');
  const categoriesRef = useRef([]);

  useEffect(function() {
    async function getAllCategories(){
        try {
            const categories = await categoriesAPI.getAll()
            setCategories(categories)
            categoriesRef.current = categories.map(category => category.name);
            setActiveCat(categoriesRef.current[0]);
        } catch (error) {
            console.error(error);
        }
      
}
    getAllCategories();
}, []);


   const allcategories = categoriesRef.current;

      const cats = allcategories.map(cat =>
        <li
          key={cat}
          className={cat === activeCat ? styles.active : ''}
          // onClick={() => {setCurrentCategory(cat)}}
        > 
        
          <Link to ={`/clothelists/${cat}`}>{cat} </Link>
        </li>
      );

  return (
    <ul className={styles.CategoryList}>
    {cats}
    </ul>
  );
}
import styles from './CategoryList.module.scss';

export default function CategoryList({ allcategories, activeCat, setActiveCat,setShowClothPage}) {
  const cats = allcategories.map(cat =>
    <li
      key={cat}
      className={cat === activeCat ? styles.active : ''}
      // FYI, the below will also work, but will give a warning
      // className={cat === activeCat && 'active'}
      onClick={() => {setActiveCat(cat);setShowClothPage(true)}}
    >
      {cat}
    </li>
  );
  return (
    <ul className={styles.CategoryList}>
      {cats}
    </ul>
  );
}
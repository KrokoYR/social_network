import React from 'react';
import styles from './News.module.css'

const News = () => {
    return (
        <div className={styles.news}>
	        <div className={`${styles.news__search} ${styles.search}`}>
		       <button className={styles.search__button}>
			       <span className={'fa fa-search'}/>Search
		       </button>
		        <button className={styles.search__filter}>
			        <span className={'fa fa-sliders'}/>
		        </button>
	        </div>
        </div>
    )
}

export default News;

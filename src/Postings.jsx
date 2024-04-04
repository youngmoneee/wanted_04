import React from 'react';
import ProductData from './test.json';
import Posting from './Posting';
import styles from './styles.module.css';

const Postings = () => (
  <div className={styles.postings}>
    {ProductData.products.map((prod) => <Posting key={prod.id} product={prod} />)}
  </div>
);
export default Postings;

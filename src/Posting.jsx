import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Posting = ({ product }) => (
  <div className={styles.posting}>
    <Image src={product.image} />
    <div className={styles.filler} />
    <Title title={product.title} />
    <Description description={product.description} />
  </div>
);

const Title = ({ title }) => <div className={styles.postTitle}>{title}</div>;

const Description = ({ description }) => <div className={styles.postDesc}>{description}</div>;
const Image = ({ src }) => <div className={styles.postImg}><img src={src} alt="" /></div>;

Posting.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

Title.propTypes = { title: PropTypes.string.isRequired };
Description.propTypes = { description: PropTypes.string.isRequired };
Image.propTypes = { src: PropTypes.string.isRequired };

export default Posting;

import styles from './LoadingPage.module.scss';
import Spinner from './Spinner';

const LoadingPage = () => {
  return (
    <div className={styles.Loading}>
      <div>
          <Spinner/>
          <div>loading...</div>
      </div>
    </div>
  )
}

export default LoadingPage;
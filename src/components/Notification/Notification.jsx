import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ message }) => {
  return (
    <div>
      <h2 className={styles.title}>{message}</h2>
    </div>
  )
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}
export default Notification;
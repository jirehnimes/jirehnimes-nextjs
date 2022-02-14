import styles from './background-video.module.sass';

const BackgroundVideo = () => {
  return (
    <video 
      autoPlay
      muted
      loop
      className={styles.background_video}
    >
      <source src="/videos/index_bg.mp4" type="video/mp4"/>
    </video>
  );
};

export default BackgroundVideo;

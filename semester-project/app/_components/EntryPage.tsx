import Image from 'next/image';
import styles from './styles.module.css';

const EntryPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/images/split1.jpg"
        alt="Split Background"
        className={styles.backgroundImage}
        priority={true}
        layout="fill"
        objectFit="cover"
      />
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>Nima Splita do Splita</h1>
          <p className={styles.description}></p>
          {/* Koristi običan HTML link za otvaranje Google Maps stranice */}<br></br>
          <a href="https://www.google.com/maps/place/Split/@43.5146524,16.4590873,13z/data=!3m1!4b1!4m6!3m5!1s0x13355dfc6bbcf517:0xa1798ff631b49f98!8m2!3d43.5147118!4d16.4435148!16zL20vMDFnX2sz?entry=ttu" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
            Provjeri svoju udaljenost!
          </a>
        </div>
      </div>
    </div>
  );
};

export default EntryPage;

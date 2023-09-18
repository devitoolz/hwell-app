import styles from '@/styles/header.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['logo-container']}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/logo.png"
            alt="건강증진센터"
            width={40}
            height={40}
            priority={true}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;

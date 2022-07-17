import { GetStaticPaths, GetStaticProps } from 'next';
import styles from './index.module.css';

export interface AboutProps {
  firstname: string;
}

export function About({ firstname }: AboutProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to : {firstname}</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps<AboutProps> = async (context) => {
  return {
    props: {
      firstname: 'Mario!',
    },
  };
};

export default About;

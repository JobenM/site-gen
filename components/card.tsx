import Link from 'next/link'
import { Children } from 'react';
import styles from '../styles/Card.module.css'

interface Props {
    children?: React.ReactNode
    href: string;
}

export const Card: React.FC<Props> = ({ href, children }) =>
    <Link href={href}>
        <a className={styles.container}>
            {children}
        </a>
    </Link>


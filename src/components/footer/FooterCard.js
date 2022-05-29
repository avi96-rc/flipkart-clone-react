import React from 'react';
import styles from './FooterCard.module.css';

function FooterCard({item:cardItems}) {
    console.table(cardItems);

    return (
        <div className={styles['footer-card']}>

            <div className={styles['footer-card-title']}>{cardItems.title}</div>
            <ul>
                {cardItems.items.map(items=><li><a>{items}</a></li>)}
            </ul>

            
        </div>
    );
}

export default FooterCard;
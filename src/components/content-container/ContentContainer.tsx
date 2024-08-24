import styles from './content-container.module.scss';

import React from 'react';
import Main from "../main/Main";

type ContentContainerProps = {
    asideLeft?: React.ReactNode | null;
    asideRight?: React.ReactNode | null;
    main: React.ReactNode;
}
export default function ContentContainer({asideLeft, asideRight, main}: ContentContainerProps) {
    return (
        <div className={styles.contentContainer}>
             {asideLeft}
            <Main>{main}</Main>
            {asideRight}
        </div>
    )
}
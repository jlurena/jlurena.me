import React from 'react';
import Resume from '../../js/components/tabs/resume';
import styles from './printable-resume.module.scss';

export default function PrintableResume() {
  return (
    <div className={styles.container}>
      <Resume showPrintButton={false} />
    </div>
  );
}

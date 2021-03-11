import styles from "./Summary.module.css";

import SummaryItem from "./SummaryItem/SummaryItem";

const Summary = ({ summaries }) => {
  return (
    <section className={styles.summary}>
      {summaries.map(summary => (
        <SummaryItem key={summary.id} summary={summary}/>
      ))}
    </section>
  );
};

export default Summary;

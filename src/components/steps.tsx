import { data } from '@/data/data';
import Step from './Step';

const steps = () => {
  return (
    <>
      <ul>
        {data.map((m, i) => (
          <Step data={m} key={m} />
        ))}
      </ul>
    </>
  );
};

export default steps;

import { data } from '@/data/data';
import Step from './Step';

const steps = ({ query }: { query: string }) => {
  return (
    <>
      <ul>
        {data.map(m => (
          <Step data={m} key={m} query={query} />
        ))}
      </ul>
    </>
  );
};

export default steps;

import Step from './Step';

const steps = ({ query }: { query: string }) => {
  return (
    <>
      <div>focusedItem = {index}</div>
      <ul>
        {data.map((m, i) => (
          <Step data={m} key={m} query={query} />
        ))}
      </ul>
    </>
  );
};

export default steps;

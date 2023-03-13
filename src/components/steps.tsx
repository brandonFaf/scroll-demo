import Step from './Step';

type Props = {
  data: string[];
  value: string;
  index: number;
  foundItems: number[];
};

const steps = ({ index, data }: Props) => {
  return (
    <>
      <div>focusedItem = {index}</div>
      <ul>
        {data.map((m, i) => (
          <Step isFocused={index === i} data={m} key={m} />
        ))}
      </ul>
    </>
  );
};

export default steps;

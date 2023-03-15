type Props = {
  onChange: (value: string) => void;
  value: string;
  index: number;
  onClick: (direction: '⬆️' | '⬇️') => void;
};

const Search = ({ onChange, value, index, onClick }: Props) => {
  return (
    <header>
      <input onChange={e => onChange(e.target.value)} value={value} />
      <button onClick={() => onClick('⬇️')}>⬇️</button>
      <span>{index}</span>
      <button onClick={() => onClick('⬆️')}>⬆️</button>
    </header>
  );
};

export default Search;

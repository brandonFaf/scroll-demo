import Search from '@/components/Search';
import Steps from '@/components/steps';
import { useState } from 'react';

const Index = () => {
  const [query, setQuery] = useState('');
  return (
    <>
      <div style={{ position: 'sticky', top: 0 }}>
        <Search query={query} setQuery={setQuery} />
      </div>
      <Steps query={query} />
    </>
  );
};

export default Index;

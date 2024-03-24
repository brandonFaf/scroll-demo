import Search from '@/components/Search';
import Steps from '@/components/steps';

const Index = () => {
  return (
    <>
      <div style={{ position: 'sticky', top: 0 }}>
        <Search />
      </div>
      <Steps />
    </>
  );
};

export default Index;

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { Layout } from '../components/layout/Layout';
import React, { useEffect, useState } from 'react';
import calc from './math/calculation';
import { Button } from '../components/button/Button';

function App(){
  const [result, setResult] = useState('');
  const [op, setOp] = useState([]);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (!Number(result?.charAt(result?.length - 2))) {
      const operand = result?.charAt(result?.length - 1);

      setResult(result?.slice(0, -2) + operand);
      setOp(op?.slice(0, -1));
    }
  }, [check]);

  const handleOpClick = () => {

    /*
    setResult(result.concat(e?.target?.name));
    setOp((o) => [...o, result?.length]);
    setCheck(!check);
    */
  };

  const handleNumClick = (e: React.ReactElement) => {
   // setResult(result.concat(e?.target?.name));
  };

  const handleClear = () => {
    setResult('');
    setOp([]);
  };

  const handleBack = () => {
    setResult(result?.slice(0, -1));
    setOp(op?.slice(0, -1));
  };

  const handleCalculate = () => {
   // const res: number = calc(result, op);
   // setResult(String(res));
   // setOp([]);
  };


  return (
    <Layout>
      <Head>
        <title>Calculator</title>
      </Head>
    <div>
      <textarea value={result} readOnly />

      <div>

      </div>
    </div>
    </Layout>
  );
};

export default App;

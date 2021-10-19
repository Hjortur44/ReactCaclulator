import Head from 'next/head';
import { Layout } from '../components/layout/Layout';
import React, { useState } from 'react';
import { Display } from '../components/display/Display';
import { NumberPad } from '../components/numberPad/NumberPad';

function App(){
  const [result, setResult] = useState<string>("");

  function buttonClick(value: string) {
    setResult(value);
 }

  return (
    <Layout>
      <Head>
        <title>Calculator</title>
      </Head>
    <div>
      <Display value={result} />
      <NumberPad value={buttonClick} />
    </div>
    </Layout>
  );
};

export default App;
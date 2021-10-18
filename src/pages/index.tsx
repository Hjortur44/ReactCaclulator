import Head from 'next/head';
import { Layout } from '../components/layout/Layout';
import React, { useState } from 'react';
import { TextArea } from '../components/textarea/TextArea';
import { NumberPad } from '../components/numberPad/NumberPad';

function App(){ 
  const [result, setResult] = useState<string>("");

  function buttonClick(id: string) {
    setResult(id);
 }

  return (
    <Layout>
      <Head>
        <title>Calculator</title>
      </Head>
    <div>
      <TextArea value={result} />
      <NumberPad onClick={buttonClick} />
    </div>
    </Layout>
  );
};

export default App;
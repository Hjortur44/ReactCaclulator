import Head from 'next/head';
import { Layout } from '../components/layout/Layout';
import React, { useEffect, useState } from 'react';
import { number, operand, back, calculate, print } from '../math/equation';
import { Button } from '../components/button/Button';
import { TextArea } from '../components/textarea/TextArea';

function App(){
  const [result, setResult] = useState<string>('');
  const [check, setCheck] = useState<boolean>(false);

  const numButtons: Array<string> = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  const opButtons: Array<string> = ["*", "/", "+", "-"];
  const backButton: string = "Back";
  const clearButton: string = "Clear";
  const equalsButton: string = "=";
  
  useEffect(() => {
    setResult(print());
  }, [check]);

  const handleNumberClick = (e: any) => {  
    number(e.target.name);
    setCheck(!check);
  };

  const handleOperandClick = (e: any) => {
    operand(e.target.name);
    setCheck(!check);
  };

  const handleBackClick = () => {
    back();
    setCheck(!check); 
  };

  const handleCalculateClick = () => {
    setResult(calculate());
  };

  return (
    <Layout>
      <Head>
        <title>Calculator</title>
      </Head>
    <div>
      <TextArea value={result} />

      {numButtons.map((button, i) => (
        <Button key={i} name={button} onClick={handleNumberClick} />
      ))}

      {opButtons.map((button, i) => (
        <Button key={i} name={button} onClick={handleOperandClick} />
      ))}

      <Button name={backButton} onClick={handleBackClick} />
      

      <Button name={equalsButton} onClick={handleCalculateClick} />  
    </div>
    </Layout>
  );
};

export default App;
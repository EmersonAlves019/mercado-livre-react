import React from 'react';

// import { Container } from './styles';

const Teste: React.FC = ({ children, teste }: any) => {
  return (
    <div>
      <h1>Teste</h1>
      {teste}
      {children}
    </div>
  );
};

export default Teste;

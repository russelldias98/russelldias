import React from 'react';

interface Props {
  text: string;
}

const H1: React.FC<Props> = ({ text }) => {
  return (
    <h1
      style={{
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 900,
        fontSize: '46px',
        lineHeight: '1.2',
        color: '#333',
        whiteSpace: 'pre',
        margin: 0,
        marginBottom: '20px',
      }}
    >
      {text}
    </h1>
  );
};

export default H1;

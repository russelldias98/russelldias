import React from 'react';

interface Props {
  text: string;
}

const BodyText: React.FC<Props> = ({ text }) => {
  return (
    <p
      style={{
        fontFamily: 'Inter',
        fontWeight: 300,
        fontSize: '20px',
        lineHeight: '36px',
        color: '#333',
        whiteSpace: 'pre',
        margin: 0,
        marginBottom: '60px',
      }}
    >
      {text}
    </p>
  );
};

export default BodyText;

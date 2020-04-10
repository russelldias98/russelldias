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
        fontSize: '18px',
        lineHeight: '32px',
        color: 'white',
        whiteSpace: 'pre',
        margin: 0,
        marginBottom: '40px',
      }}
    >
      {text}
    </p>
  );
};

export default BodyText;

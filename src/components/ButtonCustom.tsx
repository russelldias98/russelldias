import React from 'react';
import { Button } from 'antd';

interface Props {
  text: string;
  onClick: () => void;
}

const ButtonCustom: React.FC<Props> = ({ text, ...props }) => {
  return (
    <Button
      {...props}
      style={{
        width: '300px',
        height: '70px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '18px',
        lineHeight: '34px',
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#0045ff',
        borderRadius: '16px',
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonCustom;

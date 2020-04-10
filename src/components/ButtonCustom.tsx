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
        width: '163px',
        height: '60px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '18px',
        lineHeight: '34px',
        textAlign: 'center',
        color: 'black',
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonCustom;

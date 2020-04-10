import React from 'react';
import { Input, Typography } from 'antd';
import { ErrorMessage } from 'formik';
const { Text } = Typography;
const { TextArea } = Input;

interface Props {
  handleBlur: any;
  handleChange: any;
  typeOf: string;
  nameFormik: string;
  value: string;
  label: string;
  placeholder: string;
}

const InputLabel: React.FC<Props> = ({
  handleBlur,
  handleChange,
  typeOf,
  nameFormik,
  value,
  label,
  placeholder,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Text style={{ marginBottom: '5px' }}>{label}</Text>
        <ErrorMessage name={nameFormik}>{(msg) => <Text type="danger">{msg}</Text>}</ErrorMessage>
      </div>
      {nameFormik === 'query' ? (
        <TextArea
          style={{ height: 130 }}
          typeof={typeOf}
          name={nameFormik}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          placeholder={placeholder}
        />
      ) : (
        <Input
          typeof={typeOf}
          name={nameFormik}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default InputLabel;

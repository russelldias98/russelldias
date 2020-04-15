import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import '../styles.less';
import Header from '../src/components/Header';
import H1 from '../src/components/H1';
import InputLabel from '../src/components/InputLabel';
import * as Yup from 'yup';
import * as mutations from '../src/graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
import { v4 } from 'uuid';
import { Formik, Form } from 'formik';
import { Card, Button } from 'antd';

interface Values {
  name: string;
  email: string;
  query: string;
}

export default function index() {
  //test
  const [client, SetClient] = useState<boolean>(false);
  const [put, SetPut] = useState<boolean>(null);

  useEffect(() => {
    SetClient(true);
  }, []);

  const QuerySchema = Yup.object().shape({
    name: Yup.string().required('Please enter your name'),
    email: Yup.string().email('Please enter a valid email').required('Please enter your email'),
    query: Yup.string().required('Please enter your query'),
  });

  return (
    <>
      <Head>
        <title>Contact Russell Dias</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container">
        <Header />
        <div className="containerDivider">
          <div className="contentContainer">
            <H1 text={`Get in touch!`} />
            <Card className="cardContainer">
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  query: '',
                }}
                validationSchema={QuerySchema}
                onSubmit={async ({ name, email, query }: Values, { setSubmitting }) => {
                  const postData = await API.graphql(
                    graphqlOperation(mutations.createContact, {
                      input: {
                        id: v4(),
                        name,
                        email,
                        query,
                      },
                    }),
                  );
                  if (postData.data.createContact) {
                    setSubmitting(false);
                    SetPut(true);
                  }
                  if (!postData.data.createContact) {
                    setSubmitting(false);
                    SetPut(false);
                  }
                }}
              >
                {({ values, handleChange, handleBlur, isSubmitting }) => (
                  <Form>
                    <InputLabel
                      label="Enter Name"
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      typeOf={'text'}
                      nameFormik="name"
                      value={values.name}
                      placeholder={'Enter name'}
                    />
                    <InputLabel
                      label="Enter Email"
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      typeOf={'text'}
                      nameFormik="email"
                      value={values.email}
                      placeholder={'Enter email'}
                    />
                    <InputLabel
                      label="Enter Query"
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      typeOf={'text'}
                      nameFormik="query"
                      value={values.query}
                      placeholder={'Enter query'}
                    />
                    <Button
                      size="large"
                      style={{
                        marginTop: '15px',
                      }}
                      block
                      type="primary"
                      htmlType="submit"
                      loading={isSubmitting}
                    >
                      Submit
                    </Button>
                  </Form>
                )}
              </Formik>
            </Card>
          </div>
        </div>
        <div className="footerContainer">© 2020. Russell Dias. All rights reserved</div>
      </div>
    </>
  );
}

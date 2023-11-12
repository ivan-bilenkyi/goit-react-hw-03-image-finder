import { TailSpin } from 'react-loader-spinner';
import { Layout } from 'components/Layout';

export const Loader = () => (
  <Layout>
    <TailSpin
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{
        height: '89vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      wrapperClass="LoadreWrap"
      visible={true}
      position="absolute"
    />
  </Layout>
);

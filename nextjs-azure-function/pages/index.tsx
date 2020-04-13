import { NextPage } from 'next';
import { PHASE_PRODUCTION_BUILD} from 'next/constants'
import config from 'next/dist/next-server/server/config';



const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <h1>Hello world! - user agent: {PHASE_PRODUCTION_BUILD}</h1>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home;
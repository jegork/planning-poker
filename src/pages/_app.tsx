import type { AppType } from 'next/app';
import { trpc } from 'utils/trpc';

const MyApp: AppType<Record<string, never>> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

MyApp.getInitialProps = async ({ ctx }) => {
  return {};
};

export default trpc.withTRPC(MyApp);

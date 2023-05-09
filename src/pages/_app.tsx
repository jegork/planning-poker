import type { AppType } from 'next/app';
import { trpc } from 'utils/trpc';
import { ChakraProvider } from '@chakra-ui/react';

const MyApp: AppType<Record<string, never>> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

// MyApp.getInitialProps = async ({ ctx }) => {
//   return {};
// };

export default trpc.withTRPC(MyApp);

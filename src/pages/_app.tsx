import StyledGlobal from '../globalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StyledGlobal />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<Head>
				<title>React Avançado - Boilerplate</title>
				<link rel="shortcut icon" href="/img/icon-512.png"/>
				<link rel="apple-touch-icon icon" href="/img/icon-512.png" />
				<link rel="manifest" href="/maifest.json"/>
				<meta
					name="description"
					content="A simple project starter to work with Typescript, React, NextJS and
          Styled Components"
				/>
			</Head>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	);
}

export default App;

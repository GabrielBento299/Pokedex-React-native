import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './src/styles/theme/default';
import Routes from './src/Routes';
 
export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar 
        backgroundColor='#F2CB55'
      />
      <Routes />
    </ThemeProvider>
  );
}


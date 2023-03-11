import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './src/styles/theme/default';
import Routes from './src/Routes';
 
export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor='transparent'
        translucent
      />
      <Routes />
    </ThemeProvider>
  );
}


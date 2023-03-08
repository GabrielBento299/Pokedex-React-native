import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './src/styles/theme/default';
import Welcome from './src/pages/Welcome';
import Home from './src/pages/Home';
 
export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        {/* <Welcome /> */}
        <Home />
    </ThemeProvider>
  );
}


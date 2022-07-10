import { Provider } from 'react-redux';
import Layout from './components/Layout';
import Translation from "./pages/Translation";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Translation />
      </Layout>
    </Provider>
  );
}

export default App;

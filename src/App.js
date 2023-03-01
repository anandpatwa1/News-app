import { NewsProvider } from "./context/NewsContext";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <NewsProvider>
    <MainPage/>
    </NewsProvider>
  );
}

export default App;

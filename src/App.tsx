import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <MainContent>
        <Introduction />
        <Projects />
      </MainContent>
    </>
  );
}

export default App;

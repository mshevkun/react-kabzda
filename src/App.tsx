import "./App.css";
import { Rating } from "./components/Rating";
import { Accordion } from "./components/Accordion";

function App() {
  return (
    <div>
      <AppTitle title={"AppTitle"} />
      <AppTitle title={"AppTitle2"} />
      <Rating value={3} />
      <Accordion titleValue={"Accordion Title"} collapsed={true} />
      <Accordion titleValue={"Accordion Title2"} collapsed={false}/>
      <Rating value={4} />
    </div>
  );
}

type AppTitlePropsType = { title: string };

function AppTitle({ title }: AppTitlePropsType) {
  return <h1>{title}</h1>;
}

export default App;

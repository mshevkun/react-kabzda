import "./App.css";
import { UncontrolledRating } from "./components/Rating";
import { UncontrolledAccordion } from "./components/Accordion";

function App() {
  return (
    <div>
      <AppTitle title={"AppTitle"} />
      <AppTitle title={"AppTitle2"} />

      <UncontrolledAccordion titleValue={"Accordion Title"} />
      <UncontrolledAccordion titleValue={"Accordion Title2"} />
      <UncontrolledRating />
      <UncontrolledRating />
      <UncontrolledRating />
    </div>
  );
}

type AppTitlePropsType = { title: string };

function AppTitle({ title }: AppTitlePropsType) {
  return <h1>{title}</h1>;
}

export default App;

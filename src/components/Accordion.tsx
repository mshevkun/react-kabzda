import { useState } from "react";

type AccordionPropsType = { titleValue: string };

export function UncontrolledAccordion({ titleValue }: AccordionPropsType) {
  let [collapse, setCollapse] = useState(false);
  return (
    <>
      <AccordionTitle
        title={titleValue}
        changeCollapse={() => setCollapse(!collapse)}
      />
      {collapse && <AccordionBody />}
    </>
  );
}

type AccordionTitlePropsType = { title: string; changeCollapse: () => void };

function AccordionTitle({ title, changeCollapse }: AccordionTitlePropsType) {
  return (
    <h3
      onClick={() => {
        changeCollapse();
      }}
    >
      {title}
    </h3>
  );
}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}

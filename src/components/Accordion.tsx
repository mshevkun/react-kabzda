type AccordionPropsType = { titleValue: string; collapsed: boolean };

export function Accordion({ titleValue, collapsed }: AccordionPropsType) {
  return (
    <>
      <AccordionTitle title={titleValue} />
      {collapsed ? <AccordionBody /> : null}
    </>
  );
}

type AccordionTitlePropsType = { title: string };

function AccordionTitle({ title }: AccordionTitlePropsType) {
  return <h3>{title}</h3>;
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

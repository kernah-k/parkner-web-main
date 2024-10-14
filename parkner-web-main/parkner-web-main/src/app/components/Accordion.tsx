import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Accordions = ({ questions }: { questions: any }) => {
  return (
    <Accordion>
      {questions.map((question: any, i: any) => (
        <AccordionItem key={i} style={{ marginBottom: "20px" }}>
          <AccordionItemHeading>
            <AccordionItemButton style={styles.AccordianHeading}>
              {question.question}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel style={styles.AccordianPane}>
            {question.ans}
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
export default Accordions;

const styles = {
  AccordianHeading: {
    fontSize: "18px",
    fontFamily: "'Roboto', sans-serif",
    color: "background_primary",
    cursor: "pointer",
    transition: "0.3s ease",
  },
  AccordianPane: {
    fontSize: "15px",
    marginTop: "10px",
    fontFamily: "'Poppins', sans-serif",
  },
};

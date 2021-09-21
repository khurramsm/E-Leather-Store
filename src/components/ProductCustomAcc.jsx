import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

const ProductCustomAcc = ({ accTitle }) => {
  return (
    <Accordion className="customizeProductButton">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="text-light" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className="accordionHeader"
      >
        <Typography className="text-light">{accTitle}</Typography>
      </AccordionSummary>
      <AccordionDetails className="bg-light">
        <div className="container bg-primary">
          <div className="row p-2 bg-secondary">
            <div className="col-md-12 p-3 bg-warning"></div>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default ProductCustomAcc;

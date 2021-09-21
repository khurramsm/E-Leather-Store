import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

const LeatherTypeAcc = () => {
  return (
    <Accordion className="customizeProductButton">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="text-light" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className="accordionHeader"
      >
        <Typography className="text-light">
          Select Leather Type <span className="text-success">(Free)</span>
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4 p-0 mt-2">
              <input type="radio" className="m-1" />
              Suitable Leather
            </div>
            <div className="col-md-4 p-0 mt-2">
              <input type="radio" className="m-1" />
              Sheep Leather
            </div>
            <div className="col-md-4 p-0 mt-2">
              <input type="radio" className="m-1" />
              Cow Leather
            </div>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default LeatherTypeAcc;

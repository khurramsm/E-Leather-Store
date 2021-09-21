import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

const HardwareColorAcc = () => {
  return (
    <Accordion className="customizeProductButton">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="text-light" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className="accordionHeader"
      >
        <Typography className="text-light">
          Select Hardware Color <span className="text-success">(Free)</span>
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-2 p-0 ">
              <input type="radio" className="m-1" />
              No Changes (Same as in the picture)
            </div>
            <br />
            <br />
            <div className="col-md-2 p-0 ">
              <input type="radio" className="m-1" />
              Antique
            </div>
            <div className="col-md-2 p-0 ">
              <input type="radio" className="m-1" />
              Black
            </div>
            <div className="col-md-2 p-0 ">
              <input type="radio" className="m-1" />
              Gold
            </div>
            <div className="col-md-2 p-0 ">
              <input type="radio" className="m-1" />
              Silver
            </div>
            <div className="col-md-2 p-0 ">
              <input type="radio" className="m-1" />
              Bronze
            </div>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default HardwareColorAcc;

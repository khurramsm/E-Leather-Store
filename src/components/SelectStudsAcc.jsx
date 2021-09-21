import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

const SelectStudsAcc = () => {
  return (
    <Accordion className="customizeProductButton">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="text-light" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className="accordionHeader"
      >
        <Typography className="text-light">
          Select Studs <span className="text-success">(+$60.00)</span>
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 p-0 mt-2">
              <input type="radio" className="m-1" />
              No Changes (Same as in the picture)
            </div>
            <br />
            <br />
            <div className="col-md-2 p-0 ">
              <input
                style={{
                  padding: ".5rem",
                  paddingLeft: "0",
                  border: "none",
                  borderBottom: "1px solid #000",
                  outline: "none",
                  background: "transparent",
                  width: "100%",
                }}
                type="text"
                placeholder="Enter Studs"
                className="m-1"
              />
            </div>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default SelectStudsAcc;

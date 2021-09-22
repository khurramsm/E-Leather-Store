import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

const LeatherTypeAcc = ({ leatherType, setLeatherType }) => {
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
              <input
                value="Suitable Leather"
                onChange={(e) => setLeatherType(e.target.value)}
                type="radio"
                className="m-1"
                checked={leatherType === "Suitable Leather"}
              />
              Suitable Leather
            </div>
            <div className="col-md-4 p-0 mt-2">
              <input
                value="Sheep Leather"
                onChange={(e) => setLeatherType(e.target.value)}
                type="radio"
                className="m-1"
                checked={leatherType === "Sheep Leather"}
              />
              Sheep Leather
            </div>
            <div className="col-md-4 p-0 mt-2">
              <input
                value="Cow Leather"
                onChange={(e) => setLeatherType(e.target.value)}
                type="radio"
                className="m-1"
                checked={leatherType === "Cow Leather"}
              />
              Cow Leather
            </div>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default LeatherTypeAcc;

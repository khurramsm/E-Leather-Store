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
            <div className="col-md-4 p-2 mt-2 leather-type">
              <input
                value="Suitable Leather"
                onChange={(e) => setLeatherType(e.target.value)}
                type="radio"
                className="m-1"
                checked={leatherType === "Suitable Leather"}
              />
              Suitable Leather
              <br />
              <small>
                We will use whichever leather is suitable for the making of this
                jacket.
              </small>
            </div>
            <div className="col-md-4 p-2 mt-2 leather-type">
              <input
                value="Sheep Leather"
                onChange={(e) => setLeatherType(e.target.value)}
                type="radio"
                className="m-1"
                checked={leatherType === "Sheep Leather"}
              />
              Sheep Leather
              <br />
              <small>
                It is a soft leather and is usually used to make fashion jacket.
                We use high Quality sheep leather by selecting the best hides
                available.
              </small>
            </div>
            <div className="col-md-4 p-2 mt-2 leather-type">
              <input
                value="Cow Leather"
                onChange={(e) => setLeatherType(e.target.value)}
                type="radio"
                className="m-1"
                checked={leatherType === "Cow Leather"}
              />
              Cow Leather
              <br />
              <small>
                It is strong and long lasting leather. These robust
                characteristics makes it suitable for biker or motorcycle
                jacket.
              </small>
            </div>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default LeatherTypeAcc;

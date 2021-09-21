import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

const LiningColorAcc = () => {
  return (
    <Accordion className="customizeProductButton">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="text-light" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className="accordionHeader"
      >
        <Typography className="text-light">
          Select Lining Color <span className="text-success">(Free)</span>
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 p-0  mt-2">
              <input type="radio" className="m-1" />
              No Changes (Same as in the picture)
            </div>
            <br />
            <br />
            <div className="col-md-2 p-0 ">
              <input type="radio" className="m-1" />
              Pink
            </div>
            <div className="col-md-2 p-0 ">
              <input type="radio" className="m-1" />
              Kelly Green
            </div>
            <div className="col-md-2 p-0 ">
              <input type="radio" className="m-1" />
              Purple
            </div>
            <div className="col-md-2 p-0 ">
              <input type="radio" className="m-1" />
              Quilted
            </div>
            <div className="col-md-2 p-0 ">
              <input type="radio" className="m-1" />
              White
            </div>
            <div className="col-md-2 p-0 ">
              <input type="radio" className="m-1" />
              Red
            </div>
            <div className="col-md-2 p-0 ">
              <input type="radio" className="m-1" />
              Navy Blue
            </div>
            <div className="col-md-2 p-0 ">
              <input type="radio" className="m-1" />
              Brown
            </div>
            <div className="col-md-2 p-0 ">
              <input type="radio" className="m-1" />
              Orange
            </div>
            <div className="col-md-2 p-0 ">
              {" "}
              <input type="radio" className="m-1" />
              Maroon Red
            </div>

            <div className="col-md-2 p-0 ">
              <input type="radio" className="m-1" />
              Royal Blue
            </div>
            <div className="col-md-2 p-0 ">
              <input type="radio" className="m-1" />
              Light Blue
            </div>
            <div className="col-md-2 p-0 ">
              <input type="radio" className="m-1" />
              Blue Check
            </div>
            <div className="col-md-3 p-0 ">
              <input type="radio" className="m-1" />
              Red/Yellow Check
            </div>
            <div className="col-md-3 p-0 ">
              <input type="radio" className="m-1" />
              Green/Black Check
            </div>
            <div className="col-md-3 p-0 ">
              <input type="radio" className="m-1" />
              Red/Green Check
            </div>
            <div className="col-md-2 p-0 ">
              <input type="radio" className="m-1" />
              Red Check
            </div>
            <div className="col-md-2 p-0 ">
              <input type="radio" className="m-1" />
              Black
            </div>
            <div className="col-md-2 p-0 ">
              <input type="radio" className="m-1" />
              Hunter Green
            </div>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default LiningColorAcc;

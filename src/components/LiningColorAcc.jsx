import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

const LiningColorAcc = ({liningColor, setLiningColor}) => {
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
              <input
                value="No Changes"
                onChange={(e) => setLiningColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={liningColor === "No Changes"}
              />
              No Changes (Same as in the picture)
            </div>
            <br />
            <br />
            <div className="col-md-2 p-0 ">
              <input
                value="Pink"
                onChange={(e) => setLiningColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={liningColor === "Pink"}
              />
              Pink
            </div>
            <div className="col-md-2 p-0 ">
              <input
                value="Kelly Green"
                onChange={(e) => setLiningColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={liningColor === "Kelly Green"}
              />
              Kelly Green
            </div>
            <div className="col-md-2 p-0 ">
              <input
                value="Purple"
                onChange={(e) => setLiningColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={liningColor === "Purple"}
              />
              Purple
            </div>
            <div className="col-md-2 p-0 ">
              <input
                value="Quilted"
                onChange={(e) => setLiningColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={liningColor === "Quilted"}
              />
              Quilted
            </div>
            <div className="col-md-2 p-0 ">
              <input
                value="White"
                onChange={(e) => setLiningColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={liningColor === "White"}
              />
              White
            </div>
            <div className="col-md-2 p-0 ">
              <input
                value="Red"
                onChange={(e) => setLiningColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={liningColor === "Red"}
              />
              Red
            </div>
            <div className="col-md-2 p-0 ">
              <input
                value="Navy Blue"
                onChange={(e) => setLiningColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={liningColor === "Navy Blue"}
              />
              Navy Blue
            </div>
            <div className="col-md-2 p-0 ">
              <input
                value="Brown"
                onChange={(e) => setLiningColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={liningColor === "Brown"}
              />
              Brown
            </div>
            <div className="col-md-2 p-0 ">
              <input
                value="orange"
                onChange={(e) => setLiningColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={liningColor === "orange"}
              />
              Orange
            </div>
            <div className="col-md-2 p-0 ">
              {" "}
              <input
                value="Maroon Red"
                onChange={(e) => setLiningColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={liningColor === "Maroon Red"}
              />
              Maroon Red
            </div>

            <div className="col-md-2 p-0 ">
              <input
                value="Royal Blue"
                onChange={(e) => setLiningColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={liningColor === "Royal Blue"}
              />
              Royal Blue
            </div>
            <div className="col-md-2 p-0 ">
              <input
                value="Light Blue"
                onChange={(e) => setLiningColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={liningColor === "Light Blue"}
              />
              Light Blue
            </div>
            <div className="col-md-2 p-0 ">
              <input
                value="Blue Check"
                onChange={(e) => setLiningColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={liningColor === "Blue Check"}
              />
              Blue Check
            </div>
            <div className="col-md-3 p-0 ">
              <input
                value="Red/Yellow Check"
                onChange={(e) => setLiningColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={liningColor === "Red/Yellow Check"}
              />
              Red/Yellow Check
            </div>
            <div className="col-md-3 p-0 ">
              <input
                value="Green/Black Check"
                onChange={(e) => setLiningColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={liningColor === "Green/Black Check"}
              />
              Green/Black Check
            </div>
            <div className="col-md-3 p-0 ">
              <input
                value="Red/Green Check"
                onChange={(e) => setLiningColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={liningColor === "Red/Green Check"}
              />
              Red/Green Check
            </div>
            <div className="col-md-2 p-0 ">
              <input
                value="Red Check"
                onChange={(e) => setLiningColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={liningColor === "Red Check"}
              />
              Red Check
            </div>
            <div className="col-md-2 p-0 ">
              <input
                value="Black"
                onChange={(e) => setLiningColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={liningColor === "Black"}
              />
              Black
            </div>
            <div className="col-md-2 p-0 ">
              <input
                value="Hunter Green"
                onChange={(e) => setLiningColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={liningColor === "Hunter Green"}
              />
              Hunter Green
            </div>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default LiningColorAcc;

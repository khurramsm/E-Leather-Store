import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
const leatherColorAcc = ({ leatherColor, setLeatherColor }) => {
  return (
    <Accordion className="customizeProductButton">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="text-light" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className="accordionHeader"
      >
        <Typography className="text-light">
          Select Leather Color <span className="text-success">(Free)</span>
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 p-0  mt-2">
              <input
                value="No Changes"
                onChange={(e) => setLeatherColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={leatherColor === "No Changes"}
              />
              No Changes (Same as in the picture)
            </div>
            <br />
            <br />
            <div className="col-md-2 p-0 ">
              <input
                value="Pink"
                onChange={(e) => setLeatherColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={leatherColor === "Pink"}
              />
              Pink
            </div>
            <div className="col-md-2 p-0 ">
              <input
                value="Reddish Brown"
                onChange={(e) => setLeatherColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={leatherColor === "Reddish Brown"}
              />
              Reddish Brown
            </div>
            <div className="col-md-2 p-0 ">
              <input
                value="Purple"
                onChange={(e) => setLeatherColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={leatherColor === "Purple"}
              />
              Purple
            </div>
            <div className="col-md-2 p-0 ">
              <input
                value="Yellow"
                onChange={(e) => setLeatherColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={leatherColor === "Yellow"}
              />
              Yellow
            </div>
            <div className="col-md-2 p-0 ">
              <input
                value="White"
                onChange={(e) => setLeatherColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={leatherColor === "White"}
              />
              White
            </div>
            <div className="col-md-2 p-0 ">
              <input
                value="Red"
                onChange={(e) => setLeatherColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={leatherColor === "Red"}
              />
              Red
            </div>
            <div className="col-md-2 p-0 ">
              <input
                value="Dark Purple"
                onChange={(e) => setLeatherColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={leatherColor === "Dark Purple"}
              />
              Dark Purple
            </div>
            <div className="col-md-2 p-0 ">
              <input
                value="Parrot Green"
                onChange={(e) => setLeatherColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={leatherColor === "Parrot Green"}
              />
              Parrot Green
            </div>
            <div className="col-md-2 p-0 ">
              <input
                value="Olive Green"
                onChange={(e) => setLeatherColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={leatherColor === "Olive Green"}
              />
              Olive Green
            </div>
            <div className="col-md-2 p-0 ">
              <input
                value="Navy Blue"
                onChange={(e) => setLeatherColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={leatherColor === "Navy Blue"}
              />
              Navy Blue
            </div>
            <div className="col-md-2 p-0 ">
              <input
                value="Brown"
                onChange={(e) => setLeatherColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={leatherColor === "Brown"}
              />
              Brown
            </div>
            <div className="col-md-2 p-0 ">
              <input
                value="orange"
                onChange={(e) => setLeatherColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={leatherColor === "orange"}
              />
              Orange
            </div>
            <div className="col-md-2 p-0 ">
              {" "}
              <input
                value="Maroon Red"
                onChange={(e) => setLeatherColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={leatherColor === "Maroon Red"}
              />
              Maroon Red
            </div>
            <div className="col-md-2 p-0 ">
              <input
                value="Light Green"
                onChange={(e) => setLeatherColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={leatherColor === "Light Green"}
              />
              Light Green
            </div>
            <div className="col-md-2 p-0 ">
              <input
                value="Gray"
                onChange={(e) => setLeatherColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={leatherColor === "Gray"}
              />
              Gray
            </div>
            <div className="col-md-2 p-0 ">
              <input
                value="Blue"
                onChange={(e) => setLeatherColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={leatherColor === "Blue"}
              />
              Blue
            </div>
            <div className="col-md-2 p-0 ">
              <input
                value="Black"
                onChange={(e) => setLeatherColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={leatherColor === "Black"}
              />
              Black
            </div>
            <div className="col-md-2 p-0 ">
              <input
                value="Green"
                onChange={(e) => setLeatherColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={leatherColor === "Green"}
              />
              Green
            </div>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default leatherColorAcc;

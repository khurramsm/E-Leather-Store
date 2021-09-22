import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

const SelectStudsAcc = ({
  studsType,
  setStudsType,
  productPrice,
  setProductPrice,
}) => {
  if (studsType === "" || studsType === "No Changes") {
    setProductPrice(220);
  } else {
    setProductPrice(280);
  }

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
              <input
                type="radio"
                className="m-1"
                value="No Changes"
                checked={studsType === "No Changes"}
                onChange={(e) => setStudsType(e.target.value)}
              />
              No Changes (Same as in the picture)
            </div>
            <br />
            <br />
            <div className="col-md-2 p-0">
              <input
                value="Black Spikes"
                onChange={(e) => setStudsType(e.target.value)}
                type="radio"
                className="m-1"
                checked={studsType === "Black Spikes"}
              />
              Black Spikes
            </div>
            <div className="col-md-2 p-0">
              <input
                value="Silver Spikes"
                onChange={(e) => setStudsType(e.target.value)}
                type="radio"
                className="m-1"
                checked={studsType === "Silver Spikes"}
              />
              Silver Spikes
            </div>
            <div className="col-md-2 p-0">
              <input
                value="Gold Spikes"
                onChange={(e) => setStudsType(e.target.value)}
                type="radio"
                className="m-1"
                checked={studsType === "Gold Spikes"}
              />
              Gold Spikes
            </div>
            <div className="col-md-2 p-0">
              <input
                value="Bronze Spikes"
                onChange={(e) => setStudsType(e.target.value)}
                type="radio"
                className="m-1"
                checked={studsType === "Bronze Spikes"}
              />
              Bronze Spikes
            </div>
            <div className="col-md-2 p-0">
              <input
                value="Gold Shark Fins"
                onChange={(e) => setStudsType(e.target.value)}
                type="radio"
                className="m-1"
                checked={studsType === "Gold Shark Fins"}
              />
              Gold Shark Fins
            </div>
            <div className="col-md-2 p-0">
              <input
                value="Black Shark Fins"
                onChange={(e) => setStudsType(e.target.value)}
                type="radio"
                className="m-1"
                checked={studsType === "Black Shark Fins"}
              />
              Black Shark Fins
            </div>
            <div className="col-md-2 p-0">
              <input
                value="Skull"
                onChange={(e) => setStudsType(e.target.value)}
                type="radio"
                className="m-1"
                checked={studsType === "Skull"}
              />
              Skull
            </div>

            <div className="col-md-2 p-0">
              <input
                value="Silver Pyramids"
                onChange={(e) => setStudsType(e.target.value)}
                type="radio"
                className="m-1"
                checked={studsType === "Silver Pyramids"}
              />
              Silver Pyramids
            </div>
            <div className="col-md-2 p-0">
              <input
                value="Black Pyramids"
                onChange={(e) => setStudsType(e.target.value)}
                type="radio"
                className="m-1"
                checked={studsType === "Black Pyramids"}
              />
              Black Pyramids
            </div>

            <div className="col-md-2 p-0">
              <input
                value="Silver Stars"
                onChange={(e) => setStudsType(e.target.value)}
                type="radio"
                className="m-1"
                checked={studsType === "Silver Stars"}
              />
              Silver Stars
            </div>
            <div className="col-md-2 p-0">
              <input
                value="Silver Alphabets"
                onChange={(e) => setStudsType(e.target.value)}
                type="radio"
                className="m-1"
                checked={studsType === "Silver Alphabets"}
              />
              Silver Alphabets
            </div>

            <div className="col-md-3 p-0">
              <input
                value="Tall Silver Tree Spikes"
                onChange={(e) => setStudsType(e.target.value)}
                type="radio"
                className="m-1"
                checked={studsType === "Tall Silver Tree Spikes"}
              />
              Tall Silver Tree Spikes
            </div>
            <div className="col-md-3 p-0">
              <input
                value="Short Silver Tree Spikes"
                onChange={(e) => setStudsType(e.target.value)}
                type="radio"
                className="m-1"
                checked={studsType === "Short Silver Tree Spikes"}
              />
              Short Silver Tree Spikes
            </div>
            <div className="col-md-3 p-0">
              <input
                value="Silver Mushroom Spikes"
                onChange={(e) => setStudsType(e.target.value)}
                type="radio"
                className="m-1"
                checked={studsType === "Silver Mushroom Spikes"}
              />
              Silver Mushroom Spikes
            </div>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default SelectStudsAcc;

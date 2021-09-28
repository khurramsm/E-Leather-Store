import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

const HardwareColorAcc = ({ hardwareColor, setHardwareColor }) => {
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
            <div className="col-md-10 mt-2 p-0 ">
              <input
                value="No Changes"
                onChange={(e) => setHardwareColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={hardwareColor === "No Changes"}
              />
              No Changes (Same as in the picture)
            </div>
            <br />
            <br />
            <div className="col-md-4 p-0 mt-2">
              <input
                value="Antique"
                onChange={(e) => setHardwareColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={hardwareColor === "Antique"}
              />
              Antique
              <br />
              <img
                src="https://cdn.shopify.com/s/files/1/2501/3150/files/Antique_300x220.png"
                alt="antique"
              />
            </div>
            <div className="col-md-4 p-0 mt-2">
              <input
                value="Black"
                onChange={(e) => setHardwareColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={hardwareColor === "Black"}
              />
              Black
              <br />
              <img
                src="https://cdn.shopify.com/s/files/1/2501/3150/files/Black_300x220.png"
                alt="black"
              />
            </div>
            <div className="col-md-4 p-0 mt-2">
              <input
                value="Gold"
                onChange={(e) => setHardwareColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={hardwareColor === "Gold"}
              />
              Gold
              <br />
              <img
                src="https://cdn.shopify.com/s/files/1/2501/3150/files/Gold_300x220.png"
                alt="gold"
              />
            </div>
            <div className="col-md-4 p-0 mt-2">
              <input
                value="Silver"
                onChange={(e) => setHardwareColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={hardwareColor === "Silver"}
              />
              Silver
              <br />
              <img
                src="https://cdn.shopify.com/s/files/1/2501/3150/files/Silver_300x220.png"
                alt="silver"
              />
            </div>
            <div className="col-md-4 p-0 mt-2">
              <input
                value="Bronze"
                onChange={(e) => setHardwareColor(e.target.value)}
                type="radio"
                className="m-1"
                checked={hardwareColor === "Bronze"}
              />
              Bronze
              <br />
              <img
                src="https://cdn.shopify.com/s/files/1/2501/3150/files/Bronze_300x220.png"
                alt="bronze"
              />
            </div>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default HardwareColorAcc;

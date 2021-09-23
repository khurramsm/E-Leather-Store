import "../css/ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page bg-light container">
      <h4 className="text-center">Contact</h4>
      <div className="row ">
        <div className="col-md-12">
          <form>
            <input type="text" placeholder="Your Name" required/>
            <input type="Email" placeholder="Your Email" required/>
            <input type="text" placeholder="Your Number" required/>
            <textarea type="text" rows="4" placeholder="Your Message" required/>
            <button className="btnWebsite">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

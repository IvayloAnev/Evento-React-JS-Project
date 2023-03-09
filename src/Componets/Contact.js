import Map from "./Map"

export default function Contact() {
    return (
        <>
            <section id="contact">
              <Map />
                <div className="contact-section">
                    <div className="ear-piece">
                        <img className="img-responsive" src="images/ear-piece.png" alt="" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3 col-sm-offset-4">
                                <div className="contact-text">
                                    <h3>Contact</h3>
                                    <address>
                                        E-mail: promo@party.com
                                        <br />
                                        Phone: +1 (123) 456 7890
                                        <br />
                                        Fax: +1 (123) 456 7891
                                    </address>
                                </div>
                                <div className="contact-address">
                                    <h3>Contact</h3>
                                    <address>
                                        Unit C2, St.Vincent's Trading Est.,
                                        <br />
                                        Feeder Road,
                                        <br />
                                        Bristol, BS2 0UY
                                        <br />
                                        United Kingdom
                                    </address>
                                </div>
                            </div>
                            <div className="col-sm-5">
                                <div id="contact-section">
                                    <h3>Send a message</h3>
                                    <div
                                        className="status alert alert-success"
                                        style={{ display: "none" }}
                                    />
                                    <form
                                        id="main-contact-form"
                                        className="contact-form"
                                        name="contact-form"
                                        method="post"
                                        action="sendemail.php"
                                    >
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                required="required"
                                                placeholder="Name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                required="required"
                                                placeholder="Email ID"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                name="message"
                                                id="message"
                                                required="required"
                                                className="form-control"
                                                rows={4}
                                                placeholder="Enter your message"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary pull-right">
                                                Send
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*/#contact*/}
        </>
    )
}
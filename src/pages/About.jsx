import "./About.css";

export default function About() {
    return (
        <div className="about-container">
            <div className="map">
                <h2 className="title">Our Location</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.9533350064885!2d-8.306677523306337!3d41.44023419271457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24fae56584c271%3A0xb4cebca850bd4b8b!2sGuimar%C3%A3eShopping!5e0!3m2!1sen!2spt!4v1713963562372!5m2!1sen!2spt"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    title="Our Location"
                ></iframe>
            </div>
        </div>
    );
}

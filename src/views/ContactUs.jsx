import '../style/ContactUs.css'; 

export default function ContactUs() {
  return (
    <section1 className="contact-us-section1 text-center mt-5">
      <div className="section1-content">
        <h3 className="section1-subtitle">Contact Us</h3>
        <p className="section1-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sed, odio vel quisquam temporibus eligendi aut voluptas quaerat iusto aperiam rerum, natus distinctio, eveniet ipsum. Quidem pariatur adipisci soluta nesciunt!
        </p>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="form-control mb-4" placeholder="Your name" />
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" className="form-control mb-4" placeholder="Your number" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="form-control mb-4" placeholder="Your email" />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </section1>
  );
}

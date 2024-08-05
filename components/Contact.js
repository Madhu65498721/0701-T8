const Contact = () => (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <form>
        <label>Name</label>
        <input type="text" name="name" required />
        <label>Email</label>
        <input type="email" name="email" required />
        <label>Message</label>
        <textarea name="message" rows="5" required></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  );
  
  export default Contact;
  
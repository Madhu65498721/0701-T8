const Testimonial = () => (
    <section className="testimonial-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonial">
        <p>"The work delivered exceeded our expectations, and the process was smooth and professional. Highly recommend!"</p>
        <div className="client-info">
          <img src="/images/client1.jpg" alt="Client" />
          <div>
            <h4>John Doe</h4>
            <span>CEO, Company</span>
          </div>
        </div>
      </div>
      <div className="testimonial">
        <p>"Their team was incredibly dedicated and provided solutions tailored to our needs. The results speak for themselves."</p>
        <div className="client-info">
          <img src="/images/client2.jpg" alt="Client" />
          <div>
            <h4>Jane Smith</h4>
            <span>Marketing Director, Company</span>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default Testimonial;
  
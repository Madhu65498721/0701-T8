const AboutAgency = () => (
    <section className="agency-section">
      <div className="agency-info">
        <h3>ABOUT AGENCY</h3>
        <h2>"Premier Digital Agency Providing Business Solutions".</h2>
        <p>When a great idea emerges, part of my role is to circulate it, gauge reactions, and stimulate discussion around it.</p>
        <div className="progress-bar">
          <label>Web Design <span>80%</span></label>
          <div className="progress">
            <div className="progress-inner web-design"></div>
          </div>
        </div>
        <div className="progress-bar">
          <label>Development <span>60%</span></label>
          <div className="progress">
            <div className="progress-inner development"></div>
          </div>
        </div>
        <div className="progress-bar">
          <label>Branding <span>40%</span></label>
          <div className="progress">
            <div className="progress-inner branding"></div>
          </div>
        </div>
        <div className="progress-bar">
          <label>Code <span>75%</span></label>
          <div className="progress">
            <div className="progress-inner code"></div>
          </div>
        </div>
      </div>
      <div className="agency-image">
        <img src="/images/Background4.jpg" alt="Person working" />
      </div>
    </section>
  );
  
  export default AboutAgency;
  
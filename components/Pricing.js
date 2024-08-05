const Pricing = () => (
    <section className="pricing-section">
      <h2>Pricing Plans</h2>
      <div className="pricing">
        <div className="pricing-plan">
          <h3>Basic</h3>
          <p>$199</p>
          <ul>
            <li>Feature One</li>
            <li>Feature Two</li>
          </ul>
          <a href="#" className="btn">Choose Plan</a>
        </div>
        <div className="pricing-plan">
          <h3>Standard</h3>
          <p>$399</p>
          <ul>
            <li>Feature One</li>
            <li>Feature Two</li>
            <li>Feature Three</li>
          </ul>
          <a href="#" className="btn">Choose Plan</a>
        </div>
        <div className="pricing-plan">
          <h3>Premium</h3>
          <p>$599</p>
          <ul>
            <li>Feature One</li>
            <li>Feature Two</li>
            <li>Feature Three</li>
            <li>Feature Four</li>
          </ul>
          <a href="#" className="btn">Choose Plan</a>
        </div>
      </div>
    </section>
  );
  
  export default Pricing;
  
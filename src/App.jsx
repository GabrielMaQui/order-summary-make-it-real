import './App.css'


function OrderHeader() {
  return (
    <div className="order-header">
      <h2>Order Summary</h2>
      <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
    </div>
  );

};

function PlanDetails() {
  return (
    <div className="plan-details">
      <div className="plan-info">
        <img src="src/assets/icon-music.svg" alt="Music Icon" />
        <div>
          <h3>Annual Plan</h3>
          <p>$59.99/year</p>
        </div>
      </div>
      <a href="#" className="change-link">Change</a>
    </div>
  );
};

function ActionButtons() {
  return (
    <div className="action-buttons">
      <button className="payment-button">Proceed to Payment</button>
      <button className="cancel-button">Cancel Order</button>
    </div>
  );
};


function App() {
  return (
    <div className="order-summary-container">
      <div className="order-summary-card">
        <div className="order-summary-image">
          <img src="/src/assets/illustration-hero.svg" alt="Order Summary" />
        </div>
        <OrderHeader/>
        <PlanDetails/>
        <ActionButtons/>
        </div>
    </div>
  );
};

export default App

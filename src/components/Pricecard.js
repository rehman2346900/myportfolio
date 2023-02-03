import React from 'react'
import './Pricecard.css'

const Pricecard = () => {
  return (
    <div className="pricing">

    <div className="card-container">
      <div class="pricing-card">
        <div class="pricing-card-header">
          <h3>Standard Plan</h3>
          <p class="pricing-card-price">$9.99/month</p>
        </div>
        <ul class="pricing-card-features">
          <li>1 GB storage</li>
          <li>10 GB bandwidth</li>
          <li>10 email accounts</li>
          <li>24/7 support</li>
        </ul>
        <button class="pricing-card-cta">Sign Up</button>
      </div>

      <div class="pricing-card">
        <div class="pricing-card-header">
          <h3>Standard Plan</h3>
          <p class="pricing-card-price">$9.99/month</p>
        </div>
        <ul class="pricing-card-features">
          <li>1 GB storage</li>
          <li>10 GB bandwidth</li>
          <li>10 email accounts</li>
          <li>24/7 support</li>
        </ul>
        <button class="pricing-card-cta">Sign Up</button>
      </div>

      <div class="pricing-card">
        <div class="pricing-card-header">
          <h3>Standard Plan</h3>
          <p class="pricing-card-price">$9.99/month</p>
        </div>
        <ul class="pricing-card-features">
          <li>1 GB storage</li>
          <li>10 GB bandwidth</li>
          <li>10 email accounts</li>
          <li>24/7 support</li>
        </ul>
        <button class="pricing-card-cta">Sign Up</button>
      </div>
      </div>
    </div>
  )
}

export default Pricecard
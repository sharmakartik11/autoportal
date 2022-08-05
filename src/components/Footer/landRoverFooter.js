import React from "react";
import "./footer.css";
import Card from "../Card/Card";

function LandRoverFooter() {
  return (
    <div className="section" id="footer">
      <footer class="page-footer font-small stylish-color-dark pt-4">
        <div class="footer-row">
          <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-6 mx-auto location">
              <h4>LAND ROVER VEHICLES</h4>

              <ul class="list-unstyled">
                <li>
                  <a href="https://www.landroverusa.com/index.html" onClick="return false;">LANDROVERUSA.COM</a>
                </li>
                <li>
                  <a href="https://www.landroverusa.com/vehicles/index.html" onClick="return false;">EXPLORE VEHICLES</a>
                </li>
                <li>
                  <a href="https://www.landroverusa.com/vehicles/range-rover-family.html" onClick="return false;">RANGE ROVER FAMILY</a>
                </li>
                <li>
                  <a href="https://www.landroverusa.com/vehicles/discovery-family.html" onClick="return false;">DISCOVERY FAMILY</a>
                </li>
                <li>
                  <a href="https://www.landroverusa.com/certified-pre-owned/index.html" onClick="return false;">CERTIFIED PRE-OWNED</a>
                </li>
                <li>
                  <a href="https://www.landroverusa.com/corporate-sales/fleet-and-business-sales.html" onClick="return false;">FLEET & BUSINESS</a>
                </li>
              </ul>
            </div>

            <div class="col-md-3 col-sm-6 col-xs-6 mx-auto location">
              <h4>SHOPPING TOOLS</h4>

              <ul class="list-unstyled">
                <li>
                  <a href="https://www.landroverusa.com/build-your-own/index.html" onClick="return false;">Build & Price</a>
                </li>
                <li>
                  <a href="https://www.landroverusa.com/current-offers/index.html" onClick="return false;">Current Land Rover Offers</a>
                </li>
                <li>
                  <a href="https://www.landroverusa.com/national-dealer-locator.html" onClick="return false;">Locate a Retailer</a>
                </li>
                <li>
                  <a href="https://www.landroverusa.com/shopping-tools/calculate-trade-in-value.html" onClick="return false;">Calculate Trade-In Value</a>
                </li>
                <li>
                  <a href="http://new.landroverusa.com/" onClick="return false;">Search Inventory</a>
                </li>
              </ul>
            </div>

            <div class="col-md-3 col-sm-6 col-xs-6 mx-auto location">
              <h4>FINANCING TOOLS</h4>

              <ul class="list-unstyled">
                <li>
                  <a href="http://financecalculator.landroverusa.com/lr/en/us/models" onClick="return false;">Estimate Payment</a>
                </li>
                <li>
                  <a href="https://autofinance.chase.com/land-rover-financial-group/financing-steps" onClick="return false;">Get Started</a>
                </li>
              </ul>
            </div>

            <div class="col-md-3 col-sm-6 col-xs-6 mx-auto location">
              <h4>ONLINE/MOBILE PAYMENTS</h4>

              <ul class="list-unstyled">
                <li>
                  <a href="https://www.chase.com/online/digital/mobile-banking.html" onClick="return false;">Mobile Banking</a>
                </li>
                <li>
                  <a href="https://www.chase.com/personal/auto-loans/servicing" onClick="return false;">Sign-up for Online Banking</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="ftr-copyright">
          <p>
            *The Jaguar word mark, the Jaguar logo, and Jaguar Financial Group are
            trademarks of Jaguar Land Rover Limited and any use by JPMorgan Chase
            Bank, N.A. (“Chase”) is under license. Retail/Loan and lease accounts
            are owned by Chase. Jaguar is solely responsible for its products and
            services and for promotional statements about them and is not
            affiliated with Chase or its affiliates.
        </p>

          <p>
            Auto loans and leases through the Jaguar Financial Group are subject
            to credit approval by Chase. Additional terms and conditions may
            apply.
        </p>

          <p className="footerLinks">
            <a className="footerLink" target="_blank" href="https://www.chase.com/resources/privacy-security">Privacy</a> | <a className="footerLink" target="_blank" href="https://www.chase.com/resources/privacy-security">Security</a> | <a className="footerLink" target="_blank" href="https://www.chase.com/digital/resources/terms-of-use">Terms of Use</a> | <a className="footerLink" target="_blank" href="https://autofinance.chase.com/land-rover-financial-group/sitemap">Site map</a> | <a className="footerLink" target="_blank" href="https://www.chase.com/digital/resources/accessibility">Accessibility</a> |
        <a className="footerLink" target="_blank" href="http://www.aboutads.info/choices/">AdChoices</a>
          </p>
        </div>
        <div class="footer-copyright text-center py-3">
          © 2020 JPMorgan Chase Bank, N.A. Member FDIC
      </div>
      </footer>
    </div >
  );
}

export default LandRoverFooter;

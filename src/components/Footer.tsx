import React from 'react';

import './footer.scss';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <div id="footer">
      <div className="contacts">
        <h3>Connect With Me </h3>
        <div className="social-links-footer">
          <span>
            <i className="fab fa-github"></i>
          </span>
          <span>
            <i className="fab fa-linkedin-in"></i>
          </span>
          <span>
            <i className="fab fa-telegram-plane"></i>
          </span>
        </div>
      </div>
      <p className="copyright">© Copyright Simple Store, {year}</p>
    </div>
  );
};

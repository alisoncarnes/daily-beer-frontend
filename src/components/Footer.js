import React from 'react'

export default function Footer(props) {
    return (
      <footer>
        <div className="footer-content">
          <h1>daily beer/ est 2020</h1>
          <div className="icon-links">
          <a href="https://github.com/alisoncarnes" className="footer-links"><ion-icon name="logo-github"></ion-icon></a>
          <div className="divider"/>
          <a href="#" className="footer-links"><ion-icon name="logo-linkedin"></ion-icon></a>
          </div>
        </div>
      </footer>
    )
}

import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="footer">
  <div className="container">
    <div className="row">
      <div className="footer-col-1">
        <h2>Liên hệ</h2>
        <p>0862407432</p><br />
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>Youtube </li>
        </ul>
      </div>
      <div className="footer-col-2">
        <img src="../img/logo-white.png" />
        <p>Our Purpose Is To Sustainably Make the Pleasure and
          Benefits of Sports Accessible to the Many</p>
      </div>
      <div className="footer-col-3">
        <h3>Địa chỉ</h3>
        <ul>
          <li />Phú Kiều Cầu diễn Hà Nội
        </ul>
      </div>
    </div>
  </div>
</div>

  )
}

export default Footer
import React from 'react'

const Footer = () => {
  return (
    <div className='d-flex justify-content-evenly' style={{padding:"7.5rem"}}>
      <div className="estore" style={{width:"22%"}}>
      <div style={{fontSize: "3.5rem",background: "linear-gradient(to top, #ff002d, yellow, blue)",WebkitBackgroundClip:"text",backgroundClip: "text",color: "transparent"}} className="logo">Ecart.</div>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil enim minus dicta architecto deserunt fuga provident tempore, sint, excepturi ab optio nisi. Iste corporis veniam harum omnis assumenda velit adipisci.</p>
      </div>
      <div className="links">
        <h2>Quick Links</h2>
        <ul className='d-flex' style={{listStyle:"none",flexDirection:"column",padding:"0"}}>
        <li style={{padding:"6px",fontSize:"1.2em"}}>About</li>
        <li style={{padding:"6px",fontSize:"1.2em"}}>Offers & Discounts</li>
        <li style={{padding:"6px",fontSize:"1.2em"}}>Get Coupon</li>
        <li style={{padding:"6px",fontSize:"1.2em"}}>Contact Us</li>
        </ul>
      </div>
      <div className="links">
        <h2>New Products</h2>
        <ul className='d-flex' style={{listStyle:"none",flexDirection:"column",padding:"0"}}>
        <li style={{padding:"6px",fontSize:"1.2em"}}>Woman Cloth</li>
        <li style={{padding:"6px",fontSize:"1.2em"}}>Fashion Accessories</li>
        <li style={{padding:"6px",fontSize:"1.2em"}}>Man Accessories</li>
        <li style={{padding:"6px",fontSize:"1.2em"}}>Rubber made Toys</li>
        </ul>
      </div>
      <div className="links">
        <h2>Support</h2>
        <ul className='d-flex' style={{listStyle:"none",flexDirection:"column",padding:"0"}}>
        <li style={{padding:"6px",fontSize:"1.2em"}}>Frequently Asked Questions</li>
        <li style={{padding:"6px",fontSize:"1.2em"}}>Terms & Conditions</li>
        <li style={{padding:"6px",fontSize:"1.2em"}}>Privacy Policy</li>
        <li style={{padding:"6px",fontSize:"1.2em"}}>Privacy Policy</li>
        <li style={{padding:"6px",fontSize:"1.2em"}}>Report a Payment Issue</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer

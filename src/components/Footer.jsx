import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="cta-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="get-start-box">
                <div className="col-lg-8">
                  <div className="section-heading">
                    <h5 className="section__meta text-white">#get in touch</h5>
                    <h2 className="section__title">Ready to get started ?</h2>
                    <p className="section__sub">Speak to a our specialist at (+91 7303883192)</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="button-shared text-end">
                    <Link to="/contact" className="btn cta-btn">
                      Request Call Back <span className="la la-caret-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer-style bg-gray-100 pt-200">
        <div className="container">
          <div className="footer-middle-area mt-30 pt-60">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="footer-wrapper mb-30">
                  <h3 className="footer-title">Payment Secured By</h3>
                  <div className="footer-info">
                    <p>
                      <img src="/images/logo_SSL.png" alt="SSL" />
                      &nbsp;
                      <img src="/images/logo_nortan.png" alt="Nortan" />
                      <br />
                      <br />
                      <b>V.VANG SOLUTIONS PRIVATE LIMITED</b>
                      <br />
                      Registration Number: 159588
                      <br />
                      GST: 07AACCC9997R2ZG
                      <br />
                      CIN/LLPIN/FCRN: U67100DL2007PTC159588
                      <br />
                      LEI Code: 984500F8612B2AAF9F02
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6">
                <div className="footer-wrapper mb-30">
                  <h3 className="footer-title">Quick Links</h3>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link to="/communities">Communities</Link>
                      </li>
                      <li>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="/refund-policy">Refund Policy</Link>
                      </li>
                      <li>
                        <Link to="/terms-and-conditions">Terms and Conditions</Link>
                      </li>
                      <li>
                        <Link to="/disclaimer">Disclaimer</Link>
                      </li>
                      <li>
                        <Link to="/grievance-redressal">Grievance Redressal</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="footer-wrapper mb-30">
                  <h3 className="footer-title">Product By</h3>
                  <div className="footer-info">
                    <p>
                      <img src="/images/payvang-logo.png" alt="Payvang" />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="footer-wrapper mb-30">
                  <h3 className="footer-title">Get In Touch</h3>
                  <div className="footer-info">
                    <p>
                      <b>Email:</b>
                      <br />
                      <a href="mailto:info@payvangservices.com">info@payvangservices.com</a>
                      <br />
                      <b>Phone:</b>
                      <br />
                      +91 7303883192
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom-area pt-25 pb-25">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="copyright">
                  <p>
                    © Copyrights 2023 <Link to="/">PayVang Services</Link> All rights reserved.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6" />
            </div>
          </div>
        </div>
      </footer>

      <div className="go-top-area">
        <div className="go-top-wrap">
          <div className="go-top-btn-wrap">
            <div
              className={`go-top go-top-btn${showTop ? ' active' : ''}`}
              role="button"
              tabIndex={0}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              onKeyDown={(e) => {
                if (e.key === 'Enter') window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <i className="las la-angle-double-up" />
              <i className="las la-angle-double-up" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

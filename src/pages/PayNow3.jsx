import HtmlPage from '../components/HtmlPage'
import html from '../content/paynow3.html?raw'

/**
 * Payment UI only.
 * TODO: Gateway hash signing (PG_SALT / PG_APP_ID) must stay on a secure server API.
 * Do not expose secrets in the browser.
 */
export default function PayNow3() {
  return <HtmlPage html={html} />
}

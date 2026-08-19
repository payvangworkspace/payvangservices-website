import { useNavigate } from 'react-router-dom'

/**
 * Renders migrated PHP page HTML. Internal /path links use client-side navigation.
 */
export default function HtmlPage({ html }) {
  const navigate = useNavigate()

  const onClick = (e) => {
    const anchor = e.target.closest('a')
    if (!anchor) return

    const href = anchor.getAttribute('href')
    if (!href || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http') || href.startsWith('#')) {
      return
    }

    // Internal app routes
    if (href.startsWith('/')) {
      e.preventDefault()
      navigate(href)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div
      className="page-html"
      onClick={onClick}
      onSubmit={onSubmit}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

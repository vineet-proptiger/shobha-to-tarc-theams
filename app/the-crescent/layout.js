import { SITE_URL } from '../../lib/config'

export const metadata = {
  title: 'Sobha Crescent | Sector 63A Gurgaon Luxury Projects',
  description: 'Explore Sobha Crescent in Sector 63A, Gurgaon. Master planned luxury township featuring premium amenities, ultra-luxury residences, and strategic location.',
  alternates: {
    canonical: '/the-crescent',
  },
  openGraph: {
    title: 'Sobha Crescent | Sector 63A Gurgaon Luxury Projects',
    description: 'Explore Sobha Crescent in Sector 63A, Gurgaon. Master planned luxury township featuring premium amenities, ultra-luxury residences, and strategic location.',
    url: `${SITE_URL}/the-crescent`,
  },
}

export default function CrescentLayout({ children }) {
  return <>{children}</>
}

import './Places.css'
import UAEFlag from '../assets/UAE.gif'
import QatarFlag from '../assets/Qatar.gif'
import OmanFlag from '../assets/Oman.gif'
import KwaitFlag from '../assets/Kwait.gif'
import SaudiArabiaFlag from '../assets/SaudiArabia.gif'
import BahrainFlag from '../assets/Bahrain.gif'

const places = [
  {
    id: 1,
    name: 'UAE Office',
    address: 'Dubai, United Arab Emirates',
    phone: '+971 (4) 123-4567',
    hours: 'Sat-Thu: 9AM-6PM',
    flag: UAEFlag,
    lat: 25.2048,
    lng: 55.2708
  },
  {
    id: 2,
    name: 'Qatar Branch',
    address: 'Doha, Qatar',
    phone: '+974 (4) 234-5678',
    hours: 'Sat-Thu: 9AM-6PM',
    flag: QatarFlag,
    lat: 25.2854,
    lng: 51.5310
  },
  {
    id: 3,
    name: 'Oman Store',
    address: 'Muscat, Oman',
    phone: '+968 (2) 345-6789',
    hours: 'Sat-Thu: 9AM-6PM',
    flag: OmanFlag,
    lat: 23.6100,
    lng: 58.5400
  },
  {
    id: 4,
    name: 'Kuwait Office',
    address: 'Kuwait City, Kuwait',
    phone: '+965 (2) 456-7890',
    hours: 'Sat-Thu: 9AM-6PM',
    flag: KwaitFlag,
    lat: 29.3759,
    lng: 47.9774
  },
  {
    id: 5,
    name: 'Saudi Arabia Branch',
    address: 'Riyadh, Saudi Arabia',
    phone: '+966 (1) 567-8901',
    hours: 'Sat-Thu: 9AM-6PM',
    flag: SaudiArabiaFlag,
    lat: 24.7136,
    lng: 46.6753
  },
  {
    id: 6,
    name: 'Bahrain Store',
    address: 'Manama, Bahrain',
    phone: '+973 (1) 678-9012',
    hours: 'Sat-Thu: 9AM-6PM',
    flag: BahrainFlag,
    lat: 26.1667,
    lng: 50.5577
  }
]

export default function Places() {
  const whatsappNumber = '+923479104637'

  const handleWhatsApp = (placeName) => {
    const message = `Hi, I'm interested in your ${placeName} location`
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="places" className="places">
      <div className="places-container">
        <h2 className="section-title">Our Locations</h2>
        <p className="section-subtitle">Visit us at any of our offices</p>
        <div className="places-grid">
          {places.map(place => (
            <div key={place.id} className="place-card">
              <div className="place-flag-display">
                <img src={place.flag} alt={place.name} className="flag-image" />
              </div>
              <h3 className="place-name">{place.name}</h3>
              <div className="place-details">
                <p className="place-address">📍 {place.address}</p>
                <p className="place-hours">🕐 {place.hours}</p>
              </div>
              <button 
                className="place-btn"
                onClick={() => handleWhatsApp(place.name)}
              >
                💬 WhatsApp
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

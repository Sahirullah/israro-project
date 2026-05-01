import './Places.css'

const places = [
  {
    id: 1,
    name: 'UAE Office',
    address: 'Dubai, United Arab Emirates',
    phone: '+971 (4) 123-4567',
    hours: 'Sat-Thu: 9AM-6PM',
    icon: '🇦🇪'
  },
  {
    id: 2,
    name: 'Qatar Branch',
    address: 'Doha, Qatar',
    phone: '+974 (4) 234-5678',
    hours: 'Sat-Thu: 9AM-6PM',
    icon: '🇶🇦'
  },
  {
    id: 3,
    name: 'Oman Store',
    address: 'Muscat, Oman',
    phone: '+968 (2) 345-6789',
    hours: 'Sat-Thu: 9AM-6PM',
    icon: '🇴🇲'
  },
  {
    id: 4,
    name: 'Kuwait Office',
    address: 'Kuwait City, Kuwait',
    phone: '+965 (2) 456-7890',
    hours: 'Sat-Thu: 9AM-6PM',
    icon: '🇰🇼'
  },
  {
    id: 5,
    name: 'Saudi Arabia Branch',
    address: 'Riyadh, Saudi Arabia',
    phone: '+966 (1) 567-8901',
    hours: 'Sat-Thu: 9AM-6PM',
    icon: '🇸🇦'
  },
  {
    id: 6,
    name: 'Bahrain Store',
    address: 'Manama, Bahrain',
    phone: '+973 (1) 678-9012',
    hours: 'Sat-Thu: 9AM-6PM',
    icon: '🇧🇭'
  }
]

export default function Places() {
  return (
    <section id="places" className="places">
      <div className="places-container">
        <h2 className="section-title">Our Locations</h2>
        <p className="section-subtitle">Visit us at any of our offices</p>
        <div className="places-grid">
          {places.map(place => (
            <div key={place.id} className="place-card">
              <div className="place-icon">{place.icon}</div>
              <h3 className="place-name">{place.name}</h3>
              <div className="place-details">
                <p className="place-address">📍 {place.address}</p>
                <p className="place-phone">📞 {place.phone}</p>
                <p className="place-hours">🕐 {place.hours}</p>
              </div>
              <button className="place-btn">Get Directions</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

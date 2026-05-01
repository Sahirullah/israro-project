import './Products.css'

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'High-quality product with amazing features',
    price: '$99.99',
    icon: '📦'
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Premium solution for your needs',
    price: '$149.99',
    icon: '🎁'
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Best-in-class performance and reliability',
    price: '$199.99',
    icon: '⭐'
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'Innovative design meets functionality',
    price: '$129.99',
    icon: '🚀'
  },
  {
    id: 5,
    name: 'Product 5',
    description: 'Exceptional quality and durability',
    price: '$179.99',
    icon: '💎'
  },
  {
    id: 6,
    name: 'Product 6',
    description: 'Advanced technology for modern needs',
    price: '$159.99',
    icon: '🔧'
  },
  {
    id: 7,
    name: 'Product 7',
    description: 'Reliable and cost-effective solution',
    price: '$119.99',
    icon: '✨'
  },
  {
    id: 8,
    name: 'Product 8',
    description: 'Premium features at great value',
    price: '$189.99',
    icon: '🎯'
  }
]

export default function Products() {
  const whatsappNumber = '+923479104637'
  
  const handleWhatsApp = (productName) => {
    const message = `Hi, I'm interested in ${productName}`
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="products" className="products">
      <div className="products-container">
        <h2 className="section-title">Our Products</h2>
        <p className="section-subtitle">Explore our premium collection</p>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-icon">{product.icon}</div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-footer">
                <span className="product-price">{product.price}</span>
                <button className="product-btn">View Details</button>
              </div>
              <button 
                className="whatsapp-btn"
                onClick={() => handleWhatsApp(product.name)}
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

import './Products.css'
import A4Paper from '../assets/A4 paper.jpeg'
import Cocaine from '../assets/cocaine.jpeg'
import Crystal from '../assets/Crystal.jpeg'
import Hashish from '../assets/Hashish.jpeg'
import HTCTablet from '../assets/HTC Tablate.jpeg'
import IDPaper from '../assets/ID paper.jpeg'
import Lyrica from '../assets/Lyrica.jpeg'
import Weed from '../assets/weed.jpeg'

const products = [
  {
    id: 1,
    name: 'A4 Paper',
    description: 'High-quality A4 paper for all your printing needs',
    image: A4Paper
  },
  {
    id: 2,
    name: 'Cocaine',
    description: 'Premium quality product',
    image: Cocaine
  },
  {
    id: 3,
    name: 'Crystal',
    description: 'Pure crystal product',
    image: Crystal
  },
  {
    id: 4,
    name: 'Hashish',
    description: 'Premium hashish product',
    image: Hashish
  },
  {
    id: 5,
    name: 'HTC Tablet',
    description: 'Advanced tablet technology',
    image: HTCTablet
  },
  {
    id: 6,
    name: 'ID Paper',
    description: 'Official ID paper documents',
    image: IDPaper
  },
  {
    id: 7,
    name: 'Lyrica',
    description: 'Premium pharmaceutical product',
    image: Lyrica
  },
  {
    id: 8,
    name: 'Weed',
    description: 'Natural product',
    image: Weed
  }
]

export default function Products() {
  return (
    <section id="products" className="products">
      <div className="products-container">
        <h2 className="section-title">Our Products</h2>
        <p className="section-subtitle">Explore our premium collection</p>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <button className="product-btn">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

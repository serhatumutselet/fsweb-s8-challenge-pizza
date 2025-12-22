import { useState } from 'react'
import { Switch, Route, Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import homeBanner from '../images/iteration-1-images/home-banner.png'
import logo from '../images/iteration-1-images/logo.svg'
import icon1 from '../images/iteration-2-images/icons/1.svg'
import icon2 from '../images/iteration-2-images/icons/2.svg'
import icon3 from '../images/iteration-2-images/icons/3.svg'
import icon4 from '../images/iteration-2-images/icons/4.svg'
import icon5 from '../images/iteration-2-images/icons/5.svg'
import icon6 from '../images/iteration-2-images/icons/6.svg'
import kart1 from '../images/iteration-2-images/cta/kart-1.png'
import kart2 from '../images/iteration-2-images/cta/kart-2.png'
import kart3 from '../images/iteration-2-images/cta/kart-3.png'
import food1 from '../images/iteration-2-images/pictures/food-1.png'
import food2 from '../images/iteration-2-images/pictures/food-2.png'
import food3 from '../images/iteration-2-images/pictures/food-3.png'
import footerIcon1 from '../images/iteration-2-images/footer/icons/icon-1.png'
import footerIcon2 from '../images/iteration-2-images/footer/icons/icon-2.png'
import footerIcon3 from '../images/iteration-2-images/footer/icons/icon-3.png'
import insta0 from '../images/iteration-2-images/footer/insta/li-0.png'
import insta1 from '../images/iteration-2-images/footer/insta/li-1.png'
import insta2 from '../images/iteration-2-images/footer/insta/li-2.png'
import insta3 from '../images/iteration-2-images/footer/insta/li-3.png'
import insta4 from '../images/iteration-2-images/footer/insta/li-4.png'
import insta5 from '../images/iteration-2-images/footer/insta/li-5.png'
import './App.css'


const malzemeler = [
  'Pepperoni',
  'Sosis',
  'Mısır',
  'Sucuk',
  'Biber',
  'Zeytin',
  'Mantar',
  'Soğan',
  'Jalapeno',
  'Mozzarella',
]

const sizes = ['Küçük', 'Orta', 'Büyük']

const sizePrices = {
  'Küçük': 85,
  'Orta': 100,
  'Büyük': 115,
}

const ingredientPrice = 5

function Home() {
  const categories = [
    { icon: icon1, name: 'YENİ! Kore' },
    { icon: icon2, name: 'Pizza' },
    { icon: icon3, name: 'Burger' },
    { icon: icon4, name: 'Kızartmalar' },
    { icon: icon5, name: 'Fast food' },
    { icon: icon6, name: 'Gazlı İçecek' },
  ]

  const categories2 = [
    { icon: icon1, name: 'Ramen' },
    { icon: icon2, name: 'Pizza' },
    { icon: icon3, name: 'Burger' },
    { icon: icon4, name: 'French fries' },
    { icon: icon5, name: 'Fast food' },
    { icon: icon6, name: 'Soft drinks' },
  ]

  const foods = [
    { image: food1, name: 'Terminal Pizza', rating: '4.9 (200)', price: '60₺' },
    { image: food2, name: 'Position Absolute Acı Pizza', rating: '4.9 (200)', price: '60₺' },
    { image: food3, name: 'useEffect Tavuklu Burger', rating: '4.9 (200)', price: '60₺' },
  ]

  const instaImages = [insta0, insta1, insta2, insta3, insta4, insta5]

  return (
    <main className="home" aria-labelledby="home-heading">
      <section className="hero">
        <header className="hero-header hero-header--center">
          <img src={logo} alt="Teknolojik Yemekler logosu" className="hero-logo" />
          
        </header>
        <div className="hero-content hero-content--center">
          <div className="hero-text hero-text--center">
            <h1 id="home-heading" className="hero-title hero-title--light">
              KOD ACIKTIRIR
              <br />
              PIZZA,DOYURUR
            </h1>
            <Link to="/order" className="primary-button hero-button hero-button--contrast">
              ACIKTIM
            </Link>
          </div>
        </div>
        <figure className="hero-image-wrapper hero-image-wrapper--bottom">
          <img
            src={homeBanner}
            alt="Lezzetli pizza görseli"
            className="hero-image hero-image--large"
          />
        </figure>
      </section>

      <section className="category-section">
        <div className="category-bar">
          {categories.map((cat, idx) => (
            <div key={idx} className="category-item">
              <img src={cat.icon} alt="" aria-hidden="true" />
              <span>{cat.name}</span>
            </div>
          ))}
        </div>

        <div className="promo-container">
          <div className="promo-card promo-card--big">
            <img src={kart1} alt="Özel Lezzetus promosyonu" />
            <h2 className="promo-title">
              Özel<br />Lezzetus
            </h2>
            <Link to="/order" className="primary-button promo-button">
              SİPARİŞ VER
            </Link>
          </div>
          <div className="promo-right">
            <div className="promo-card promo-card--small">
              <img src={kart2} alt="Hackathlon Burger Menü promosyonu" />
              <h2 className="promo-title">
                Hackathlon<br />Burger Menü
              </h2>
              <Link to="/order" className="primary-button promo-button">
                SİPARİŞ VER
              </Link>
            </div>
            <div className="promo-card promo-card--small">
              <img src={kart3} alt="Hızlı kurye promosyonu" />
              <h2 className="promo-title promo-title--special">
                <span className="promo-title-highlight">Çoooook</span> hızlı<br />npm gibi kurye
              </h2>
              <Link to="/order" className="primary-button promo-button">
                SİPARİŞ VER
              </Link>
            </div>
          </div>
        </div>

        <div className="section-header">
          <h3 className="section-subtitle">en çok paketlenen menüler</h3>
          <h2 className="section-title">Acıktıran Kodlarla Doyuran Lezzetler</h2>
        </div>

        <div className="category-bar category-bar--secondary">
          {categories2.map((cat, idx) => (
            <div key={idx} className="category-item category-item--secondary">
              <img src={cat.icon} alt="" aria-hidden="true" />
              <span>{cat.name}</span>
            </div>
          ))}
        </div>

        <div className="food-list">
          {foods.map((food, idx) => (
            <article key={idx} className="food-item">
              <img src={food.image} alt={food.name} className="food-image" />
              <h3 className="food-name">{food.name}</h3>
              <p className="food-info">
                {food.rating} <span className="food-price">{food.price}</span>
              </p>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-wrapper">
          <div className="footer-col">
            <h4 className="footer-brand">Teknolojik<br />Yemekler</h4>
            <div className="footer-contact">
              <img src={footerIcon1} alt="" aria-hidden="true" />
              <p>341 Londonderry Road, İstanbul Türkiye</p>
            </div>
            <div className="footer-contact">
              <img src={footerIcon2} alt="" aria-hidden="true" />
              <p>aciktim@teknolojik.com</p>
            </div>
            <div className="footer-contact">
              <img src={footerIcon3} alt="" aria-hidden="true" />
              <p>+90 218 123 4567</p>
            </div>
          </div>
          <div className="footer-col">
            <h4 className="footer-title">Hot Menu</h4>
            <nav className="footer-menu">
              <p>Terminal Pizza</p>
              <p>6 Kişilik Hackathon Pizza</p>
              <p>useEffect Tavuklu Pizza</p>
              <p>Beyaz Çerezli Frosty</p>
              <p>Tester Getir Muhteşem Burger</p>
              <p>Position Absolute Acı Burger</p>
            </nav>
          </div>
          <div className="footer-col">
            <h4 className="footer-title">Instagram</h4>
            <div className="insta-grid">
              {instaImages.map((img, idx) => (
                <img key={idx} src={img} alt={`Instagram post ${idx + 1}`} />
              ))}
            </div>
          </div>
        </div>
        <p className="copyright">© 2023 Teknolojik Yemekler.</p>
      </footer>
    </main>
  )
}

function OrderForm({ onOrderComplete, isSubmitting, apiError }) {
  const [name, setName] = useState('')
  const [size, setSize] = useState('')
  const [selectedIngredients, setSelectedIngredients] = useState([])
  const [notes, setNotes] = useState('')
  const [quantity, setQuantity] = useState(1)

  const minNameValid = name.trim().length >= 3
  const sizeValid = Boolean(size)
  const ingredientsValid =
    selectedIngredients.length >= 4 && selectedIngredients.length <= 10

  const isFormValid = minNameValid && sizeValid && ingredientsValid

  const calculatePrice = () => {
    if (!size) return 0
    const basePrice = sizePrices[size] || 0
    const ingredientsPrice = selectedIngredients.length * ingredientPrice
    return (basePrice + ingredientsPrice) * quantity
  }

  const totalPrice = calculatePrice()

  const handleIngredientChange = (ingredient) => {
    setSelectedIngredients((prev) => {
      if (prev.includes(ingredient)) {
        return prev.filter((item) => item !== ingredient)
      }
      return [...prev, ingredient]
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!isFormValid || isSubmitting) return

    const payload = {
      isim: name.trim(),
      boyut: size,
      malzemeler: selectedIngredients,
      notlar: notes.trim(),
      adet: quantity,
      fiyat: totalPrice,
    }

    onOrderComplete(payload)
  }

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta))
  }

  return (
    <main className="order" aria-labelledby="order-heading">
      <header className="order-topbar">
        <div className="order-topbar-inner">
          <Link to="/" className="order-logo-link">
            <img src={logo} alt="Teknolojik Yemekler logosu" className="order-logo" />
          </Link>
          <p className="order-breadcrumb">
            Anasayfa &gt; <span className="order-breadcrumb-current">Sipariş Oluştur</span>
          </p>
        </div>
      </header>

      <section className="order-body">
        <div className="order-layout">
          <div className="order-banner">
          
          </div>
          <div>
            <form className="order-form" onSubmit={handleSubmit} noValidate>
              <div className="order-header-section">
                <h2 id="order-heading" className="order-title">Position Absolute Acı Pizza</h2>
                <div className="price-display">
                  <span className="price-label">Toplam Fiyat:</span>
                  <span className="price-value">{totalPrice}₺</span>
                </div>
              </div>

              <p className="order-description">
                Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza,
                domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel taş
                fırında yüksek sıcaklıkta pişirilen yenilebilir, yuvarlak, düzleştirilmiş mayalı buğday bazlı
                hamurdan oluşan İtalyan lezzetli bir yemektir.
              </p>
              
              <div className="form-field">
                <label htmlFor="quantity">Adet</label>
                <div className="quantity-counter">
                  <button
                    type="button"
                    className="quantity-button"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    aria-label="Azalt"
                  >
                    -
                  </button>
                  <span className="quantity-value">{quantity}</span>
                  <button
                    type="button"
                    className="quantity-button"
                    onClick={() => handleQuantityChange(1)}
                    aria-label="Artır"
                  >
                    +
                  </button>
                </div>
              </div>

          <div className="form-field">
            <label htmlFor="name">İsim</label>
            <input
              id="name"
              name="name"
              type="text"
              minLength={3}
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-invalid={!minNameValid}
              aria-describedby="name-help"
              required
            />
            <p id="name-help" className="field-help">
              En az 3 karakter olmalıdır.
            </p>
          </div>

          <fieldset className="form-field">
            <legend>Boyut Seçimi</legend>
            <div
              className="radio-group"
              role="radiogroup"
              aria-label="Pizza boyutu seçimi"
            >
              {sizes.map((option) => (
                <label key={option} className="radio-option">
                  <input
                    type="radio"
                    name="size"
                    value={option}
                    checked={size === option}
                    onChange={(e) => setSize(e.target.value)}
                    required
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="form-field">
            <legend>Ek Malzemeler</legend>
            <p className="field-help">
              En az 4, en fazla 10 malzeme seçebilirsiniz.
            </p>
            <div className="checkbox-grid" aria-label="Ek malzemeler listesi">
              {malzemeler.map((ingredient) => (
                <label key={ingredient} className="checkbox-option">
                  <input
                    type="checkbox"
                    name="ingredients"
                    value={ingredient}
                    checked={selectedIngredients.includes(ingredient)}
                    onChange={() => handleIngredientChange(ingredient)}
                  />
                  <span>{ingredient} <span className="ingredient-price">(+{ingredientPrice}₺)</span></span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="form-field">
            <label htmlFor="notes">Notlar</label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Örn: Kapıyı çalmayın, arayın."
            />
          </div>

          {apiError && (
            <div className="form-error" role="alert">
              {apiError}
            </div>
          )}

          <button
            type="submit"
            className="primary-button submit-button"
            disabled={!isFormValid || isSubmitting}
            aria-disabled={!isFormValid || isSubmitting}
          >
            {isSubmitting ? 'Siparişiniz gönderiliyor…' : 'Sipariş Ver'}
          </button>
        </form>
        
        {(name || size || selectedIngredients.length > 0) && (
          <aside className="order-summary" aria-label="Sipariş özeti">
            <h3 className="order-summary-title">Sipariş Özeti</h3>
            <div className="order-summary-content">
              {name && (
                <div className="summary-item">
                  <strong>İsim:</strong> {name}
                </div>
              )}
              {size && (
                <div className="summary-item">
                  <strong>Boyut:</strong> {size} <span className="summary-price">( {sizePrices[size]}₺)</span>
                </div>
              )}
              {selectedIngredients.length > 0 && (
                <div className="summary-item">
                  <strong>Malzemeler ({selectedIngredients.length}):</strong>
                  <ul className="summary-list">
                    {selectedIngredients.map((ing) => (
                      <li key={ing}>{ing} <span className="summary-price">(+{ingredientPrice}₺)</span></li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="summary-item">
                <strong>Adet:</strong> {quantity}
              </div>
              <div className="summary-item summary-total">
                <strong>Toplam Fiyat:</strong> <span className="total-price">{totalPrice}₺</span>
              </div>
              {notes && (
                <div className="summary-item">
                  <strong>Notlar:</strong> {notes}
                </div>
              )}
            </div>
          </aside>
        )}
          </div>
        </div>
      </section>
    </main>
  )
}

function Success({ order }) {
  return (
    <main className="success" aria-labelledby="success-heading">
      <section className="success-inner">
        <h1 id="success-heading" className="success-title">
          TEBRİKLER!
        </h1>
        <p className="success-subtitle">SİPARİŞİNİZ ALINDI!</p>

        {order && (
          <div className="success-details">
            <p>
              <strong>{order.isim}</strong> için {order.adet || 1} adet {order.boyut} boy pizza hazırlanıyor.
            </p>
            <p>
              <strong>Malzemeler:</strong> {order.malzemeler?.join(', ')}
            </p>
            {order.notlar && (
              <p>
                <strong>Notlar:</strong> {order.notlar}
              </p>
            )}
            {order.fiyat && (
              <p className="success-price">
                <strong>Toplam Fiyat:</strong> {order.fiyat}₺
              </p>
            )}
            {order.id && order.createdAt && (
              <p className="success-meta">
                Sipariş no: {order.id} • Tarih: {new Date(order.createdAt).toLocaleString()}
              </p>
            )}
          </div>
        )}

        <Link to="/" className="secondary-button success-button">
          YENİ SİPARİŞ OLUŞTUR
        </Link>
      </section>
    </main>
  )
}

function App() {
  const [lastOrder, setLastOrder] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [apiError, setApiError] = useState('')
  const history = useHistory()

  const handleOrderComplete = async (payload) => {
    setIsSubmitting(true)
    setApiError('')

    try {
      const response = await axios.post('https://reqres.in/api/pizza', payload, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'reqres-free-v1',
        },
      })

      const data = response.data
      console.log('Sipariş özeti:', data)
      setLastOrder(data)
      history.push('/success')
    } catch (error) {
      console.error('Sipariş gönderilemedi:', error)
      setApiError('Sipariş gönderilemedi. Lütfen internet bağlantınızı kontrol edin.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="app-shell">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/order">
          <OrderForm
            onOrderComplete={handleOrderComplete}
            isSubmitting={isSubmitting}
            apiError={apiError}
          />
        </Route>
        <Route path="/success">
          <Success order={lastOrder} />
        </Route>
      </Switch>
    </div>
  )
}

export default App

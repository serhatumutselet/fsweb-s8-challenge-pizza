import { useState } from 'react'
import { Switch, Route, Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import homeBanner from '../images/iteration-1-images/home-banner.png'
import formBanner from '../images/iteration-2-images/pictures/form-banner.png'
import logo from '../images/iteration-1-images/logo.svg'
import './App.css'

const INGREDIENTS = [
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

const SIZES = ['S', 'M', 'L']

function Home() {
  return (
    <main className="home" aria-labelledby="home-heading">
      <section className="hero">
        <header className="hero-header">
          <img src={logo} alt="Teknolojik Yemekler" className="hero-logo" />
          <nav aria-label="Ana gezinme" className="hero-nav">
            <Link to="/" className="nav-link">
              Anasayfa
            </Link>
            <Link to="/order" className="nav-link">
              Sipariş Ver
            </Link>
          </nav>
        </header>
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-eyebrow">Fırsatı kaçırma</p>
            <h1 id="home-heading" className="hero-title">
              Kod yazarken acıkanlara özel pizza!
            </h1>
            <p className="hero-subtitle">
              Teknolojik Yemekler olarak, bilgisayar başındaki aç geliştiricilere sıcak
              pizza ulaştırıyoruz.
            </p>
            <Link to="/order" className="primary-button hero-button">
              Acıktım!
            </Link>
          </div>
          <figure className="hero-image-wrapper">
            <img src={homeBanner} alt="Pizza ve bilgisayar başında çalışan kişi" className="hero-image" />
          </figure>
        </div>
      </section>
      <section className="features" aria-label="Öne çıkan özellikler">
        <article className="feature-card">
          <h2 className="feature-title">Dakikalar içinde kapında</h2>
          <p>
            Şehrin en hızlı kurye ağı ile, kodun başından kalkmadan siparişini teslim ediyoruz.
          </p>
        </article>
        <article className="feature-card">
          <h2 className="feature-title">Geliştirici dostu menü</h2>
          <p>
            Uzun geceler, sprintler ve hackathonlar için tasarlanmış özel pizza kombinasyonları.
          </p>
        </article>
        <article className="feature-card">
          <h2 className="feature-title">Tek tıkla sipariş</h2>
          <p>
            Basit, hızlı ve erişilebilir sipariş formu ile zaman kaybetmeden pizzana ulaş.
          </p>
        </article>
      </section>
    </main>
  )
}

function OrderForm({ onOrderComplete, isSubmitting, apiError }) {
  const [name, setName] = useState('')
  const [size, setSize] = useState('')
  const [selectedIngredients, setSelectedIngredients] = useState([])
  const [notes, setNotes] = useState('')

  const minNameValid = name.trim().length >= 3
  const sizeValid = Boolean(size)
  const ingredientsValid =
    selectedIngredients.length >= 4 && selectedIngredients.length <= 10

  const isFormValid = minNameValid && sizeValid && ingredientsValid

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
    }

    onOrderComplete(payload)
  }

  return (
    <main className="order" aria-labelledby="order-heading">
      <header className="order-header">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Teknolojik Yemekler" className="hero-logo" />
        </Link>
        <h1 id="order-heading" className="order-title">
          Pizza Siparişi
        </h1>
      </header>

      <section className="order-layout">
        <figure className="order-banner">
          <img src={formBanner} alt="Pizza sipariş formu görseli" />
        </figure>

        <form className="order-form" onSubmit={handleSubmit} noValidate>
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
              {SIZES.map((option) => (
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
              {INGREDIENTS.map((ingredient) => (
                <label key={ingredient} className="checkbox-option">
                  <input
                    type="checkbox"
                    name="ingredients"
                    value={ingredient}
                    checked={selectedIngredients.includes(ingredient)}
                    onChange={() => handleIngredientChange(ingredient)}
                  />
                  <span>{ingredient}</span>
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
      </section>
    </main>
  )
}

function Success({ order }) {
  return (
    <main className="success" aria-labelledby="success-heading">
      <section className="success-card">
        <h1 id="success-heading">Siparişiniz Alındı!</h1>
        {order ? (
          <>
            <p>
              <strong>{order.isim}</strong>, siparişin başarıyla oluşturuldu.
            </p>
            <p>
              <strong>Boyut:</strong> {order.boyut}
            </p>
            <p>
              <strong>Malzemeler:</strong> {order.malzemeler?.join(', ')}
            </p>
            {order.notlar && (
              <p>
                <strong>Notlar:</strong> {order.notlar}
              </p>
            )}
            {order.id && order.createdAt && (
              <p className="success-meta">
                Sipariş no: {order.id} • Tarih: {new Date(order.createdAt).toLocaleString()}
              </p>
            )}
          </>
        ) : (
          <p>Herhangi bir sipariş verisi bulunamadı.</p>
        )}
        <Link to="/" className="secondary-button">
          Yeni bir sipariş ver
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
      // API siparişi id ve tarih bilgileriyle geri döndürür.
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

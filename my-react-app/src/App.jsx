import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Cards from './Cards.jsx'

function App() {
  const influencers = [
    {"id": 1, "desc": "Hi I am Sepp and I like playing football"},
    {"id": 2, "name": "Hans", "desc": "Hi I am Hans and I like playing football"},
    {"id": 3, "name": "Babsi", "desc": "Hi I am Babsi and I like playing football"},
    {"id": 4, "name": "Andrew", "desc": "Hi I am Andrew and I like playing football"},
  ]
  return( <>
            <Header/>
            <Cards influencers={influencers} />
            <Footer/>
          </>)
}

export default App

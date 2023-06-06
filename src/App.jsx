import './App.css'
import Hero from './Hero'
import Card from './Card'
import Data from './Data'


function Footer() {
  return (
    <footer className="foot">
      <center><small>© 2023 Airbnb. All Rights Reserved.</small></center>
    </footer>
  );
}

function App() {
      const cards = Data.map(item => {
        return (
          <Card
            item={item}
            key={item.id}
      />
        )
      })
      
      return (
        <div>
          <Hero/>
          <section className='cards-list'>
            {cards}
          </section>
          <Footer/>
    </div>
  )
}

export default App
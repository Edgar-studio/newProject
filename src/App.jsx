import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Pages from "./Pages/Pages.jsx";


function App() {
    const token = localStorage.getItem('token');

  return (
        <div className='text-red-500 bg-red-700'>
            {token &&  <Header />}

            <Pages />
            {token &&  <Footer />}

        </div>
  )
}

export default App

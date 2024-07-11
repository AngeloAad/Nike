import { CustomerReviews, Footer, Hero, 
  PopularProducts, Services, SpecialOffer, 
  Subscribe, SuperQuality } from "./sections";
import Nav from "./components/Nav";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const hash = location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    handleScroll();
  }, [location]);
  return(
  <main className="relative">
     <Nav /> 

    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>

    <section id="products" className="padding">
      <PopularProducts />
    </section>

    <section className="padding">
      <SuperQuality />
    </section>

    <section id="about-us" className="padding-x py-10">
      <Services />
    </section>

    <section className="padding">
      <SpecialOffer />
    </section>

    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>

    <section  id="contact-us" className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>

    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>

  </main>
)};

export default App;
import React from 'react';
import '../styles/Clients.css';

const FEATURED = [
  'ZARA', 'DECATHLON', 'PUMA', 'DA MILANO', 'H&M',
  'Massimo Dutti', 'Croma', 'Dyson', 'SEPHORA',
  'HIDESIGN', 'Starbucks', 'Modern Bazaar', 'PVR',
];

const CATEGORIES = [
  {
    label: 'Apparel',
    brands: 'Aeropostale, Allen Solly, Armani Exchange, Beverly Hills Polo Club, Brooks Brothers, Calvin Klein Jeans, Calvin Klein Underwear, Coverstory, Emporio Armani, Fab India, Forever New, GAP, H&M, House of Louis Phillipe, Hunkemoller, La Senza, Label Ritu Kumar, Lacoste, Levi\'s, Mango, Massimo Dutti, Scotch & Soda, Superdry, Ted Baker, Tommy Hilfiger, U.S Polo Assn., UCB, Van Heusen, W, Yamamay, Zara, Zodiac',
    theme: 'light',
  },
  {
    label: 'Baby Care',
    brands: 'Chicco, Mother Care, Tommy Hilfiger Kids, U.S. Polo Assn. Kids',
    theme: 'orange',
  },
  {
    label: 'Beauty / Personal Care',
    brands: 'Bath & Body Works, Bobbi Brown, Chanel, Clinique, Colorbar, Dior, Estée Lauder, Forest Essentials, Guardian GNC, Innisfree, Jo Malone, Kai Kama Ayurveda, Kiehl\'s, L\'Occitane, MAC, Maison Des Parfums, Novalash, Perfume Couture, Rosemoore, Sephora, Shahnaz Husain, The Body Shop',
    theme: 'light',
  },
  {
    label: 'Salon / Spas',
    brands: 'Aroma Thai, Fitness First, Heads Up for Tails, Looks, Nails & More, Simar\'s Nail Bar',
    theme: 'light',
  },
  {
    label: 'Departmental Store',
    brands: 'Gelato Vinto, Modern Bazaar, Royce',
    theme: 'orange',
  },
  {
    label: 'Electronics / Appliances / Mobiles',
    brands: 'Croma, Digital House, Dyson, Imagine, M Zone, Samsung, WK Life, Zoot',
    theme: 'light',
  },
  {
    label: 'Eyewear',
    brands: 'Dayal Opticals, Sunglass Hut',
    theme: 'light',
  },
  {
    label: 'Food Service',
    brands: 'AlaTurka, Andrea Eatery, Baskin Robbins, Breadtalk, Burger King, Burma Burma, Chicago Pizza, Fabelle, Hotel Delmaar, IHOP, Joy Luck Moon, Keventers, Khan Chacha, Krispy Kreme, La Cave, Lopera, Mamagoto, My Square, Pa Pa Ya, Punjab Grill, Sancha Tea, Sattvik, Starbucks, The Coffee Bean & Tea Leaf (CBTL), The Crunch Box, The Runway Project, Theobroma, Tibb\'s Frankie, WoW Momo\'s, Yum Yum Cha',
    theme: 'light',
  },
  {
    label: 'Footwear',
    brands: 'Aldo, Cole Haan, Crocs, Dune, Geox, Needle Dust, Steve Madden, Tresmode',
    theme: 'orange',
  },
  {
    label: 'Sportswear',
    brands: 'Adidas, Adidas Kids, Asics, Columbia, Nike, Onitsuka Tiger, Puma, Reebok',
    theme: 'light',
  },
  {
    label: 'Gifts / Music / Toys / Books / Hobbies',
    brands: 'Anyque, Crossword, Gifts of Love, Hamleys, Kriti Creations, Muji',
    theme: 'light',
  },
  {
    label: 'Home',
    brands: 'Chumbak, Good Earth, Home Stop, Le Creuset, Oma',
    theme: 'light',
  },
  {
    label: 'Jewellery',
    brands: 'Geetanjali, Glamlette, Label Kiss, Outhouse Ramaya, Tribe by Amrapali',
    theme: 'orange',
  },
  {
    label: 'Timewear',
    brands: 'Daniel Wellington, Ethos, Rado, Seiko, Swarovski, Tissot, Watches',
    theme: 'light',
  },
  {
    label: 'Accessories',
    brands: 'Accessorize, Aldo, Beau Monde, Charles & Keith, Da Milano, Delsey, Hidesign, Hues & Pastels, Lyn, Satya Paul, Shingora, William Penn',
    theme: 'light',
  },
  {
    label: 'Multiplex / Movie Theatre',
    brands: 'PVR Cinemas',
    theme: 'orange',
  },
];

function Clients() {
  return (
    <section id="clients" className="clients">

      <div className="clients__header">
        <div className="section-chip">Our Portfolio</div>
        <h2 className="section-title">
          Brands We've <span>Partnered With</span>
        </h2>
      </div>

      <p className="clients__subtext">
        Trusted by 100+ iconic brands across India and beyond
      </p>

      {/* Featured logo names */}
      <div className="clients__featured">
        {FEATURED.map((brand) => (
          <div key={brand} className="clients__featured-badge">{brand}</div>
        ))}
      </div>

      {/* All categories */}
      <div className="clients__grid">
        {CATEGORIES.map(({ label, brands, theme }) => (
          <div
            key={label}
            className={`clients__category clients__category--${theme}`}
          >
            <div className="clients__category-label">
              <span className="clients__category-dot" />
              {label}
            </div>
            <p className="clients__category-brands">{brands}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Clients;

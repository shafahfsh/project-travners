import React from "react";
import "../css/Home.css";
import feather from "feather-icons";
import Navbar from '../components/Navbar'
import Card from '../components/Card'

class Home extends React.Component {
  componentDidMount() {
    feather.replace();
  }

  render() {
    return (
      <div>
        <div className='navbar'>
                <Navbar/>
            </div>

        <section className="hero-home">
          <div className="hero-home-content">
            <div className="hero-home-text">
              <h1>
                Selamat Datang di <span>Website Kami</span>
              </h1>
              <p>Kami selalu membuat pelanggan kami nyaman dengan menyediakan sebanyak mungkin pilihan</p>
              <button className="btn-explore">Eksplor</button>
            </div>
            <div className="hero-home-images">
              <img src="img/img1.png" alt="Image 1" />
              <img src="img/img2.png" alt="Image 2" />
              <img src="img/img3.png" alt="Image 3" id="imggg" />
            </div>
          </div>
        </section>

        <section className="features-home">
          <div className="features-home-content">
            <div className="features-home-text">
              <h2>Pelayanan</h2>
              <p>Top pelayanan terbaik kami untuk anda</p>
            </div>
            <div className="features-cards">
              <div className="features-card">
                <img src="img/fitur 1.png" alt="Card Image 1" />
                <h3>Pemandu Disabilitas</h3>
                <p>Pemandu yang akan menjaga penyandang disabilitas</p>
              </div>
              <div className="features-card">
                <img src="img/fitur 2.png" alt="Card Image 2" />
                <h3>Mudah Booking</h3>
                <p>Pengguna dapat dengan mudah memesan tiket</p>
              </div>
            </div>
          </div>
        </section>

        <div className="slider-container">
          <div className="top">
            <div className="judul">
              <h2>Top Destinasi</h2>
              <p>Eksplor top destinasi</p>
            </div>
            <div className="slider-controls">
              <button className="prev">&#10094;</button>
              <button className="next">&#10095;</button>
            </div>
          </div>

          <div className="slider">
            <div className="card" id="1"></div>
            <div className="card" id='2'></div>
          
            <div className="card" id="3"></div>
          </div>
        </div>

        <div className="fasilitas">
          <div className="gambarkiri">
            <img className="img1" src="img/dog.png" alt="" />
            <img className="img2" src="img/border.png" alt="" />
          </div>
          <div className="kontenkanan">
            <div className="teks">
              <h2>AYO BERLIBUR</h2>
              <h1>Kami akan membantu para disabilitas untuk pergi berlibur</h1>
              <p>Bagi anda penyandang disabilitas yang kesulitan untuk melakukan aktivitas berlibur, kami akan membantu memudahkan akses perjalanan anda.</p>
            </div>
            <div className="angka">
              <p>
                33+
                <span>
                  <br />
                  Paket Liburan
                </span>
              </p>
              <p>
                0
                <span>
                  <br />
                  Penginapan
                </span>
              </p>
              <p>
                7
                <span>
                  <br />
                  Disabilitas Travel
                </span>
              </p>
              <p>
                0+
                <span>
                  <br />
                  Pelanggan Bahagia
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="promo">
          <div className="tekskiri">
            <div className="kontenteks">
              <h1>
                Mencoba{" "}
                <span>
                  <br />
                  Petualangan Baru
                </span>
              </h1>
              <p>Kami merekomendasikan beberapa tempat wisata yang ada di DKI Jakarta, dengan demikian para pengguna akan mudah menemukan tempat wisata yang akan dikunjungi</p>
            </div>
            <div className="keunggulan">
              <h2>Keamanan Perjalanan</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, voluptatum accusamus? Doloremque.</p>
              <h2>Harga Ramah di Kantong</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iusto aut illum.</p>
              <h2>Kenyamanan Akomodasi</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quis excepturi repudiandae?</p>
            </div>
          </div>
          <div className="gambarkanan">
            <img className="gambar1" src="img/gambarpromo1.png" alt="" />
            <img className="gambar2" src="img/gambarpromo2.png" alt="" />
            <img className="gambar3" src="img/gambarpromo3.png" alt="" />
            <img className="gambar4" src="img/borderpromo.png" alt="" />
          </div>
        </div>

        
      </div>
    );
  }
}

export default Home;

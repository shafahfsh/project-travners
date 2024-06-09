import React from 'react';
import '../css/About.css';
import Navbar from '../components/Navbar';


const About = () => {
  return (
    <div className='About' >
        <div className='navbar'>
                <Navbar/>
            </div>
            
        
        <section className='about-container'>
            
                 <div className='about-left'>
                    <h2>Tentang <span className="yellow-text">Kami</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dui bibendum, interdum metus vitae, commodo felis. Nam vel metus commodo, gravida mi in, venenatis libero. Vivamus vel orci massa. Nam mattis interdum lobortis. Cras sem lorem, semper eu mollis et, accumsan mattis nisl. Cras sed nisl massa. Etiam dui diam, lacinia nec magna non, egestas ullamcorper dolor.</p>
                </div>
                <div className="about-right">
                    <div className='border-file' >
                        <img className='img-border' src='/images/img-border.png'></img>
                        <div className='box' style={{position: 'absolute', backgroundColor:'#5D50C6', margin: '-428px 0 0 130px', width:'176px', height:'252px'}}>
                            <img src='/images/img-kebersamaan.png'/>
                            <h5 style={{marginTop:'-25px'}}>Kebersamaan</h5>
                            <h5 style={{fontSize:'40px', marginTop:'0'}}>60%</h5>
                        </div>
                        <div className='box' style={{position: 'absolute', backgroundColor:'#FA9A0A', margin: '-563px 0 0 586px', width:'12%', height:'14%'}}></div>
                        <div className='box'style={{position: 'absolute', backgroundColor:'#FACD49', margin: '-428px 0 0 630px', width:'176px', height:'252px'}}></div>
                        <img src='/images/img-logo.png' style={{position:'absolute', width: '272px', margin:'150px 0 0 -350px'}}/>
                    </div>
                </div>
        </section>
        <section className='story-container'>
                <div className='story-image'>
                    <img src='/images/img-story.png' className='img-story'/>
                </div>
                <div className='story-content'>
                    <h2 >Cerita <span className="yellow-text">Kami</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dui bibendum, interdum metus vitae, commodo felis. Nam vel metus commodo, gravida mi in, venenatis libero. Vivamus vel orci massa. Nam mattis interdum lobortis. Cras sem lorem, semper eu mollis et, accumsan mattis nisl. Cras sed nisl massa. Etiam dui diam, lacinia nec magna non, egestas ullamcorper dolor.</p>
                </div>
        </section>

        <section className='end-content'>
            <img src='/images/img-end.png'/>
        </section>


    

    </div>
    

  );
}

export default About;

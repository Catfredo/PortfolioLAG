import React from 'react';
import '../css/MainContent.css'


const MainContent = () =>{
    return(
        <>
        <main>
            <section className='aboutme-section card-sections'>
                <div>
                    <img src="" alt="profile-img" />
                </div>
                <h1 className='aboutme-name'>Luis García</h1>
                <h2 className='aboutme-grade'>
                    Ingeniero de Software
                </h2>
                <p className='aboutme-description'>
                Soy un apasionado desarrollador con experiencia en <span className='text-item'>Java</span> , <span className='text-item'>JavaScript</span>, <span className='text-item'>C#</span>, <span className='text-item'>React</span>  y <span className='text-item'>MySQL</span>. Me encanta la tecnología y la programación, y disfruto creando soluciones innovadoras y eficientes. Estoy siempre en busca de nuevos desafíos y oportunidades para aplicar mis habilidades y aprender nuevas tecnologías.
                </p>
            </section>

            <section className='skills-section card-sections'>
                <h2>Habilidades</h2>
                <div className="card-skills">Java</div>
                <div className="card-skills">C#</div>
                <div className="card-skills">MySQL</div>
                <div className="card-skills">JavaScript</div>
                <div className="card-skills">React</div>
                <div className="card-skills">Git</div>
                <div className="card-skills">GitLab</div>
        
            </section>
            
            <section className='project-section card-sections'>
                <h2>Proyectos</h2>
                <ul>
                    <li>Conway's Game of Life</li>
                    <li>Aplicación de Notas</li>
                    <li>Modulo Bancario</li>
                    <li>Space Invaders</li>
                    <li>Nasa Aplication API</li>
                </ul>
            </section>

            <section className='card-sections'>
                <h2>Educación</h2>
                <ul>
                    <li>Jala University</li>
                    <li>Universidad Veracruzana</li>
                </ul>
            </section>

            <section className='card-sections'>
                <h2>Certificaciones</h2>
                <ul>
                    <li>DEV.F Fronted Developer</li>
                    <li>Java fundamentals</li>
                </ul>
            </section>


        </main>
        </>
    );
};

export default MainContent;
import React from 'react';
import './Home.css';
import Banner from '../imagens/corona.png';

    function Home(){
        return (
        <>
        <h1>Pandemia do Coronavírus</h1>
        <img src={Banner} alt="Noticias" className="banner"></img>
        <h3>Todos sabemos que a melhor forma de evitar é se previnindo.</h3>
        <p>
            Para evitar a propagação da COVID-19: <br/>
            -Lave com frequência as mãos até a altura dos punhos, com água e sabão, ou então higienize com 
            álcool em gel 70%. <br/>
            -Ao tossir ou espirrar, cubra nariz e boca com lenço ou com o braço, e não com as mãos. <br/>
            -Evite tocar olhos, nariz e boca com as mãos não lavadas. <br/>
            -Ao tocar, lave sempre as mãos como já indicado. <br/>
            -Mantenha uma distância mínima de cerca de 2 metros de qualquer pessoa tossindo ou espirrando. <br/>
            -Evite abraços, beijos e apertos de mãos. Adote um comportamento amigável sem contato físico, 
            mas sempre com um sorriso no rosto. <br/>
            -Higienize com frequência o celular e os brinquedos das crianças. <br/>
            -Não compartilhe objetos de uso pessoal, como talheres, toalhas, pratos e copos. <br/>
            -Mantenha os ambientes limpos e bem ventilados. <br/>
            -Evite circulação desnecessária nas ruas, estádios, teatros, shoppings, shows, cinemas e igrejas. <br/> 
            -Se puder, fique em casa. <br/>
            -Se estiver doente, evite contato físico com outras pessoas, principalmente idosos e doentes 
            crônicos, e fique em casa até melhorar. <br/>
            -Durma bem e tenha uma alimentação saudável. <br/>
            -Utilize máscaras caseiras ou artesanais feitas de tecido em situações de saída de sua residência. <br/>
        </p>
        </>
        )
    }

export default Home;





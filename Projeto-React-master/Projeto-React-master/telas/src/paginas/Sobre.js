import React from 'react';
import './Sobre.css';
import corona from '../imagens/coronavirus.jpg'

    function Sobre(){
        return(
            <>
                <h1>Covid-19</h1>
                <h3>O que é</h3>
                <p>A doença do (COVID-19) é uma doença infecciosa causada por um coronavírus 
                    recém-descoberto, o SARS-CoRV-2, que apresenta um quadro clínico que varia de infecções 
                    assintomáticas a quadros respiratórios graves. De acordo com a Organização Mundial de 
                    Saúde (OMS), a maioria dos pacientes com COVID-19 (cerca de 80%) podem ser assintomáticos 
                    e cerca de 20% dos casos podem requerer atendimento hospitalar por apresentarem dificuldade
                    respiratória e desses casos aproximadamente 5% podem necessitar de suporte para o tratamento 
                    de insuficiência respiratória (suporte ventilatório).</p><br/>
                <img src={corona} alt="imagem do coronavírus" className="img_corona"></img><br/>

                <h3>Quais são os sintomas</h3>
                <p>Os sintomas da COVID-19 podem variar de um simples resfriado até uma pneumonia severa. 
                    Sendo os sintomas mais comuns:<br/>

                    -Tosse<br/>
                    -Febre<br/>
                    -Coriza<br/>
                    -Dor de garganta<br/>
                    -Dificuldade para respirar</p><br/>

                <h3>Como é transmitido</h3>
                <p>A transmissão acontece de uma pessoa doente para outra ou por contato próximo por meio 
                    de:<br/>
                • Toque do aperto de mão;<br/>
                • Gotículas de saliva;<br/>
                • Espirro;<br/>
                • Tosse;<br/>
                • Catarro;<br/>
                • Objetos ou superfícies contaminadas, como celulares, mesas, maçanetas, brinquedos, teclados 
                de computador etc.</p><br/>
            </> 
        )
    }

export default Sobre;
import React from 'react';
import './mascaras.css';
import N65 from "../imagens/n95.jpg";
import mascaracirur from "../imagens/mascara_cirurgica.jpg";
import mascacasei from "../imagens/mascara_caseira.jpg";
import mascacasei_filtro from "../imagens/casseira_filtro.jpg";
import Embed from 'react-embed';

    function Mascaras(){
        return (
        <>
            <h3>Saiba quais tipos de máscaras existem, quais as mais eficiêntes 
                e como fazer sua própria máscara.
            </h3>
            
            <h4 className="title_esq">N65</h4>
            <img src={N65} alt="N65" className="n65" ></img>
            <p>Conhecida por ser muito eficaz, seu nome faz alusão ao fato de que pode bloquear pelo menos 95%
               das partículas minúsculas transportadas pelo ar. Ela consegue impedir a passagem de partículas 
               na escala de 0,0001 polegadas (0,3 mícron) de diâmetro. Para se ter uma ideia, um cabelo humano 
               possui entre 70 e 100 mícrons.<br/>

               Essas máscaras são feitas com poliéster e outras fibras sintéticas, incluindo camadas de fibras
               emaranhadas que atual como um filtro para dificultar a passagem de partículas. Apesar de ser 
               apontada como uma das mais eficazes, seu uso é único.<br/>

               Alguns modelos ainda contam com "válvulas de expiração", o que facilita a respiração. Essa 
               proteção é frequentemente usada em construções. Vale lembrar que a máscara com válvula de 
               expiração não deve ser utilizada em áreas que devem ser esterilizadas, como salas de cirurgia 
               de hospitais.<br/>
               
               O ajuste das máscaras N95 é um dos fatores que mais ajudam na proteção. Seu formato curvo 
               oferece aderência ao rosto de quem a utiliza, evitando assim que as partículas possam entrar 
               por algum pequeno espaço aberto.</p><br/>



            <h4>Máscara cirurgica</h4>
            <img src={mascaracirur} alt="máscara cirurgica" className="masc_cirur" ></img>
            <p>Esse tipo de máscara possui diversos modelos. Entretanto, ela é menos eficaz que as N95. 
                Estudos apontam que elas filtram de 60% a 80% das pequenas partículas carregadas pelo ar – 
                isso em condições testadas em laboratório.<br/>

                No entanto, elas podem ser eficazes nos casos em que pessoas estão tossindo ou espirrando, 
                pois, mantém as gotículas dentro da máscara. Elas são totalmente descartáveis e projetadas 
                para serem usadas apenas uma vez. <br/>


                O ajuste no rosto de quem utiliza também não é perfeito, fazendo com que haja o risco de que 
                alguma partícula passe por ela.</p><br/><br/><br/>



            <h4 className="title_esq">Máscara Caseira</h4>
            <img src={mascacasei} alt="máscara caseira" className="masc_caseira"></img>
            <p>Com a falta das máscaras de proteção nos comércios, muitos apelaram para uma versão caseira, 
                feita de tecido. Dependendo do material utilizado na confecção, a proteção oferecida pode ser 
                a mesma de uma versão cirúrgica. No entanto, devido ao momento em que vivemos, qualquer 
                cobertura no rosto é melhor que nada.<br/>

                Uma boa máscara caseira utiliza um material denso o suficiente para capturar partículas virais,
                 mas também deve oferecer facilidade na respiração. Esse é o caso dos tecidos de algodão. 
                 É recomendável a utilização de material com uma contagem de linhas mais alta – o que permite 
                 que pouca luz passe através dela.<br/>


                Além disso, é aconselhável que as produções caseiras tenham duas camadas do material usado e 
                que tenham tamanho suficiente para cobrir o nariz e se estender até abaixo do queixo. Esse 
                modelo é reutilizável, basta lavá-la após o uso. </p><br/>

            

            <h4>Máscara Caseira com filtro</h4>
            <img src={mascacasei_filtro} alt="máscara caseira com filtro" className="caseira_filtro"></img>
            <p>Esse modelo é o mais interessante. Isso porque, além de ser feita de algodão, possui uma espécie
                de bolso interno em que é possível colocar um filtro adicional. Um experimento descobriu que 
                usar duas folhas de papel toalha nesse bolso faz com que a máscara seja capaz de bloquear entre 
                23% e 33% das partículas de 0,3 mícron.<br/>

                Algumas pessoas experimentam usar esse modelo com filtros de ar e sacos de vácuo. Eles podem 
                ser eficazes, mas podem apresentar riscos. Muitos não são respiráveis e podem conter fibras 
                que, se inaladas, representam riscos à saúde.</p><br/><br/><br/><br/><br/><br/>

            <h4> Veja a seguir como fazer sua mascara caseira.</h4>
            <Embed url='https://www.youtube.com/watch?v=wBU2gDIHuaQ' />

            

            
        </>
        )
    }

export default Mascaras;

import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import bookTitle from '../control/title';
import chapters from '../control/chapters';

const Chapter1 = ({
  onNext, 
  goToContents, 
  goToCover }) => {
  const chapterNumber = 1;

  const chapterTitle = chapters[chapterNumber].title;
  const chapterRoman = chapters[chapterNumber].chap;

  useEffect(() => {
    bookTitle(chapterTitle); 
    return () => {
      document.title = "As Aventuras de Alice no País das Maravilhas"; 
    };
  }, [chapterTitle]);

  return (
    <>
      <div className="page chapter_page">
        <span className="chapter_subtitle">{chapterRoman}</span>
        <h2 className="chapter_title">{chapterTitle}</h2>
        <img className="chapter_img_abertura" src="https://via.placeholder.com/25" alt="Imagem Placeholder"/>
        <div className="chapter_content">
          <p className="chapter_text">Alice estava cansada de ficar sentada sem ter nada para fazer. Uma ou duas vezes, ela espiou o livro que sua irmã lia a seu lado, mas ele não tinha figuras nem diálogos. “E de que serve um livro,” pensou Alice, “sem figuras ou diálogos?”</p>
          <p className="chapter_text">Ela pensava consigo mesma (na medida em que podia, já que o calor a fazia sentir-se muito sonolenta e lerda) se o esforço de levantar-se para colher margaridas valeria o prazer de fazer uma guirlanda. Foi quando, de repente, um Coelho Branco de olhos rosados passou correndo perto dela.</p>
          <p className="chapter_text">Não havia nada de tão extraordinário nisso; e Alice não achou tão estranho ouvir o Coelho dizer para si mesmo: “Oh céus! Oh céus! Vou me atrasar!” (quando pensou nisso mais tarde, ela percebeu que deveria ter se espantado, mas na hora tudo parecia muito natural); mas quando o Coelho tirou um relógio do bolso do colete, olhou para ele e saiu correndo apressado, Alice se levantou de um salto, pois lhe ocorreu que nunca tinha visto um coelho com um bolso de colete, muito menos com um relógio para tirar de lá. Queimando de curiosidade, ela atravessou o campo correndo atrás dele, e, felizmente, chegou bem a tempo de vê-lo desaparecer dentro de um grande buraco de coelho sob a cerca.</p>
          <p className="chapter_text">No mesmo instante, Alice entrou atrás dele, sem sequer considerar como iria sair de lá.</p>
          <p className="chapter_text">A toca do coelho seguia reto como um túnel por algum tempo, e então desceu abruptamente, tão de repente que Alice não teve um momento sequer para pensar em parar antes de se ver caindo por um poço muito profundo.</p>
          <p className="chapter_text">Ou o poço era muito profundo, ou ela caía muito devagar, pois teve bastante tempo, enquanto descia, para olhar ao redor e se perguntar o que aconteceria em seguida. Primeiro, tentou olhar para baixo e descobrir para onde estava indo, mas estava escuro demais para ver qualquer coisa; então olhou para os lados do poço e percebeu que estavam cheios de armários e estantes de livros; aqui e ali, viu mapas e quadros pendurados em ganchos. Ela pegou um pote de uma das prateleiras enquanto passava; estava rotulado "GELÉIA DE LARANJA", mas, para sua grande decepção, estava vazio. Ela não quis deixar o pote cair com medo de machucar alguém, então conseguiu colocá-lo em um dos armários enquanto caía.</p>
          <p className="chapter_text">"Bem!" pensou Alice consigo mesma, "depois de uma queda dessas, não vou achar nada demais cair de escada! Vão achar que sou tão corajosa em casa! Ora, nem diria nada, mesmo que eu caísse do telhado da casa!" (O que provavelmente era verdade.)</p>
          <p className="chapter_text">Caindo, caindo, caindo. Será que a queda nunca chegaria ao fim? "Eu me pergunto quantas milhas já caí até agora?" disse ela em voz alta. "Devo estar chegando perto do centro da Terra. Deixe-me ver: isso seria a cerca de quatro mil milhas de profundidade, eu acho…" (pois, como você sabe, Alice tinha aprendido várias coisas desse tipo nas aulas da escola, e embora essa não fosse a melhor oportunidade para exibir seu conhecimento, já que não havia ninguém para escutá-la, ainda era uma boa prática repetir) "... sim, essa é mais ou menos a distância certa, mas então me pergunto a que Latitude ou Longitude já cheguei?" (Alice não fazia ideia do que era Latitude ou Longitude, mas achava que eram palavras pomposas e bonitas de se dizer.)</p>
          <p className="chapter_text">Logo ela começou de novo. "Eu me pergunto se vou cair direto através da Terra! Como vai ser engraçado sair entre as pessoas que andam com as cabeças para baixo! Os  antipáticos, acho…" (ela ficou até contente por não haver ninguém ouvindo dessa vez, já que não parecia ser a palavra certa) "mas terei que perguntar como se chama o país, você sabe. Por favor, senhora, este lugar é a Nova Zelândia ou a Austrália?" (e ela tentou fazer uma reverência enquanto falava — imagine fazer uma reverência enquanto cai pelo ar! Você acha que conseguiria fazer isso?) "E que menininha ignorante ela vai pensar que sou por perguntar! Não, não vai dar para perguntar: talvez eu veja isso escrito em algum lugar."</p>
          <p className="chapter_text">Caindo, caindo, caindo. Não havia mais nada a fazer, então Alice logo começou a falar de novo. "A Dinah vai sentir muito a minha falta hoje à noite, eu acho!" (Dinah era a gata.) "Espero que se lembrem de dar o pires de leite dela na hora do chá. Dinah, minha querida! Eu queria que você estivesse aqui comigo! Não tem ratos no ar, temo eu, mas você talvez pegasse um morcego, e isso é bem parecido com um rato, sabe. Mas será que gatos comem morcegos?" E aqui Alice começou a ficar um pouco sonolenta, e continuou falando para si mesma, de uma maneira meio sonhadora: "Gatos comem morcegos? Gatos comem morcegos?" e às vezes, "Morcegos comem gatos?" pois, como você vê, já que ela não sabia responder a nenhuma das perguntas, não fazia muita diferença como ela as formulava. Ela sentiu que estava cochilando e tinha acabado de começar a sonhar que estava andando de mãos dadas com Dinah e dizendo muito seriamente para ela: "Então, Dinah, me diga a verdade: você já comeu um morcego?", quando, de repente, thump! thump! ela caiu sobre uma pilha de gravetos e folhas secas, e a queda acabou.</p>
          <p className="chapter_text">Alice não se machucou nem um pouco e logo se levantou num pulo: olhou para cima, mas estava tudo escuro sobre sua cabeça; à sua frente havia outro corredor longo, e o Coelho Branco ainda estava à vista, correndo apressado por ele. Não havia tempo a perder: lá foi Alice como o vento, e chegou a tempo de ouvir o coelho dizer, ao virar uma esquina, "Oh, minhas orelhas e bigodes, como está ficando tarde!"</p>
          <p className="chapter_text">Ela estava bem atrás dele quando virou a esquina, mas o Coelho já não estava mais à vista: ela se viu em um corredor longo e baixo, iluminado por uma fileira de lâmpadas penduradas no teto.</p>
          <p className="chapter_text">Havia portas ao redor de todo o salão, mas estavam todas trancadas; e depois de ter ido de um lado a outro, tentando todas as portas, Alice caminhou tristemente pelo meio do corredor, imaginando como faria para sair de lá.</p>
          <p className="chapter_text">De repente, ela se deparou com uma pequena mesa de três pernas, toda feita de vidro sólido; não havia nada sobre ela, exceto uma pequena chave dourada, e o primeiro pensamento de Alice foi que ela poderia pertencer a uma das portas do salão; mas, infelizmente, ou as fechaduras eram muito grandes, ou a chave era muito pequena, mas, de qualquer forma, não abriu nenhuma delas. No entanto, na segunda tentativa, Alice encontrou uma cortina baixa que não havia notado antes, e atrás dela havia uma pequena porta, com cerca de quinze centímetros de altura: ela tentou a pequena chave dourada na fechadura e, para sua grande alegria, ela serviu!</p>
          <p className="chapter_text">Alice abriu a porta e descobriu que ela levava a um pequeno corredor, não muito maior que uma toca de rato: ela se ajoelhou e olhou pelo corredor até o jardim mais lindo que você já viu. Como ela desejava sair daquele salão escuro e passear entre os canteiros de flores brilhantes e aquelas fontes refrescantes, mas ela não conseguia nem mesmo passar a cabeça pela porta; "e mesmo que minha cabeça passasse", pensou a pobre Alice, "não serviria de muito sem meus ombros. Oh! como eu gostaria de me encolher como um telescópio! Acho que conseguiria, se ao menos soubesse como começar". Tantas coisas estranhas haviam acontecido ultimamente que Alice começara a pensar que pouquíssimas coisas eram realmente impossíveis.</p>
          <p className="chapter_text">Parecia não haver utilidade em esperar pela pequena porta, então ela voltou para a mesa, na esperança de encontrar outra chave sobre ela, ou, pelo menos, um livro de regras sobre como encolher pessoas como telescópios: desta vez, ela encontrou uma pequena garrafa sobre a mesa, ("que certamente não estava aqui antes", disse Alice,) e ao redor do gargalo da garrafa havia uma etiqueta de papel, com as palavras "BEBA-ME" impressas lindamente em grandes letras.</p>
          <p className="chapter_text">Tudo bem dizer "Beba-me", mas a sábia Alice não ia fazer isso com pressa. "Não, eu vou olhar primeiro", disse ela, "e ver se está marcado 'veneno' ou não"; tinha lido várias pequenas histórias legais sobre crianças que se queimaram, foram comidas por animais selvagens e outras coisas desagradáveis, tudo porque não lembraram das regras simples que seus amigos lhes ensinaram: como, por exemplo, que um atiçador em brasa vai te queimar se você segurá-lo por muito tempo; e que, se você cortar seu dedo muito profundamente com uma faca, geralmente ele sangra; e ela nunca esqueceu que, se você beber muito de uma garrafa marcada 'veneno', é quase certo que isso vai te fazer mal, mais cedo ou mais tarde.</p>
          <p className="chapter_text">No entanto, esta garrafa não estava marcada com "veneno", então Alice se aventurou a prová-la, e, ao descobrir que era muito gostosa, (tinha, na verdade, um sabor misto de torta de cereja, creme, abacaxi, peru assado, caramelo e torrada com manteiga quente), ela logo terminou de bebê-la.</p>
          <p className="chapter_ret">* * * * </p>
          <p className="chapter_text">"Que sensação curiosa!" disse Alice; "Devo estar encolhendo como um telescópio." </p>
          <p className="chapter_text">E assim era mesmo: agora ela tinha apenas dez polegadas de altura, e seu rosto se iluminou com o pensamento de que estava finalmente do tamanho certo para passar pela pequena porta para aquele lindo jardim. Primeiro, no entanto, ela esperou alguns minutos para ver se encolheria ainda mais: sentiu-se um pouco nervosa com isso; "pois pode acabar, sabe", disse Alice para si mesma, "comigo desaparecendo completamente, como uma vela. Fico imaginando como seria então?" E tentou imaginar como seria a chama de uma vela depois de apagada, já que não conseguia lembrar de ter visto algo assim.</p>
          <p className="chapter_text">Depois de um tempo, percebendo que nada mais acontecia, ela decidiu entrar no jardim imediatamente; mas, pobre Alice! Quando chegou à porta, descobriu que tinha esquecido a pequena chave dourada, e quando voltou à mesa para pegá-la, percebeu que não conseguia alcançá-la: ela podia vê-la perfeitamente através do vidro, e tentou de todas as maneiras subir em uma das pernas da mesa, mas era muito escorregadia; e depois de se cansar de tanto tentar, a pobrezinha sentou-se e começou a chorar. </p>
          <p className="chapter_text">"Vamos, não adianta chorar assim!" disse Alice para si mesma, com certa severidade; "Aconselho-a a parar imediatamente!" Ela geralmente se dava bons conselhos, (embora raramente os seguisse), e às vezes se repreendia tão severamente a ponto de trazer lágrimas aos olhos; certa vez, lembrou-se de tentar bater nas próprias orelhas por ter se trapaceado em um jogo de críquete que estava jogando contra si mesma, pois essa criança curiosa adorava fingir ser duas pessoas. "Mas não adianta agora," pensou a pobre Alice, "fingir ser duas pessoas! Ora, mal há o suficiente para fazer uma pessoa respeitável!"</p>
          <p className="chapter_text">Logo, seu olhar caiu sobre uma pequena caixa de vidro que estava debaixo da mesa: ela a abriu e encontrou um bolo muito pequeno, no qual as palavras "COMA-ME" estavam lindamente escritas com passas. "Bem, eu vou comê-lo," disse Alice, "e se me fizer crescer, poderei alcançar a chave; e se me fizer encolher, poderei passar por baixo da porta; de qualquer maneira, entrarei no jardim, e não me importo com o que acontecer!"</p>
          <p className="chapter_text">Ela comeu um pedacinho e disse ansiosamente para si mesma: "De que lado? De que lado?", segurando a mão no topo da cabeça para sentir de que lado estava crescendo, e ficou bastante surpresa ao perceber que permanecia do mesmo tamanho: claro, isso geralmente acontece quando se come bolo, mas Alice já estava acostumada a esperar coisas extraordinárias, que parecia bastante entediante e bobo que a vida continuasse do jeito comum.</p> 
          <p className="chapter_text">Então, ela se pôs a trabalhar e logo terminou de comer o bolo.</p>  
          <p className="chapter_ret">* * * *</p>  
          <img className="chapter_img" src="https://via.placeholder.com/200" alt="Imagem Placeholder"/>

        </div>
        
        <Navigation 
          goToCover={goToCover}  
          onNext={onNext} 
          goToContents={goToContents} />
      </div>
    </>
  );
};

export default Chapter1;

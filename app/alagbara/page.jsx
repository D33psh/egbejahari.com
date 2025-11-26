import Image from "next/image"
import style from "./style.module.css"
import Link from "next/link"

import { IoLogoInstagram } from "react-icons/io";

export default function Alagbara() {
  return (
    <div className={style.container}>
      <section className={style.one}>
        <h1 className={style.title}>O Sagrado Masculino</h1>

        <span className={style.subtitle}>Grupo do Homem Alagbara</span>
        <div className={style.divider}></div>

        <button className={style.button}>
          <Link className={style.link} href="#two">Saiba Mais</Link>
        </button>
      </section>
      <section className={style.two} id="two">
        <Image src='/alagbara-background.jpg' alt="Alagbara" className={style.roudedAlagbara} width={716} height={716} />
        
        <div className={style.textBox}>
          <h2 className={style.title}>Àlàgbára – Força, Consciência e Sagrado Masculino</h2>

          <span className={style.subtitle}>
            O Àlàgbára nasce como um espaço de encontro, autoconhecimento e reconexão com a essência do masculino sagrado. Nossa missão é resgatar valores ancestrais, cultivar a presença consciente e fortalecer homens que buscam equilíbrio entre corpo, mente e espírito.
            <br /> <br />
            Aqui, o homem é convidado a olhar para dentro, reconhecer suas potências, curar suas feridas e transformar sua forma de estar no mundo. Trabalhamos com rodas de estudos, vivências, terapias e rituais que unem sabedoria ancestral, espiritualidade e práticas contemporâneas de cuidado e autodesenvolvimento.
            <br /> <br />
            O caminho do Àlàgbára é um chamado para viver com mais amor, respeito e responsabilidade consigo mesmo, com os outros e com a natureza.
            <br /> <br />
            Este é um espaço de acolhimento, onde cada homem pode se lembrar de sua verdadeira força: aquela que não oprime, mas que sustenta; que não fere, mas que protege; que não se perde, mas se renova em cada passo.
          </span>
        </div>
      </section>
      <section className={style.three}>
        <div className={style.textBox}>
          <span className={style.title}>
            JURAMENTO DO HOMEM ÀLÀGBÁRA
            <br /><br />
            “Eu me comprometo a ser um homem inteiro.
            A reconhecer minhas feridas sem deixar que elas me definam.
            A respeitar os que vieram antes de mim e a me tornar um espelho digno para os que virão.
            A não me esconder na força nem me perder na fraqueza.
            Eu escolho caminhar com verdade, integridade e coragem.”
          </span>
          <span className={style.title}>
            ESTRUTURA DO PROJETO
            • Grupo exclusivo no WhatsApp
            Reflexões, desafios, partilhas e conteúdos semanais
            <br /><br />
            • Encontros online
            Meditações guiadas, rodas de conversa, vivências e exercícios
            <br /><br />
            • Material complementar
            Apostila, vídeos, frases e práticas guiadas para o cotidiano
            <br /><br />
            • Rede de apoio
            Espaço para trocas, escuta ativa e fortalecimento entre irmãos
          </span>
        </div>
      </section>
      <section className={style.four}>
        <div className={style.textBox}>
          <span className={style.secoundTitle}>
            FUNDAMENTOS DO PROJETO
            <br /><br />
            • Masculinidade consciente e restaurada
            <br /><br />
            • Propósito, escuta e maturidade emocional
            • Espiritualidade livre, intuitiva e integral
            <br /><br />
            • Ancestralidade como fonte e caminho
            <br /><br />
            • Práticas de silêncio, corpo e reconexão
          </span>
        </div>
        
        <Image src="/alagbara-coração.jpg" alt="Alagbara" width={736} height={736} className={style.hearthAlagbara}/>
      </section>
      <section className={style.five}>
        <div className={style.textBox}>
          <span className={style.secoundTitle}>
            O MASCULINO QUE CONSTRUÍMOS
            • Forte, mas não bruto
            <br /><br />
            <br /><br />
            • Sensível, mas não frágil
            <br /><br />
            • Firme, mas não opressor
            <br /><br />
            • Em paz com sua sombra e sua luz
            <br /><br />
            • Capaz de proteger sem ferir e de guiar sem controlar
          </span>
        </div>
        
        <Image src="/alagbara-meditação.jpg" alt="Alagbara" width={736} height={736} className={style.hearthAlagbara}/>
      </section>
      <section className={style.six}>
        <div className={style.textBox}>
          <h2 className={style.title}>Depoimentos</h2>

          <div className={style.depoiment}>
            <span className={style.depoimentText}>
              "Não participo dos encontros presenciais, nem faço parte oficialmente do grupo, mas apenas por seguir o Àlàgbára aqui no Instagram já sinto diferença na minha vida.
              As palavras, reflexões e ensinamentos que encontro nas postagens me ajudam a olhar para mim com mais respeito e consciência.
              É como se cada mensagem fosse um chamado para despertar algo que já estava dentro de mim, mas que eu não sabia como acessar.
              Sou grato por esse espaço existir e por poder receber essa força mesmo à distância. Àṣẹ!
            </span>
            <span className={style.depoimentName}>
              Junior Perez
            </span>
          </div>

          <div className={style.depoiment}>
            <span className={style.depoimentText}>
              "Estou fazendo a terapia transpessoal guiada pelo Àlàgbára e, em apenas 21 dias, já consegui me libertar de traumas que carregava há anos. Sinto leveza, clareza e um renascimento dentro de mim. Gratidão, Àṣẹ!"
            </span>
            <span className={style.depoimentName}>
              Luciano Silva
            </span>
          </div>

          <div className={style.depoiment}>
            <span className={style.depoimentText}>
              "Antes de chegar ao grupo Àlàgbára eu carregava dores, culpas e traumas que me impediam de ser quem eu realmente sou. Aqui encontrei algo que nunca tive: irmãos que me olham sem julgamento e me levantam quando eu penso em cair.
              Através das partilhas, rituais e do acolhimento, consegui ressignificar minha história. Hoje me sinto mais inteiro, mais forte e com coragem para honrar o homem que habita em mim.
              Sou grato ao Àlàgbára e a cada irmão que caminhou comigo nessa jornada. Àṣẹ!"
            </span>
            <span className={style.depoimentName}>
              Gustavo Alves 
            </span>
          </div>
        </div>
        
        <Image src="/alagbara-luz.jpg" alt="Alagbara" width={736} height={736} className={style.luzAlagbara}/>
      </section>
      <section className={style.seven}>
        <div className={style.textBox}>
          <h2 className={style.title}>Entre em contato</h2>

          <span className={style.contact}>
            contato@egbejahari.com<br/>
            (11)95965-9758
          </span>

          <h2 className={style.title}>Me acompanhe nas redes</h2>
          <Link href="https://www.instagram.com/alagbara.sagradomasculino?igsh=MXBycGk4NGtzbG42dw==" className={style.socialmidia}><IoLogoInstagram /></Link>

          <Link href="/" className={style.title}>Voltar ao Egbe Jahari</Link>
        </div>
        
        <Image src="/BabaJahari_2.png" alt="Alagbara" width={736} height={736} className={style.hearthAlagbara}/>
      </section>
    </div>
  )
}
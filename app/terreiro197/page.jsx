import Image from "next/image";
import style from "./style.module.css";
import Link from "next/link";

import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";

export default function Alagbara() {
  return (
    <div className={style.container}>
      <section className={style.one}>
        <h1 className={style.title}>Terreiro 197</h1>

        <span className={style.mainsubtitle}>Culto aos Guardioes</span>
        <div className={style.divider}></div>

        <button className={style.button}>
          <Link className={style.link} href="#two">
            Saiba Mais
          </Link>
        </button>
      </section>
      <section className={style.two} id="two">
        <Image
          src="/logo-terreiro.jpg"
          alt="Alagbara"
          className={style.roudedAlagbara}
          width={716}
          height={716}
        />

        <div className={style.textBox}>
          <span className={style.subtitle}>
            O Terreiro 197 é a morada sagrada dos Guardiões, onde Exu e
            Pombogira se fazem presentes com sua força viva e transformadora.
            Aqui, dentro do Ilê Àṣẹ Egbé Jàhári, cultivamos um culto dedicado
            àqueles que transitam entre os mundos, mensageiros e guardiões dos
            caminhos, os que abrem portas e revelam verdades ocultas. Nosso
            trabalho é firmado na ancestralidade dos mortos cujas histórias
            conhecemos e honramos. É através dessa ligação direta com os
            espíritos que caminharam a terra, que mantemos viva a chama do axé,
            dando continuidade ao legado daqueles que antecederam nossas
            passadas. O culto é conduzido com disciplina, respeito e entrega,
            sempre com dedicação aos Guardiões que regem esta casa: Exu Marabô,
            senhor de sabedoria, movimento e firmeza, e Maria Mulambo, senhora
            de encantos, força e acolhimento. Juntos, eles comandam os
            trabalhos, trazendo equilíbrio entre o poder masculino e a energia
            feminina, entre a vida e a morte, entre o visível e o invisível.
            <br />
            <br />
            O Terreiro 197 não é apenas um espaço físico, mas um portal onde a
            força de Exu e Pombogira se manifesta em sua plenitude. Cada vela
            acesa, cada palavra entoada, cada oferenda depositada carrega o peso
            da tradição, da disciplina e da ancestralidade.
            <br />
            <br />
            Aqui, o culto aos Guardiões é vivido com seriedade, entrega e
            respeito, sustentado pela firmeza espiritual e pela devoção aos que
            atravessam caminhos para abrir os nossos.
            <br />
            <br />
            Laroyê Exu, Mojubá! Saravá Maria Mulambo!
          </span>
        </div>
      </section>
      <section className={style.three}>
        <div className={style.textBox}>
          <span className={style.secondSubtitle}>
            Servir a Exu e Pombogira é reconhecer neles a presença dos espíritos
            ancestrais, aqueles que um dia caminharam entre os vivos e hoje
            habitam o mistério do invisível. São mortos que conhecemos,
            espíritos que tiveram vida, história, escolhas e caminhos, e que
            através de nossa devoção voltam a pulsar com força e presença.
            <br />
            <br />
            Quando acendemos a vela, derramamos a bebida ou entoamos a reza,
            estamos dando a eles a possibilidade de se manifestarem novamente,
            de atravessar a ponte entre o mundo dos vivos e o mundo dos mortos.
            É nesse ato de servir que fortalecemos o vínculo, oferecendo vida
            para que eles nos ofereçam amparo.
            <br />
            <br />
            Exu e Pombogira são guardiões que nos acompanham com firmeza e
            verdade. Não são abstrações, mas espíritos reais, que conhecem as
            dores humanas, as paixões, os desafios e as batalhas da existência.
            Ao alimentarmos sua força, eles nos devolvem proteção, movimento,
            abertura de caminhos, sabedoria e justiça.
            <br />
            <br />
            Servir aos Guardiões é reconhecer a interdependência entre os
            mundos: damos vida a quem já partiu, e recebemos deles o apoio
            necessário para viver com firmeza, coragem e direção. Assim, a
            ancestralidade se torna presença, e a morte se transforma em aliança
            de poder.
          </span>
        </div>
      </section>
      <section className={style.four}>
        <Image
          src="/BabaJahari_3.png"
          alt="Babá Jahari"
          width={560}
          height={910}
          className={style.hearthAlagbara}
        />

        <div className={style.textBox}>
          <span className={style.secondSubtitle}>
            Servir a Exu e Pombogira é assumir um compromisso com os mortos que
            nos acompanham. Não é um culto de vaidade, mas de responsabilidade:
            dar vida a esses espíritos exige disciplina, respeito e verdade.
            Quem caminha com os Guardiões precisa honrar cada passo, pois deles
            recebemos amparo na mesma medida em que sustentamos sua força.
          </span>
        </div>
      </section>
      <section className={style.seven}>
        <div className={style.secondTextBox}>
          <h2 className={style.therdyTitle}>Entre em contato</h2>

          <span className={style.contact}>
            contato@egbejahari.com
            <br />
            (11)95965-9758
          </span>

          <h2 className={style.therdyTitle}>Me acompanhe nas redes</h2>
          <Link
            href="http://instagram.com/terreiro197"
            className={style.socialmidia}
          >
            <IoLogoInstagram />
          </Link>

          <Link href="/" className={style.therdyTitle}>
            Voltar ao Egbe Jahari
          </Link>
        </div>

        <Image
          src="/BabaJahari_4.png"
          alt="Babá Jahari"
          width={414}
          height={910}
          className={style.relativeImage}
        />

        <Image
          src="/BabaJahari_5.png"
          alt="Alagbara"
          width={736}
          height={736}
          className={style.secondHearthAlagbara}
        />
      </section>
    </div>
  );
}

import Image from "next/image";
import style from "./style.module.css";
import Link from "next/link";

import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";

export default function Alagbara() {
  return (
    <>
      <section className={style.one}>
        <span className={style.mainsubtitle}>Ilé Ase Egbe Jàhári</span>

        <h1 className={style.title}>
          Centro Espiritual Caboclo Flecha Dourada
        </h1>

        <button className={style.button}>
          <Link className={style.link} href="#two">
            Saiba Mais
          </Link>
        </button>
      </section>
      <section className={style.two} id="two">
        <Image
          src="/logo-umbanda.png"
          alt="Centro Caboclo Flecha Dourada"
          className={style.roudedAlagbara}
          width={716}
          height={716}
        />

        <div className={style.textBox}>
          <h2>Centro Espiritual Caboclo Flecha Dourada</h2>
          <span className={style.secondSubtitle}>
            Integração com o Ilê Àṣẹ Egbé Jàhári
            <br />
            <br />
            O Centro Espiritual Caboclo Flecha Dourada é parte viva do nosso
            Ilê, dedicado às tradições da Umbanda.
            <br />
            <br />
            Um espaço sagrado onde o axé dos Caboclos, Pretos Velhos,
            Pombogiras, Exus e demais linhas de trabalho se manifesta para
            orientar, curar e abrir caminhos.
          </span>
        </div>
      </section>
      <section className={style.three}>
        <div className={style.textBox}>
          <h2>Umbandano Ilê</h2>
          <span className={style.secondSubtitle}>
            <br />
            <br />
            realização de giras e rituais de Umbanda em datas definidas.
            <br />
            <br />
            Culto conduzido com respeito à ancestralidade, à espiritualidade
            brasileira e ao compromisso com a caridade.
          </span>
        </div>
        <div className={style.textBox}>
          <h2>Atendimento Gratuito</h2>
          <span className={style.secondSubtitle}>
            <br />
            <br />
            Os atendimentos espirituais são realizados em dias específicos,
            sempre de forma gratuita.
            <br />
            <br />
            Nesses encontros, as entidades oferecem aconselhamento, passes de
            limpeza, orientação e fortalecimento espiritual
          </span>
        </div>
      </section>
      <section className={style.four}>
        <div className={style.textBox}>
          <br />
          <br />
          <h2>Atendimento Gratuito</h2>
          <span className={style.blackSecondSubtitle}>
            <br />
            <br />
            <br />
            <br />
            Patrono espiritual deste espaço, o Caboclo Flecha Dourada representa
            a força da mata, a sabedoria dos ancestrais indígenas e o
            direcionamento certo para os filhos de fé.
            <br />
            <br />É guia de proteção, coragem e luz.
          </span>
        </div>

        <Image
          src="/Rosarios.jpg"
          alt="Rosarios"
          width={560}
          height={910}
          className={style.hearthAlagbara}
        />
      </section>
      <section className={style.five}>
        <div className={style.textBox}>
          <h2 className={style.secoundTitle}>Compromisso com a Comunidade</h2>
          <span className={style.blackSecondSubtitle}>
            <br />
            <br />
            o Centro busca acolher a todos que chegam em busca de apoio
            espiritual.
            <br />
            <br />
            Mantemos um trabalho pautado no amor, na disciplina espiritual e na
            força dos Orixás e entidades da Umbanda.
          </span>

          <h2 className={style.secoundTitle}>Participação</h2>
          <span className={style.blackSecondSubtitle}>
            As giras e atendimentos são abertos ao público.
            <br />
            <br />
            Todos são bem-vindos, independentemente de sua religião, crença ou
            trajetória espiritual.
          </span>
        </div>
        <Image
          src="/FiosDeConta.jpg"
          alt="Fios de Conta"
          width={560}
          height={910}
          className={style.hearthAlagbara}
        />
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
            href="https://www.instagram.com/egbejahari?igsh=dGlia3pla3VmbDZ0"
            className={style.socialmidia}
          >
            <IoLogoInstagram />
          </Link>

          <Link href="/" className={style.therdyTitle}>
            Voltar ao Egbe Jahari
          </Link>
        </div>
        <Image
          src="/BabaJahari_6.png"
          alt="Fios de Conta"
          width={560}
          height={910}
          className={style.hearthAlagbara}
        />
      </section>
    </>
  );
}

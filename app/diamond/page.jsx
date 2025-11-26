import Image from "next/image";
import style from "./style.module.css";
import Link from "next/link";

export default function Alagbara() {
  return (
    <>
      <section className={style.one}>
        <Image
          src="/GrupoDiamond.jpg"
          alt="Grupo Diamante"
          width={300}
          height={290}
        />

        <h1 className={style.title}>Seja Membro</h1>

        <br />
        <br />

        <Image
          src="/arrowDonw.png"
          alt="Role para baixo"
          width={50}
          height={50}
        />
        <br />
      </section>
      <section className={style.two} id="two">
        <div className={style.textBox}>
          <h2 className={style.title}>
            O melhor grupo para aprender sobre Òrìṣà
          </h2>

          <div className={style.whiteTextBox}>
            <span className={style.subtitle}>
              <strong>Vantagens para os Membros</strong>
              <br />
              <br />
              Acesso a Conteúdo Exclusivo
              <br />
              &nbsp;&nbsp; ○ Materiais produzidos especialmente para os membros,
              com aprofundamento nos fundamentos espirituais.
              <br />
              &nbsp;&nbsp; ○ Estudos avançados que não estão disponíveis de
              forma aberta ao público.
            </span>
          </div>
        </div>
      </section>
      <section className={style.three}>
        <div className={style.textBox}>
          <h2 className={style.title}>
            Mais de 3 anos de conteúdo Disponível no grupo e muitas surpresas!!!
          </h2>
          <Image src="/t.png" alt="Telegram" width={80} height={80} />

          <div className={style.box}>
            <span className={style.boxTitle}>E-BOOKS EXCLUSIVOS</span>
            <span className={style.boxContent}>
              Apostilas digitais Materiais práticos e didáticos para consulta,
              rezas, cânticos e rituais Atualizações constantes com novos
              lançamentos.
            </span>
          </div>

          <div className={style.box}>
            <span className={style.boxTitle}>REUNIÕES SECRETAS</span>
            <span className={style.boxContent}>
              Apostilas digitais Materiais práticos e didáticos para consulta,
              rezas, cânticos e rituais Atualizações constantes com novos
              lançamentos.
            </span>
          </div>

          <div className={style.box}>
            <span className={style.boxTitle}>E-BOOKS EXCLUSIVOS</span>
            <span className={style.boxContent}>
              Encontros reservados apenas para membros, com aprofundamento em
              temas avançados. Espaço de troca, onde dúvidas são esclarecidas
            </span>
          </div>
        </div>
      </section>
      <section className={style.four}>
        <div className={style.textBox}>
          <h2 className={style.secoundTitle}>
            Descontos especiais em Lançamentos
          </h2>
          <span className={style.blackSecondSubtitle}>
            Condições especiais em cursos, materiais, rituais e projetos ligados
            ao Ilê.
            <br />
            <br />
            Acesso antecipado a novidades e lançamentos exclusivos.
          </span>

          <strong className={style.subtitleBold}>Acesso Vitalicio</strong>
        </div>
      </section>
      <section className={style.seven}>
        <div className={style.secondTextBox}>
          <span className={style.buyNow}>
            <button className={style.button}>
              <Link
                href="https://pay.kiwify.com.br/jfMG2xa"
                className={style.link}
              >
                Comprar Agora
              </Link>
            </button>
            <span className={style.buyNowPrice}>
              Por 3x de $53,53
              <span className={style.buyNowPriceSmall}>Ou $150,00 a vista</span>
            </span>

            <span>E acesse ja todo o conteúdo</span>
          </span>

          <Image
            src="/GrupoDiamond.jpg"
            alt="Grupo Diamante"
            width={150}
            height={150}
          />

          <button className={style.button}>
            <Link href="/" className={style.link}>
              Voltar ao Início
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}

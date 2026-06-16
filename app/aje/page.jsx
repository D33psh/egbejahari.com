import Image from "next/image";
import style from "./style.module.css";
import Link from "next/link";

import { Instagram } from "lucide-react";

export default function Alagbara() {
  return (
    <div className={style.container}>
      <section className={style.one}>
        <Image
          src="/aje-home.png"
          alt="Ajê"
          width={565 / 1.4}
          height={799 / 1.4}
        />
      </section>
      <section className={style.two} id="two">
        <div className={style.textBox}>
          <h2 className={style.secoundTitle}>
            Quebre as amarras que te limitam e descubra as virtudes do caráter
            que são essenciais para atrair a prosperidade. A chave para a
            prosperidade está em suas mãos, e neste ebook você irá aprender como
            usá-la da melhor forma possível.
          </h2>
        </div>
      </section>

      <section className={style.five}>
        <div className={style.textBox}>
          <h2 className={style.title}>Conteúdo:</h2>
          <span className={style.secoundTitle}>
            🐚 A dona da morada da Riqueza. <br />
            🐚 Orunmila e Ajê. <br />
            🐚 Tenha uma Mente Próspera. <br />
            🐚 Se cerque de prosperidade. <br />
            🐚 Quebre as Amarras. <br />
            🐚 Ajê e a Organização. <br />
            🐚 As Virtudes do Caráter. <br />
            🐚 Ajê e Seu lar. <br />
            🐚 A chave para a Prosperidade. <br />
            🐚 Protção contra inveja financeira. <br />
            🐚 O caminho para a Riqueza. <br />
            🐚 Procedimentos do Culto. <br />
            🐚 Como Cultuar. <br />
            🐚 Formas de Culto. <br />
            🐚 Ajê e Orí. <br />
            🐚 Assentamento de Ajê. <br />
            🐚 Adimú Ajê. <br />
            🐚 Sacrifícios. <br />
            🐚 Ewê Ajê. <br />
            🐚 Èsú Awure. <br />
            🐚 Generosidade, Honestidade e Sucesso. <br />
            🐚Ofó, Àdúrà, Oriki, Orin, Ebó. <br />
            🐚 10 regras para adquirir Prosperidade. <br />
          </span>
        </div>
      </section>
      <section className={style.six}>
        <div className={style.secoundTextBox}>
          <div className={style.button}>
            <Link
              href="https://pay.kiwify.com.br/XGEQOXa"
              className={style.secoundLink}
            >
              Comprar
            </Link>
          </div>
          <br />
          <br />
          <span className={style.offer_one}>De R$457,00</span>
          <span className={style.offer_two}>Por R$137,00</span>
          <span className={style.offer_three}>Ou em até 6x de R$25,70</span>
        </div>
      </section>
      <section className={style.seven}>
        <div className={style.textBox}>
          <Image
            src="/BabaJahari_7.jpg"
            alt="Alagbara"
            width={736}
            height={736}
            className={style.hearthAlagbara}
          />

          <h2 className={style.title}>Fale conosco</h2>

          <span className={style.contact}>
            (11)93032-9758
            <br />
            Rua Maritaca, 197, Cidade Popular
            <br />
            contato@egbejahari.com
          </span>

          <div className={style.buttonGroup}>
            <Link
              href="http://instagram.com/egbejahari"
              className={style.button}
            >
              <Instagram />
            </Link>

            <Link href="/" className={style.button}>
              egbejahari.com.br
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

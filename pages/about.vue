<template>
  <div>
    <section class="g-section">
      <img
        class="g-section__image"
        data-aos="zoom-out-up"
        src="~/assets/images/pages/about/profile.jpg"
        alt="Minha foto, tirada pelo lado esquerdo do rosto. Estou de óculos e esboçando um sorriso de lábios cerrados."
        :class="isMenuVisible ? 'invisible' : 'aos-animate'"
      />
      <div
        class="g-content-box"
        data-aos="fade-right"
        :class="isMenuVisible ? 'invisible' : 'aos-animate'"
      >
        <h3><base-dynamic-text text-to-be-written="O homem por trás da mágica" /></h3>
        <p>
          William Gonçalves, carioca, natural da Zona Norte (Alô, Andaraí!), mas andarilho
          da Oeste e da Baixada, há mais de 15 anos. Flamenguista roxo, na alegria e na
          sofrência. Pai de um príncipe de 3 anos que me enche de orgulho e me mostra como
          A Vida é Bela e digna de um Oscar, como Roberto Benigni.
        </p>
        <p>
          Canhoto nascido na Primavera de 1988, que desde cedo fez jus a fama dos
          'left-handed', com ótima noção espacial, criatividade e tendência as atividades
          artísticas. Os astros, na hora registrada em certidão, garantiram intensidade,
          determinação, inconformismo, espontaneidade, livre-pensamento, grande imaginação
          e sensibilidade. Mas esse papo a gente deixa pra quem curte.
        </p>
        <p>
          Designer "autodidata" (entre aspas, porque desde o advento da internet, ninguém
          aprende nada sozinho...hahaha) há tanto tempo que já nem sei o quanto, mas
          oficialmente atuante desde 2016, quando comecei a levar o tal talento mais a
          sério. Trabalhei com muitos clientes em vários projetos bacanas, incluindo o
          primeiro mapa do transporte metropolitano do Rio para o app da Moovit, trampo
          que rendeu uma matéria no Jornal O Dia, na época.
        </p>
        <p>
          Desenvolvedor em Formação, apaixonado por Front-End, com estudos focados no
          desenvolvimento web, desde HTML, CSS e JavaScript, até React e Vue.js, além de
          conceitos de Design, UI, UX e usabilidade.
        </p>
        <p>
          Voltei para o universo da programação em meio a pandemia, depois de 10 anos de
          uma graduação (Sistemas de Informação) trancada no último período. Atuante em
          outro segmento (Energia Segura), entendia que não fazia sentido finalizar o
          curso e decidi continuar focado no meu trabalho. Uma década depois, mais maduro
          e com um propósito redirecionado, ressignifiquei minha paixão pelos códigos e
          descobri nisso a minha real vocação.
        </p>
        <p>
          Sabe o cara que você busca pra pensar o não óbvio em seus projetos e chegar a um
          resultado de encher os olhos? Esse cara sou eu! (São tantas emoções, bicho!)
        </p>
      </div>
    </section>
    <section class="g-section g-section--right-aligned">
      <img
        class="g-section__image"
        data-aos="zoom-out-up"
        src="~/assets/images/pages/about/mage-in-red.png"
        alt="Ícone do logo do Mago em cor branca com fundo vermelho."
        :class="isMenuVisible ? 'invisible' : 'aos-animate'"
      />
      <div
        class="g-content-box"
        data-aos="fade-left"
        :class="isMenuVisible ? 'invisible' : 'aos-animate'"
      >
        <h3>De onde o Mago surgiu?</h3>
        <p>
          O Mago nasceu de uma brincadeira durante o Mega Hack 3.0 da Shawee, do qual
          participei, no desafio da Árvore Educação. Meu parceiro de equipe e amigo nessa
          jornada Dev,
          <a
            href="https://www.linkedin.com/in/thiagopederzollimdasilva/"
            target="_blank"
            rel="noreferrer noopener"
            >Thiago Pederzolli</a
          >, me deu o apelido 'Mago do CSS', em função das minhas habilidades com
          estilização.
        </p>
        <p>
          Aproveitando a alcunha, comecei a compartilhar conteúdo no Instagram, no
          LinkedIn e no YouTube, através do meu canal, falando sobre propriedades e
          recursos do CSS. Mas ao perceber que poderia explorar outros temas, reduzi o
          nome a 'Mago', para que outros assuntos possam ser abordados em publicações
          futuras.
        </p>
        <p>
          A ideia é usar essa marca pessoal para replicar conhecimento e compartilhar o
          aprendizado com outros desevolvedores que, assim como eu, têm trilhado essa
          estrada do desenvolvimento Web.
        </p>
      </div>
    </section>
    <section class="g-section">
      <img
        class="g-section__image"
        data-aos="zoom-out-up"
        src="~/assets/images/pages/about/stacks-used.png"
        alt="Ícone de fechamento de tag HTML, com os logos do Nuxt.js, do Vue.js e do Sass, abaixo."
        :class="isMenuVisible ? 'invisible' : 'aos-animate'"
      />
      <div
        class="g-content-box"
        data-aos="fade-right"
        :class="isMenuVisible ? 'invisible' : 'aos-animate'"
      >
        <h3>Sobre esse portif*da</h3>
        <p>
          Essa página linda de bonita foi feita com
          <a href="https://nuxtjs.org/" target="_blank" rel="noreferrer noopener"
            >Nuxt.js</a
          >, um framework baseado em
          <a href="https://vuejs.org/" target="_blank" rel="noreferrer noopener">Vue.js</a
          >, que permite desenvolver aplicações Front-End com o pé nas costas (até porque,
          você coda com as mãos).
        </p>
        <p>
          O design e os estilos são de minha autoria (chefe é chefe, pai) e foram feitos
          com
          <a href="https://sass-lang.com/" target="_blank" rel="noreferrer noopener"
            >Sass</a
          >
          em sintaxe SCSS, utilizando a metodologia BEM.
        </p>
        <p>
          Todas as artes e animações também são autorais, com exceção dos ícones das
          stacks e das ferramentas, no portfólio, que foram pegos no
          <a href="https://devicon.dev/" target="_blank" rel="noreferrer noopener"
            >DEVICON</a
          >
          ou na
          <a href="https://pt.wikipedia.org/" target="_blank" rel="noreferrer noopener"
            >Wikipédia</a
          >
          e dos ícones das redes sociais, que foram retirados de seus respectivos sites.
        </p>
        <p>E sim: ele roda na minha máquina.</p>
        <h3>Notas de compatibilidade:</h3>
        <p>
          Por utilizar recursos modernos de CSS, essa página terá o comportamento esperado
          se for usada nos seguintes navegadores, nas versões citadas:
        </p>
        <p>
          Chrome 84+ (PC/Móvel) <br />
          Firefox 79+ (PC) <br />
          Edge 84+ (PC) <br />
          Opera 70+ (PC) <br />
        </p>
        <p>
          O Safari para desktop, mesmo nas versões mais recentes, pode apresentar
          problemas de espaçamento, por não suportar a propriedade 'gap' em layouts flex.
          O Internet Explorer não exibirá a página corretamente, por não suportar os
          recursos do CSS Flexbox.
        </p>
        <p>
          Nos dispositivos móveis, Firefox 63+ cairá num fallback e poderá apresentar
          textos maiores que o esperado, dependendo do tamanho de tela, por não suportar a
          função 'clamp()', utilizada para ajustar o 'font-size', conforme mudança de
          tela.
        </p>
        <p>
          O Safari Móvel apresentará problemas de espaçamento, assim como a versão
          desktop. O mesmo acontece com Samsung Internet e Opera Móvel. Esse último, além
          da incompatibilidade do 'gap' em layout flex, também apresenta incompatibilidade
          com a função 'clamp()', assim como o Firefox 63+.
        </p>
        <p>
          Navegadores alternativos com engines baseadas nas das versões suportadas podem
          funcionar devidamente, mas não foram feitos testes abertos. Versões anteriores
          as citadas podem não ter compatibilidade (total ou parcial), com os recursos do
          site.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  head: {
    title: `Sobre mim | William 'Mago' Gonçalves`,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "O homem por trás da mágica. Conheça minha história, descubra como o 'Mago' surgiu e saiba mais sobre essa página.",
      },
      { property: "og:title", content: "Sobre mim | William 'Mago' Gonçalves" },
      { property: "og:site_name", content: "mago.link" },
      {
        property: "og:description",
        content:
          "O homem por trás da mágica. Conheça minha história, descubra como o 'Mago' surgiu e saiba mais sobre essa página.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mago.link/" },
      { property: "og:image", content: "https://mago.link/og-background.png" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },
  computed: {
    isMenuVisible() {
      return this.$store.state.menu.isMenuVisible;
    },
  },
});
</script>

<style lang="scss">
.g-section {
  &:nth-child(1) {
    .g-section__image {
      cursor: $hover--emoji--love;
    }
  }

  &:nth-child(3) {
    .g-section__image {
      cursor: $hover--emoji--code;
    }
  }

  &:nth-child(2) {
    .g-section__image {
      cursor: $hover--emoji--mage;
    }
  }

  .g-section__image {
    align-self: center;
  }
}
</style>

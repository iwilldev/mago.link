<template>
  <div>
    <section class="g-section">
      <img
        src="~/assets/images/pages/about/mage-in-red.png"
        alt="Ícone do logo do Mago em cor branca com fundo vermelho."
        class="g-section__image"
        data-aos="zoom-out-up"
        :class="isMenuVisible ? 'invisible' : 'aos-animate'"
      />
      <div
        class="g-content-box"
        data-aos="fade-right"
        :class="isMenuVisible ? 'invisible' : 'aos-animate'"
      >
        <h1><base-dynamic-text text-to-be-written="Vamos fazer mágica?" /></h1>
        <p>
          Está precisando de um combustível criativo para seu negócio ou projeto? Achou!
        </p>
        <p>
          Seja de forma pontual, ou através de um contrato de prestação de serviços,
          podemos derrotar os dragões do bloqueio criativo e alcançar ótimos resultados
          visuais para suas campanhas, páginas e aplicações. E claro: sem descontruir sua
          imagem ou desvirtuar sua história.
        </p>
        <p>Confira abaixo e descubra um pouco do que podemos fazer por aí.</p>
      </div>
    </section>
    <section class="g-section g-section--right-aligned">
      <img
        src="~/assets/images/pages/services/services-web.png"
        alt="Ícone de fechamento de tag acima e ícones abaixo: JavaScript, CSS, HTML, Vue.js e ReactJS"
        class="g-section__image"
        data-aos="zoom-out-up"
        :class="isMenuVisible ? 'invisible' : 'aos-animate'"
      />
      <div
        class="g-content-box"
        data-aos="fade-left"
        :class="isMenuVisible ? 'invisible' : 'aos-animate'"
      >
        <h3>Sites, Apps e Interfaces</h3>
        <p>
          De páginas institucionais a aplicações web customizadas, posso desenvolver uma
          infinidade de projetos para atender seu negócio.
        </p>
        <p>Você pode conferir o portfólio de projetos web através do link abaixo.</p>
        <base-button
          button-destination="/web"
          button-text="Projetos Web"
          button-icon="UIMenuWeb"
          button-type="internal"
        />
      </div>
    </section>
    <section class="g-section">
      <img
        src="~/assets/images/pages/services/services-design.png"
        alt="Ícone branco de uma paleta de cores com fundo vermelho"
        class="g-section__image"
        data-aos="zoom-out-up"
        :class="isMenuVisible ? 'invisible' : 'aos-animate'"
      />
      <div
        class="g-content-box"
        data-aos="fade-right"
        :class="isMenuVisible ? 'invisible' : 'aos-animate'"
      >
        <h3>Criação de Marca, Artes para Publicidade e Material Corporativo</h3>
        <p>
          Desenvolvo projetos visuais, desde a sua identidade até o material que será
          entregue ao cliente, seja por meios impressos ou digitais, sempre com foco no
          seu nicho e levando sua história e seu legado em consideração, na hora de criar
          qualquer material.
        </p>
        <p>
          Você pode conferir o portfólio de projetos de design através do link abaixo.
        </p>
        <base-button
          button-destination="/design"
          button-text="Design"
          button-icon="UIMenuDesign"
          button-type="internal"
        />
      </div>
    </section>
    <section class="g-section g-section--right-aligned">
      <img
        src="~/assets/images/pages/about/mage-in-red.png"
        alt="Ícone do logo do Mago em cor branca com fundo vermelho."
        class="g-section__image"
        data-aos="zoom-out-up"
        :class="isMenuVisible ? 'invisible' : 'aos-animate'"
      />
      <div
        class="g-content-box"
        data-aos="fade-left"
        :class="isMenuVisible ? 'invisible' : 'aos-animate'"
      >
        <h3>Serviços pontuais e recorrentes</h3>
        <p>
          Se você entende que sua demanda pode ser atendida através de um projeto,
          resolveremos tudo num único trabalho. Ajustaremos os prazos e escopos, chegando
          a um resultado desejado.
        </p>
        <p>
          Mas se você entende que sua demanda pode se estender pelos meses futuros e
          gostaria de um suporte contínuo com valores e condições diferenciadas, também
          podemos resolver através de um contrato de serviços.
        </p>
        <p>
          Seja como for, você pode entrar em contato através dos canais disponíveis nos
          links abaixo.
        </p>
        <p>Vamos bater um papo e entender como posso te ajudar?</p>
        <base-button
          button-destination="/contacts"
          button-text="Contatos"
          button-icon="UIMenuWeb"
          button-type="internal"
        />
      </div>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import BaseDynamicText from "~/components/BaseDynamicText.vue";

export default Vue.extend({
  components: { BaseDynamicText },
  head: {
    title: `Serviços | William 'Mago' Gonçalves`,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Vamos fazer mágica? Conheça meus principais serviços e descubra como posso apoiar sua empresa, ou seu projeto.",
      },
      { property: "og:title", content: "Serviços | William 'Mago' Gonçalves" },
      { property: "og:site_name", content: "mago.link" },
      {
        property: "og:description",
        content:
          "Vamos fazer mágica? Conheça meus principais serviços e descubra como posso apoiar sua empresa, ou seu projeto.",
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

<style lang="scss" scoped>
.g-section {
  &:nth-child(1),
  &:nth-child(4) {
    .g-section__image {
      cursor: $hover--emoji--mage;
    }
  }

  &:nth-child(3) {
    .g-section__image {
      cursor: $hover--emoji--love;
    }
  }

  &:nth-child(2) {
    .g-section__image {
      cursor: $hover--emoji--code;
    }
  }

  .g-section__image {
    align-self: center;
  }
}
</style>

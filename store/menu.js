export const state = () => ({
  isMenuVisible: false,
  menuItems: [
    { pathname: "/", text: "Início", icon: "index", altText: "Casa em design flat" },
    { pathname: "/about", text: "Sobre", icon: "about", altText: "Chapéu vermelho com a ponta dobrada e estrela" },
    { pathname: "/blog", text: "Blog", icon: "blog", altText: "Megafone" },
    { pathname: "/services", text: "Serviços", icon: "logo", altText: "" },
    { pathname: "/web", text: "Web", icon: "logo", altText: "" },
    { pathname: "/design", text: "Design", icon: "logo", altText: "" },
    { pathname: "/resume", text: "Currículo", icon: "logo", altText: "" },
    { pathname: "/contacts", text: "Contatos", icon: "logo", altText: "" },
  ],
})

export const mutations = {
  toggleMenu: (state) => {
    return state.isMenuVisible = !state.isMenuVisible
  }
}
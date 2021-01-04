export const state = () => ({
  isMenuVisible: false,
  menuItems: [
    { pathname: '/', text: 'Início', icon: 'UIMenuHome' },
    { pathname: '/about', text: 'Sobre', icon: 'logo' },
    { pathname: '/blog', text: 'Blog', icon: 'UIMenuBlog' },
    { pathname: '/services', text: 'Serviços', icon: 'UIMenuServices' },
    { pathname: '/web', text: 'Web', icon: 'UIMenuWeb' },
    { pathname: '/design', text: 'Design', icon: 'UIMenuDesign' },
    { pathname: '/resume', text: 'Currículo', icon: 'UIMenuResume' },
    { pathname: '/contacts', text: 'Contatos', icon: 'UIMenuContacts' },
  ],
})

export const mutations = {
  toggleMenu: (state) => {
    return (state.isMenuVisible = !state.isMenuVisible)
  },
}

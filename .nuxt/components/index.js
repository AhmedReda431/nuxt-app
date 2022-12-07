export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as Tutorial } from '../..\\components\\Tutorial.vue'
export { default as ProjectsContact } from '../..\\components\\Projects\\Contact.vue'
export { default as ProjectsImagesGallery } from '../..\\components\\Projects\\ImagesGallery.vue'
export { default as SharedContactUsModal } from '../..\\components\\Shared\\ContactUsModal.vue'
export { default as SharedCover } from '../..\\components\\Shared\\cover.vue'
export { default as SharedFooter } from '../..\\components\\Shared\\Footer.vue'
export { default as SharedHomeNav } from '../..\\components\\Shared\\HomeNav.vue'
export { default as SharedMiniCover } from '../..\\components\\Shared\\MiniCover.vue'
export { default as SharedSolidMiniCover } from '../..\\components\\Shared\\SolidMiniCover.vue'
export { default as SharedNavLang } from '../..\\components\\Shared\\Nav\\Lang.vue'
export { default as SharedNavLinks } from '../..\\components\\Shared\\Nav\\Links.vue'
export { default as SharedNavNavbar } from '../..\\components\\Shared\\Nav\\Navbar.vue'
export { default as SharedNavSocial } from '../..\\components\\Shared\\Nav\\Social.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}

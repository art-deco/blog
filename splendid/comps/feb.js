import __initOnThisPage from './__init/on-this-page'
import __initSidebar from './__init/sidebar'
import __renameMap0 from './__rename-maps/styles/sidebar'
import __renameMap1 from './__rename-maps/styles/on-this-page'
import makeClassGetter from './__mcg'
const renameMaps = { 'styles/sidebar.css': __renameMap0,
  'styles/on-this-page.css': __renameMap1 }
__initOnThisPage(),__initSidebar()
import { Component, render, h } from '@externs/preact'
import { makeIo, init, start } from './__competent-lib'
import GithubBadge from '../components/github-badge.jsx'
import Highlightjs from 'splendid/build/components/highlightjs'
import SocialButtons from 'splendid/build/components/social-buttons'

const __components = {
  'github-badge': GithubBadge,
  'highlightjs': Highlightjs,
  'social-buttons': SocialButtons,
}

const io = makeIo()

/** @type {!Array<!preact.PreactProps>} */
const meta = [{
  key: 'social-buttons',
  id: 'c4885',
  props: {
    url: 'https://art-deco.github.io/blog/february-2020.html',
    meta: true,
    className: 'b-xq b-Hk',
  },
},
{
  key: 'highlightjs',
  id: 'ccdbf,ccdbf1,ccdbf2,ccdbf3,ccdbf4',
  props: {
    lang: 'javascript',
  },
},
{
  key: 'highlightjs',
  id: 'c1d47,c1d471',
  props: {
    lang: 'css',
  },
},
{
  key: 'github-badge',
  id: 'cc3eb',
  props: {
    owner: 'art-deco',
    name: 'blog',
  },
}]
meta.forEach(({ key, id, props = {}, children = [] }) => {
  const Comp = __components[key]
  const plain = Comp.plain || (/^\s*class\s+/.test(Comp.toString()) && !Component.isPrototypeOf(Comp))
  props.splendid = { mount: '/blog/', addCSS(stylesheet) {
    return makeClassGetter(renameMaps[stylesheet])
  } }

  const ids = id.split(',')
  ids.forEach((Id) => {
    const { parent, el } = init(Id, key)
    if (!el) return
    const renderMeta = /** @type {_competent.RenderMeta} */ ({ key, id: Id, plain })
    let comp
    el.render = () => {
      comp = start(renderMeta, Comp, comp, el, parent, props, children, { render, Component, h })
      return comp
    }
    el.render.meta = renderMeta
    io.observe(el)
  })
})

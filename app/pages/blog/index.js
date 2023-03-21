import Page from 'classes/Page'

export default class Blog extends Page {
  constructor () {
    super({
      id: 'blog',
      element: '.blog',
      elements: {
        wrapper: '.blog__wrapper',
        navigation: document.querySelector('.navigation'),
        title: '.blog__title'
      }
    })
  }
}

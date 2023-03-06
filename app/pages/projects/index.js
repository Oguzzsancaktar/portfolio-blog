import Page from 'classes/Page'

export default class Projects extends Page {
  constructor () {
    super({
      id: 'projects',
      element: '.projects',
      elements: {
        navigation: document.querySelector('.navigation')
      }
    })
  }

  create () {
    super.create()
  }

  destroy () {
    super.destroy()
  }
}

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import constants from 'constants.js'
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

describe('User can browse pokemon in infinite list - User can view detailed information of each pokemon', () => {
  const setup = () => render(<App />)

  test('ListPokemon & LoadMore button should be render & visible in container', async () => {
    const { container, getByTestId } = setup()
    expect(container).toHaveTextContent(constants.appName)
    const ListPokemon = getByTestId('ListPokemon')
    expect(ListPokemon).toBeEmpty()
    expect(ListPokemon).toBeVisible()

    await wait(() => {
      expect(ListPokemon).not.toBeEmpty()
      expect(ListPokemon.children).toHaveLength(10)
    })
  })

  test('Infinite or Load More', async () => {
    const { getByTestId } = setup()
    const ListPokemon = getByTestId('ListPokemon')
    const LoadMore = getByTestId('loadMore')
    fireEvent.click(LoadMore)
    await wait(() => {
      expect(ListPokemon.children).toHaveLength(15)
    })
  })

  test('User can view the image of each pokemon', async () => {
    const { queryAllByTestId } = setup()
    await wait(() => {
      const ImagePokemon = queryAllByTestId('ListPokemon.image')
      expect(ImagePokemon).toHaveLength(15)
    })
  })
})
test.todo(
  'User can filter list of pokemon based on an attribute of pokemon (feel free to choose one attribute to use for filtering i.e. nature, types)',
)

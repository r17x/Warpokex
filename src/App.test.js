import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
describe('User can browse pokemon in infinite list - User can view detailed information of each pokemon', () => {
    test('ListPokemon & LoadMore button should be render & visible in container', () => {
        const {container, getByTestId } = render(<App/>)
        expect(container).toHaveTextContent(/loading/i)
        const ListPokemon = getByTestId('ListPokemon') 
        const LoadMore = getByTestId('loadMore')
        expect(container).toContainElement(LoadMore)
        expect(container).toContainElement(ListPokemon)
        expect(ListPokemon).toBeVisible()
        expect(LoadMore).toBeVisible()
    })

    test('When no connection should show no connection', async () => {
        beforeEach(() => {
            global.fetch = jest.fn().mockImplementation(() => {
                throw new Error(['no Connection'])
            }) 
        })

        const spyFetch = jest.spyOn(global, 'fetch')

        const {container, getByText} = render(<App/>)

        await wait(() => {
            expect(container).toHaveTextContent(/something error/i)
            expect(spyFetch).toHaveBeenCalledTime(1)
        })
    })
})
test.todo('User can view the image of each pokemon')
test.todo('User can filter list of pokemon based on an attribute of pokemon (feel free to choose one attribute to use for filtering i.e. nature, types)')

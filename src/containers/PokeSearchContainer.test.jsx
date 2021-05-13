import React from 'react';
import { getAllByText, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PokeContainer } from './PokeSearchContainer';

describe('Pokemon Container', () => {

  it('displays a list of 151 Pokemon', async () => {
    render(<PokeContainer />);

    screen.getByText('L O A D I N G');

    return waitFor(() => {
      const poke = screen.getAllByText('details -', { exact: false });
      expect(poke).toHaveLength(151);
    });
  });


  it('searches for "re" and returns the results', async () => {
    render(<PokeContainer />);

    screen.getByText('L O A D I N G');

    const input = await screen.findByPlaceholderText('search here');
    userEvent.type(input, 're');

    return waitFor(() => {
      const poke = screen.getAllByText('details -', { exact: false });
      expect(poke).toHaveLength(6);
    });
  });

});
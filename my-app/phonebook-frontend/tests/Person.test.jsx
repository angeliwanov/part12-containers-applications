import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Person from '../src/components/Person';

describe('Person', () => {
  test('shows person details', () => {
    const person = { name: 'Angel', number: '123-123-123' };
    render(<Person person={person} />);

    expect(screen.getByText('Angel')).toBeVisible();
    expect(screen.getByText('123-123-123')).toBeVisible();
  });
});

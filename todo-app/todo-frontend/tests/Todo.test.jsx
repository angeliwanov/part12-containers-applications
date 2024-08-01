import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Todo from '../src/Todos/Todo';

describe('Todo', () => {
  test('Todo', () => {
    const todo = { text: 'Write code', done: false };

    render(<Todo todo={todo} />);

    expect(screen.getByText('Write code')).toBeVisible();
  });
});

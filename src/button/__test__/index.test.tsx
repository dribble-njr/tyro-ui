import React from 'react'
import { render } from '@testing-library/react'
import Button from '..'

describe('Button', () => {
  test('render correctly', () => {
    const { getByText } = render(<Button>Hello Button</Button>)
    const element = getByText('Hello Button') as HTMLButtonElement
    expect(element).toBeTruthy()
  })
})

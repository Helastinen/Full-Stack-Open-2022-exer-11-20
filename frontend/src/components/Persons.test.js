import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"

import { Persons } from "./Persons"

describe("Person in Numbers list", () => { 
  
  const persons = [{
    name: "Antti Hellsten",
    number: "111-4214124",
    id: 1
  }]

  const mockHandler = jest.fn()

  test("render person in Numbers list", () => {
    render(<Persons 
      persons={persons}
      handleDelete={mockHandler}
    />)

    const name = screen.getByText("Antti", {exact: false})
    const number = screen.getByText("111-4214124", {exact: false})
    expect(name).toBeDefined()
    expect(number).toBeDefined()
  })
});
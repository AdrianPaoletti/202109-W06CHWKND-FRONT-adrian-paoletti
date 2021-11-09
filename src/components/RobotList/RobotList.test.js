import { render } from "@testing-library/react"
import RobotList from "./RobotList"

describe("Given a RobotList component", () => {
  describe("When the component is invoke", () => {
    test("Then it should render the component", () => {
      render(<RobotList />)
    })
  })
})
import { render, screen } from "@testing-library/react";
import RobotCard from "./RobotCard";

describe("Given a RobotCard component", () => {
  describe("When it receives a robot", () => {
    test("Then it should render the name, the image and the buttons", () => {
      const robot =
      {
        features: {
          speed: 10,
          endurance: 10,
          date: "1950-01-01T00:14:44.000Z"
        },
        id: 1,
        name: "dfsdfasdfasdfs",
        image: "https://static1.elnortedecastilla.es/www/multimedia/202104/28/media/cortadas/risitascunao-kTsG-U140205062681IKC-1248x770@El%20Norte.jpg"
      };

      render(<RobotCard robotObject={robot} />);

      const name = screen.getByRole("heading", { name: robot.name });
      const image = screen.getByRole("img", { image: robot.image });
      const buttonEdit = screen.getByRole("button", { name: /edit/i });
      const buttonDelete = screen.getByRole("button", { name: /delete/i });

      expect(name).toBeInTheDocument();
      expect(image).toBeInTheDocument();
      expect(buttonEdit).toBeInTheDocument();
      expect(buttonDelete).toBeInTheDocument();
    })
  })
})
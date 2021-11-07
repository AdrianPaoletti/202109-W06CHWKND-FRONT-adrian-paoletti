import { datatype, image } from "faker";
import { lorem } from "faker/locale/es";
import { Factory } from "fishery";

const factory = Factory.define(({ sequence }) => ({
  "_id": sequence,
  name: lorem.word(1),
  image: image.people(),
  features: {
    speed: datatype.number(10),
    endurance: datatype.number(10),
    date: datatype.datetime()
  }
}));

export const getRandomRobot = () => factory.build();
export const getRandomRobots = () => factory.buildList(3)
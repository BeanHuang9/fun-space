import Mock from "mockjs";
import spotData from "./data/spotData.json";
import spots from './data/spots.json'

Mock.mock('/mock/spot', { code: 200, data: spotData })

Mock.mock('/mock/spots', { code: 200, data: spots })

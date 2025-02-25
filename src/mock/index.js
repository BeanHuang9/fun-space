import Mock from "mockjs";
import spotData from "./data/spotData.json";


Mock.mock('/mock/spot', { code: 200, data: spotData })

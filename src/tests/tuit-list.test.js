import {Tuits} from "../components/tuits";
import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import {findAllTuits} from "../services/tuits-service";
import axios from "axios";

jest.mock('axios');

const MOCKED_USERS = [
    {username: 'ellen_ripley', password: 'lv426', email: 'repley@weyland.com', _id: "123"},
    {username: 'sarah_conor', password: 'illbeback', email: 'sarah@bigjeff.com', _id: "234"},
]
const MOCKED_TUITS = [
    {tuit: 'ellen tuit', postedBy: MOCKED_USERS[0], _id: "223"},
    {tuit: 'sarah tuit', postedBy: MOCKED_USERS[1], _id: "323"}
];


test('tuit list renders static tuit array', () => {
  render(
      <HashRouter>
        <Tuits tuits={MOCKED_TUITS}/>
      </HashRouter>);
  const linkElement = screen.getByText(/ellen tuit/i);
  expect(linkElement).toBeInTheDocument();

});

test('tuit list renders async', async () => {
  // TODO: implement this
})

test('tuit list renders mocked', async () => {
  axios.get.mockImplementation(() =>
      Promise.resolve({ data: {tuits: MOCKED_TUITS} }));
  const response = await findAllTuits();
  const tuits = response.tuits;
  render(
      <HashRouter>
        <Tuits tuits={tuits}/>
      </HashRouter>);
  const linkElement = screen.getByText(/alice's tuit/i);
  expect(linkElement).toBeInTheDocument();
});

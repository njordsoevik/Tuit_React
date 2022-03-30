import Tuits from "../components/tuits";
import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import {findAllTuits} from "../services/tuits-service";
import axios from "axios";

//jest.mock('axios');

const MOCKED_USERS = [
    {username: 'ellen_ripley', password: 'lv426', email: 'repley@weyland.com', _id: "123"},
    {username: 'sarah_conor', password: 'illbeback', email: 'sarah@bigjeff.com', _id: "234"},
]
const MOCKED_TUITS = [
    {tuit: 'ellen\'s tuit', postedBy: MOCKED_USERS[0], _id: "223"},
    {tuit: 'sarah\'s tuit', postedBy: MOCKED_USERS[1], _id: "323"}
];

test('tuit list renders static tuit array', () => {
    render(
        <HashRouter>
            <Tuits tuits={MOCKED_TUITS}/>
        </HashRouter>);
    const linkElement = screen.getByText(/ellen\'s tuit/i);
    expect(linkElement).toBeInTheDocument();

});

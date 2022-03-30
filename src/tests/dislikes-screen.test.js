import Tuits from "../components/tuits";
import {MyDislikes} from "../profile/my-dislikes";
import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import {findAllTuits} from "../services/tuits-service";
import axios from "axios";
import {createUser, deleteUsersByUsername, findUserById} from "../services/users-service";

//jest.mock('axios');


describe('findUserById',  () => {
    // sample user we want to retrieve
    const adam = {
        username: 'adam_smith',
        password: 'not0sum',
        email: 'wealth@nations.com',
        profile: profile
    };
    // setup before running test
    beforeAll(() => {
        // clean up before the test making sure the user doesn't already exist
        return deleteUsersByUsername(adam.username)
    });

    // clean up after ourselves
    afterAll(() => {
        // remove any data we inserted
        return deleteUsersByUsername(adam.username);
    });

    test('can retrieve user from REST API by primary key', async () => {
        // insert the user in the database
        const newUser = await createUser(adam);
        const profile = {
            _id: newUser._id
        }

        // verify new user matches the parameter user
        expect(newUser.username).toEqual(adam.username);
        expect(newUser.password).toEqual(adam.password);
        expect(newUser.email).toEqual(adam.email);

        // retrieve the user from the database by its primary key
        const existingUser = await findUserById(newUser._id);

        // verify retrieved user matches parameter user
        expect(existingUser.username).toEqual(adam.username);
        expect(existingUser.password).toEqual(adam.password);
        expect(existingUser.email).toEqual(adam.email);
    });
});

test('tuit list renders static tuit array', () => {
    render(
        <HashRouter>
            <Tuits tuits={MOCKED_TUITS}/>
        </HashRouter>);
    const linkElement = screen.getByText(/ellen\'s tuit/i);
    expect(linkElement).toBeInTheDocument();

});

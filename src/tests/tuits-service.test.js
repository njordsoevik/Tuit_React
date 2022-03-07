import {
    createTuit,
    findTuitByUser, findAllTuits,
    findTuitById, updateTuit, deleteTuit
} from "../services/tuits-service";
import {createUser, deleteUsersByUsername, findUserById} from "../services/users-service";

describe('can create tuit with REST API', () => {
  // TODO: implement this
    const ripley = {
        username: 'ellenripley',
        password: 'lv426',
        email: 'ellenripley@aliens.com'
    };

    const ripleyTuit = {
        tuit: 'test'
    }

    // setup test before running test
    beforeAll(() => {
        // remove any/all users to make sure we create it in the test
        return deleteUsersByUsername(ripley.username);
    })

    // clean up after test runs
    afterAll(() => {
        // remove any data we created
        //deleteTuit(ripleyTuit._id);
        return deleteTuit(newTuit._id), deleteUsersByUsername(ripley.username);
    })

    test('can insert new tuits with REST API', async () => {
        // insert new user in the database
        const newUser = await createUser(ripley);
        const newTuit = await createTuit(newUser._id, ripleyTuit)
        // verify inserted user's properties match parameter user
        expect(newTuit.tuit).toEqual(ripleyTuit.tuit);
    });
});

describe('can delete tuit wtih REST API', () => {
  // TODO: implement this
    const ripley = {
        username: 'ellenripley',
        password: 'lv426',
        email: 'ellenripley@aliens.com'
    };

    const ripleyTuit = {
        tuit: 'test'
    }

    // setup test before running test
    beforeAll(() => {
        // remove any/all users to make sure we create it in the test
        //deleteTuit(ripleyTuit._id);
        return deleteUsersByUsername(ripley.username);
    })

    // clean up after test runs
    afterAll(() => {
        // remove any data we created
        //deleteTuit(ripleyTuit._id);
        return deleteTuit(newTuit._id), deleteUsersByUsername(ripley.username);
    })

    test('can insert new tuits with REST API', async () => {
        // insert new user in the database
        const newUser = await createUser(ripley);
        const newTuit = await createTuit(newUser._id, ripleyTuit)
        // verify inserted user's properties match parameter user

        const status = await deleteTuit(newTuit._id);

        // verify we deleted at least one user by their username
        expect(status.deletedCount).toBeGreaterThanOrEqual(1);
    });
});

describe('can retrieve a tuit by their primary key with REST API', () => {
    // TODO: implement this
    const ripley = {
        username: 'ellenripley',
        password: 'lv426',
        email: 'ellenripley@aliens.com'
    };

    const ripleyTuit = {
        tuit: 'test'
    }

    // setup test before running test
    beforeAll(() => {
        // remove any/all users to make sure we create it in the test
        //deleteTuit(ripleyTuit._id);
        return deleteUsersByUsername(ripley.username);
    })

    // clean up after test runs
    afterAll(() => {
        // remove any data we created
        //deleteTuit(ripleyTuit._id);
        return deleteTuit(newTuit._id), deleteUsersByUsername(ripley.username);
    })

    test('can get new tuits with REST API', async () => {
        // insert new user in the database
        const newUser = await createUser(ripley);
        const newTuit = await createTuit(newUser._id, ripleyTuit)
        const retrievedTuit = await findTuitById(newTuit._id)
        // verify inserted tuit
        expect(retrievedTuit.tuit).toEqual(ripleyTuit.tuit);
    });
});

describe('can retrieve all tuits with REST API', () => {
    const ripley = {
        username: 'ellenripley',
        password: 'lv426',
        email: 'ellenripley@aliens.com'
    };

    const ripleyTuit = {
        tuit: 'test'
    }
    const tuits = [
        "text1", "text2", "text3"
    ];

    // setup test before running test
    beforeAll(() => {
        // remove any/all users to make sure we create it in the test
        //deleteTuit(ripleyTuit._id);
        // const newUser = createUser(ripley);
        // tuits.map((t) =>
        //     createTuit(
        //     {
        //     tuit: {t}
        //     }, newUser))
        return deleteUsersByUsername(ripley.username);
    })

    // clean up after test runs
    afterAll(() => {
        // remove any data we created
        //deleteTuit(ripleyTuit._id);
        return deleteTuit(newTuit._id), deleteUsersByUsername(ripley.username);
    })

    test('can get new tuits with REST API', async () => {
        // insert new user in the database
        const newUser = await createUser(ripley);
        const newTuit = await createTuit(newUser._id, ripleyTuit)
        const retrievedTuits = await findAllTuits()
        // verify inserted tuit
        console.log(retrievedTuits)
        console.log(retrievedTuits.length)
        //expect(retrievedTuit.tuit).toEqual(ripleyTuit.tuit);
    });
});
/**
 *  Example using react router in react.js
 *  anchor tag [<a/>] causes to refresh the page so that's why we use <link> tag from the libbrary (react-router-dom)
 *  react doesnot have built-in routing support, we need ti install separate library for it in react
 *  if we use the <a/> tag then app refresh the page but didnot refresh with <Link> tag
 *  learn about localStorage
*/

import {
    BrowserRouter, Routes, Route, Link,
    useParams, NavLink, useSearchParams, useNavigate, Outlet, useLocation
} from "react-router-dom";
import '../App.css';

function Lesson39() {
    return (
        <div>

            {/* routing related setting must be wrapped inside BrowserRouter tag */}
            <BrowserRouter>

                {/* navigation menu bar */}
                <Navbar />

                {/* define application routes  */}
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/contact/" element={<Contact />}>

                        {/* for nested routing  */}
                        <Route path="about" element={<About />}></Route>
                    </Route>

                    {/* passing params like this to any component
                      * this is called dynamic routing in reactjs
                    */}
                    <Route path="/users/:name/:id" element={<Users />}></Route>

                    {/* when you want to return to the page-not-found page/component */}
                    {/* <Route path="/*" element={<PageNotFound />}></Route> */}

                    {/* when we dont have requested page and then we want to redirect the user */}
                    {/* <Route path="/*" element={<Navigate to={'/'}/>}></Route> */}

                    <Route path="/filter" element={<Filter />}></Route>
                    <Route path="/navigation/" element={<NavigationOnClick />}></Route>
                    <Route path="/location" element={<LocationHooks />}></Route>

                </Routes>
            </BrowserRouter>
        </div>
    )
}

// Home Component
function Home() {
    return (
        <div className="App">
            <h1>Home page</h1>
            <p style={{ justifyContent: "right" }}>Enim consectetur ipsum eiusmod laboris aute culpa. Minim veniam qui veniam velit velit minim occaecat. Adipisicing qui deserunt enim esse in. Occaecat dolor sunt commodo in incididunt aliquip occaecat qui elit culpa. Reprehenderit Lorem excepteur velit tempor esse pariatur officia.
                Velit sint ex sint reprehenderit. Voluptate enim id in in nisi esse. Aliquip consectetur magna cillum aliquip minim proident veniam minim nostrud aliqua quis aliqua. Aute ut cupidatat enim amet pariatur deserunt mollit mollit ipsum proident. Nostrud ipsum est est cillum aliqua ipsum minim est elit.
                Elit est est deserunt commodo occaecat aliquip sit esse aliquip. Ad consectetur cupidatat laboris dolor. Laboris cillum ad consectetur sunt elit non incididunt minim Lorem.
                Enim id anim fugiat nostrud ut adipisicing occaecat quis labore. Sint magna quis ipsum ea occaecat fugiat exercitation ullamco enim do. Laborum do deserunt incididunt incididunt velit.</p>
        </div>
    )
}

// Contact component
function Contact() {
    return (
        <div className="App">
            <h1>Contact page</h1>
            <p style={{ justifyContent: "right" }}>Quis elit enim anim consectetur. Cupidatat ut et proident quis. Labore aute esse irure cillum irure magna labore incididunt dolor mollit. In minim enim ad labore fugiat ex officia nisi cupidatat cillum id id laboris. Ullamco id laborum exercitation dolor do minim do amet ad minim voluptate ex. Occaecat sint sint ad cillum.
                Mollit culpa nisi eu ut nisi ullamco laboris dolore qui ad. Ipsum incididunt aliquip fugiat nostrud nostrud do exercitation dolor enim. Anim laboris reprehenderit adipisicing ullamco laboris adipisicing anim cillum occaecat minim ut esse elit cillum.
                Elit est adipisicing et do ut reprehenderit ut qui ut adipisicing cupidatat. Minim elit ea anim anim in commodo in. Voluptate sunt qui laboris occaecat laborum velit pariatur veniam. Laboris minim qui tempor consequat aliquip reprehenderit. In amet officia enim nulla irure aliquip. Aliquip laborum deserunt nostrud sunt laboris in ut consequat. Consectetur veniam adipisicing laborum ipsum duis.
                Fugiat proident tempor ullamco dolor minim cillum sunt eiusmod incididunt irure. In sit Lorem sint eu et aliqua nulla qui sunt irure id ut. Veniam officia excepteur ipsum nulla pariatur cillum nulla adipisicing aute.
                Officia proident reprehenderit ea enim tempor qui ullamco cillum officia mollit. Quis sint ipsum laborum sunt exercitation anim velit velit esse. Incididunt ea adipisicing dolore ipsum id et veniam cillum exercitation. Ullamco in elit ea cillum pariatur aliqua. Aliquip quis magna sint ad et dolor aliqua magna mollit dolor ut. Tempor dolore ea ipsum consequat quis dolore eiusmod labore incididunt. Voluptate elit occaecat sint ea excepteur sit laborum excepteur ad nostrud deserunt cillum ea incididunt.</p>

            {/* if you want to do nested routing below lines */}
            <Link to={'about'}>about</Link> &nbsp;
            <Outlet></Outlet>
        </div>
    )
}

// About component
function About() {
    return (
        <div className="App">
            <h1>About page</h1>
            <p style={{ justifyContent: "right" }}>Reprehenderit velit do ea dolore voluptate reprehenderit eu duis officia. Aute magna laboris in pariatur aute enim occaecat officia minim excepteur. Est do excepteur eu aliquip nulla. Incididunt elit do magna officia ullamco dolore incididunt eu. Exercitation dolore ad qui ea eu proident. Commodo do aliquip occaecat elit qui. Sint Lorem aliquip consequat laboris deserunt irure elit do eiusmod reprehenderit id deserunt.
                Nulla velit non non labore cillum culpa ut nostrud pariatur. Aute et esse consectetur aliquip labore elit adipisicing nisi id et ad. Cillum labore mollit dolore nostrud fugiat excepteur velit. Et cupidatat laborum occaecat aliquip elit nisi proident minim.</p>
        </div>
    )
}

// NavigationOnClick component              
function NavigationOnClick() {

    // you can use this directly navigate to some page/Component
    let navigation = useNavigate();

    return (
        <div className="App">
            <h1>using usenavigation Hook</h1>
            <button onClick={() => navigation('/about')}>Go to About page</button>
            <br />
            <br />
            <button onClick={() => navigation('/')}>Go to Home page</button>
        </div>
    )
}

// PageNotFound component
function PageNotFound() {
    return (
        <div className="App">
            <h1>404 page</h1>
        </div>
    )
}

// PageNotFound component
function LocationHooks() {

    let location = useLocation();

    console.log(location);
    /**
     * check in the browser console you will see this object 
     * 
     *     {
               "pathname": "/location",
               "search": "",
               "hash": "",
               "state": null,
               "key": "ggcbe1i3"
           }
     */
    return (
        <div className="App">
            <h1>location hooks </h1>
        </div>

    )
}

// Filter component
function Filter() {

    // get query parameter in that way from url 
    // [http://localhost:3000/filter?name=bilal&cms=111122] we can get [name] and [cms]
    let [searchParams, setSearchParams] = useSearchParams();

    return (
        <div className="App">
            <h1>Filter page</h1>

            <h4>name: {searchParams.get('name')}</h4>
            <h4>cms: {searchParams.get('cms')}</h4>

            {/* set text as a query string parameter in the URL on the button click */}
            <button onClick={() => setSearchParams({ text: "bilaljaved" })}>set params on click</button>
            <br />
            <br />

            {/* write text in the input tag and set int he URL
              like this [http://localhost:3000/filter?age=20&cms=15212&name=bilal]
            */}
            <input onChange={(e) => setSearchParams({ age: 20, cms: 15212, name: e.target.value })}
                placeholder="write in me" />
        </div>
    )
}

// users component
function Users() {

    //I think this is for path variable handling (need to check this)
    let params = useParams(); // hook from react-router-dom package
    let { name, id } = params // destaructure params 

    return (
        <div className="App">
            {/* using params values here*/}

            <h1>active users id {id}</h1>
            <h1>active users name {name}</h1>
        </div>
    )
}

// Navbar component and linking
function Navbar() {
    return (
        <ul className="Navbar-ul">
            <li><Link to={'/'}>Home</Link></li>

            { /* you can use NavLink instead of simple Link
               * we can assign css classes while using NavLink Tag
               * In Link Tag we are not able to do that
               */
            }

            <li><NavLink className='on-hover' to={'/contact'}>Contact</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
            <li><NavLink to={'/users'}>Users</NavLink></li>
            <li><NavLink to={'/filter'}>Filter</NavLink></li>
            <li><NavLink to={'/navigation'}>Navigation</NavLink></li>
            <li><NavLink to={'/location'}>Location</NavLink></li>
        </ul>
    )
}

export default Lesson39;


import { Link } from "react-router";

export default function HomePage() {


    return (<>
        <title>Macrozen</title>
        <div className="homepage">
            <div className="welcome-container">
                <p> Welcome to MacroZen! </p>
                <p> Input and Log your protein count when ever you want, daily! </p>
                <p> MacroZen you later! </p>
            </div>

            <div>
                <Link to="/InputProtein">+ Input Protein</Link>
            </div>
        </div>
    </>)
}
import { Link } from "react-router";

export default function HomePage() {


    return (<>
        <title>Macrozen</title>
        <div className="homepage">
            <div className="welcome-container">
                <span>Welcome to MacroZen!</span>
                <span>Input and Log your protein count when ever you want, daily!</span>
                <span>MacroZen you later!</span>
            </div>

            <div>
                <Link to="/InputProtein">+ Input Protein</Link>
            </div>
        </div>
    </>)
}
import {FC, memo} from "react"
import { Route, Switch } from "react-router-dom"
import SideBar from "../component/SideBar";
import DashboardPage from "./Dashboard.page";
import LecturePage from "./Lecture.page";
import RecordingsPage from "./Recordings.page";


interface Props{

}

const AppComponent: FC<Props> = (props) =>{
    return (
        <Switch>
            <div className="flex"> 
            <SideBar/>
            <Route path="/dashboard">
                <DashboardPage/>
            </Route>
            <Route path="/recordings">
                <RecordingsPage/>
            </Route>
            <Route path='/batch/:batchNum/lecture/:lectureNum'>
              <LecturePage/>
            </Route>
            </div>
        </Switch>
    );
}

AppComponent.defaultProps={}

export default memo(AppComponent);
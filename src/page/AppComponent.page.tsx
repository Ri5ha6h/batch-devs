import { FC, memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../component/Header';
import Navbar from '../component/Navbar';
import SideBar from '../component/SideBar';
import DashboardPage from './Dashboard.page';
import LecturePage from './Lecture.page';
import RecordingsPage from './Recordings.page';

interface Props {}

const AppComponent: FC<Props> = (props) => {
  return (
    <Switch>
      <div className="relative flex font-nunito">
        <Header />
        <Navbar />
        <SideBar />
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
        <Route path="/recordings">
          <RecordingsPage />
        </Route>
        <Route path="/batch/:batchNum/lecture/:lectureNum">
          <LecturePage />
        </Route>
      </div>
    </Switch>
  );
};

AppComponent.defaultProps = {};

export default memo(AppComponent);

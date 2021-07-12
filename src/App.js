import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetup';
import Favorites from './pages/Favorites';

import NewMeetup from './pages/NewMeetup';
import Layout from './components/layout/Layout';

function App() {
  return <div>
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetup />
        </Route>
        <Route path='/favorites'>
          <Favorites />
        </Route>
      </Switch>
    </Layout>
  </div>;
}

export default App;
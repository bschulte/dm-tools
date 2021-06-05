import { Card, CardContent, Container } from '@material-ui/core';
import { NameGenerator } from './views/NameGenerator';
import { Router } from '@reach/router';
import { Home } from './views/Home';
import { Navbar } from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />

      <Container maxWidth="lg">
        <Card>
          <CardContent>
            <Router>
              <Home path="/" />
              <NameGenerator path="/name-generator" />
            </Router>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default App;

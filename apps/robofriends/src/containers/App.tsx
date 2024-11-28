import * as React from 'react';
import './App.css';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import Header from '../components/Header';

interface Robot {
  id: number;
  name: string;
  email: string;
}

export interface IRobot {
  name: string;
  id: number;
  email: string;
}

const App: React.FC = () => {
  const [robots, setRobots] = React.useState<Robot[]>([]);
  const [searchfield, setSearchfield] = React.useState<string>('');

  React.useEffect(() => {
    const fetchRobots = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setRobots(users);
      } catch (error) {
        console.error('Error fetching robots:', error);
      }
    };

    fetchRobots();
  }, []);

  const onSearchChange = (event: React.SyntheticEvent<HTMLInputElement>): void => {
    setSearchfield(event.currentTarget.value);
  };

  const filteredRobots = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchfield.toLowerCase())
  );

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className='tc'>
      <Header />
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
};

export default App;
import React, { useEffect, useState } from 'react';
import { Column, Logo, Row } from './App.styles';
import { firestore } from './firebase/firebase.utils';
import { List } from 'semantic-ui-react';
import logo from './assets/cincy-elite.png';
import Player from './components/Player/Player';

function App() {
  const [roster, setRoster] = useState([]);

  function fetchData() {
    firestore.collection('roster').get()
      .then(snapshot => {
        let players = [];

        snapshot.forEach(doc => {
          players.push(doc.data());
        });

        setRoster(players.sort((a, b) => {
          return a.lastname.localeCompare(b.lastname);
        }));
      })
      .catch(err => {
        console.log('roster error:  ', err);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Row>
      <Column style={{ width: '15%', height: '384px' }}>
        <Logo src={logo} />
      </Column>
      <Column style={{ width: '85%' }}>
        <Player player={{ firstname: 'Rundle', lastname: 'Brockman' }} />
        <List horizontal>
          {
            roster && roster.map(player =>
              <List.Item key={player.jersey}>
                <Player player={player} />
              </List.Item>
            )
          }
        </List>
      </Column>
    </Row>
  );
}

export default App;

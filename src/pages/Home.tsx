import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import Tour from 'reactour';
import './Home.css';

const steps = [
  {
    selector: '.first-step',
    content: 'This is my 1st Step',
  },
  {
    selector: '.second-step',
    content: 'This is my 2nd Step',
  },
  {
    selector: '.third-step',
    content: 'This is my 3rd Step',
  },
  // ...
];

const Home: React.FC = () => {
  const [tourOpen, setTourOpen] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <Tour
        steps={steps}
        isOpen={tourOpen}
        onRequestClose={() => setTourOpen(false)}
        />
        <IonButton onClick={() => setTourOpen(true)}>Start Tour</IonButton>
        <br/>
        <span className="first-step">The world is your oyster.</span>
        <p className="second-step">
          If you get lost, the{' '}
          <a className="third-step" target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/">
            docs
          </a>{' '}
          will be your guide.
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Home;

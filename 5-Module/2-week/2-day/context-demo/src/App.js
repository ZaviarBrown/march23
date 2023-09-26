import { useState } from 'react';
import PupForm from "./components/PupForm";
import PupImage from "./components/PupImage";
import SuperNest from "./components/SuperNest";

const App = () => (
    <div id="app">
        <PupForm />
        <PupImage />
        <SuperNest />
    </div>
);

export default App;

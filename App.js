import {AuthProvider} from './src/context/authContext';

import AppNavigator from './src/app_navigator/AppNavigator';

const App = () => {
    return (<AuthProvider>
            <AppNavigator/>
        </AuthProvider>
    );
};

export default App;
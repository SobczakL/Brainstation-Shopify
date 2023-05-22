import { FormLayout, TextField } from '@shopify/polaris';
import ChatBox from './components/ChatBox';

export const App = () => (
    <>
        <FormLayout>
            <TextField label="First Label" autoComplete="off" />
        </FormLayout>
        <ChatBox />
    </>
);

export default App;

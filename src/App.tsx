import Cadastro from './components/cadastro/cadastro';
import Login from './components/login/login';






function App() {

return (
    <div>
      <h1>Diário Pessoal</h1>

      <Cadastro />

      <hr style={{ margin: '40px 0' }} />

      <Login />
    </div>
  );
}
  


export default App
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBarComp from '../components/NavigationBarComp';

export default function UnknownPage() {
  return (
    <>
      <NavigationBarComp>
        <div className="row">
          <h1 className="text-center my-4">404 - Página Não Encontrada</h1>
          <p className="text-center mb-4">Desculpe, a página que está à procura não existe.</p>
        </div>
      </NavigationBarComp>
    </>
  );
}
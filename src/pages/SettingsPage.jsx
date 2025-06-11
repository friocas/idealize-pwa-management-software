import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBarComp from '../components/NavigationBarComp';
import TableComp from '../components/TableComp';

export default function SettingsPage() {
  return (
    <>
      <NavigationBarComp>
        <div className="row">
          <TableComp props={{}} />
        </div>
      </NavigationBarComp>
    </>
  );
}